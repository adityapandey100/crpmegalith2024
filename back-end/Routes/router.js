const express=require("express");
require("dotenv").config();
const router=new express.Router();
const bcrypt = require("bcrypt");
const crypto=require("crypto");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");
const Token=require("../Models/TokenSchema");
const userdb=require("../Models/UserSchema");
const sendEmail = require("../Utils/sendEmail");

//Registration of User
router.post("/register", async (req, res) => {
    const { Email,Password,ConfirmPassword,MegalithID}= req.body;
    try {
        const preuser = await userdb.findOne({ Email:Email });
        if (preuser) {
            res.status(422).send({ message: "Email already exists" })
        } else if (Password !== ConfirmPassword) {
            res.status(422).send({ message: "Password and Confirm Password did not match" })
        } else {
			const MID="ML"+Math.round((Math.random() * 9 + 1)*(Math.pow(10, 5)));
            const salt = await bcrypt.genSalt(Number(process.env.SALT));
		    const hashPassword = await bcrypt.hash(Password, salt);
            const hashConfirmPassword = await bcrypt.hash(ConfirmPassword, salt);
            const user=await new userdb({ ...req.body, Password: hashPassword,ConfirmPassword:hashConfirmPassword ,MegalithID:MID}).save();
		    const token = await new Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString("hex"),
            }).save();
            const url = `http://localhost:3000/users/${user._id}/verify/${token.token}`;
            await sendEmail(Email, "Verify Email", url);
    
            res
            .status(201)
            .send({ message: "An Email sent to your account please verify" });
        }
    } catch (err) {
		console.log(err)
        res.status(500).send({ message: "Internal Server Error" });
    } 
});

//Email id Verification
router.get("/users/:id/verify/:token", async (req, res) => {
	try {
		const user = await userdb.findOne({ _id: req.params.id });
		if (!user) return res.status(400).send({ message: "Invalid link" });
		
		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" });

		await user.updateOne({ id: user._id, Verified: true });
		await token.remove;
		res.status(200).send({ message: "Email verified successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

//User sign in
router.post("/signin", async (req, res) => {
    const { Email,Password}= req.body;
    try {
		const user = await userdb.findOne({ Email:Email });
		if (!user)
			return res.status(401).send({ message: "Invalid Email or Password" });

		const validPassword = await bcrypt.compare(Password,user.Password);
		if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });
		if (!user.Verified) {
			let token = await Token.findOne({ userId: user._id });
			if (!token) {
				token = await new Token({
					userId: user._id,
					token: crypto.randomBytes(32).toString("hex"),
				}).save();
				const url = `http://localhost:3000/users/${user._id}/verify/${token.token}`;
				await sendEmail(user.email, "Verify Email", url);
			}
	
			return res
				.status(400)
				.send({ message: "An Email sent to your account please verify" });
		}
		const token = user.generateAuthToken();
		res.status(200).send({data: token, message: "Logged in successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

// Password Link
router.post("/password-reset", async (req, res) => {
	try {
		const emailSchema = Joi.object({
			Email: Joi.string().email().required().label("Email"),
		});
		const { error } = emailSchema.validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await userdb.findOne({ Email: req.body.Email });
		if (!user)
			return res
				.status(409)
				.send({ message: "User with given email does not exist!" });

		const token = await Token.findOne({ userId: user._id });
		if (!token) {
			token = await new Token({
				userId: user._id,
				token: crypto.randomBytes(32).toString("hex"),
			}).save();
		}

		const url = `http://localhost:3000/password-reset/${user._id}/${token.token}/`;
		await sendEmail(user.Email, "Password Reset", url);

		res
			.status(200)
			.send({ message: "Password reset link sent to your email account" });
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});

// Verify Password Reset Link
router.get("/password-reset/:id/:token", async (req, res) => {
	try {
		const user = await userdb.findOne({ _id: req.params.id });
		if (!user) return res.status(400).send({ message: "Invalid link" });

		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" })
		res.status(200).send("Valid Url");
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

// Set New Password
router.post("/password-reset/:id/:token", async (req, res) => {
	try {
		const passwordSchema = Joi.object({
			Password: passwordComplexity().required().label("Password"),
			ConfirmPassword: passwordComplexity().required().label("Confirm Password"),
		});
		const { error } = passwordSchema.validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await userdb.findOne({ _id: req.params.id });
		if (!user) return res.status(400).send({ message: "Invalid link" });

		const token = await Token.findOne({
			userId: user._id,
			token: req.params.token,
		});
		if (!token) return res.status(400).send({ message: "Invalid link" });

		if (!user.verified) user.verified = true;

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.Password, salt);
		const hashConfirmPassword = await bcrypt.hash(req.body.ConfirmPassword, salt);

		user.Password = hashPassword;
		user.ConfirmPassword = hashConfirmPassword;
		await user.save();
		await token.remove;

		res.status(200).send({ message: "Password reset successfully" });
	} catch (error) {
		console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports=router;