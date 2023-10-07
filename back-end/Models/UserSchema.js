const mongoose=require("mongoose");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
	Name: { type: String, required: true,trim:true },
	Email: { type: String, required: true,unique:true},
	Password: { type: String, required: true, minlength:6},
    ConfirmPassword: { type: String, required: true, minlength:6},
	MobNumber: { type: String, required: true },
    College:{ type: String, required: true },
	Country:{ type: String, required: true },
    State:{ type: String, required: true },
    City:{ type: String, required: true },
    Gender:{ type: String, required: true },
    YearofStudy:{type: String, required: true},
    ifPMegalith:{type: String, required: true},
	MegalithID:{type: String, required: false},
    Verified: { type: Boolean, default: false }
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
		expiresIn: "7d",
	});
	return token;
};

const userdb=new mongoose.model("usersdata",userSchema);

const validate = (data) => {
	const schema = Joi.object({
		Name: Joi.string().required().label("First Name"),
		Email: Joi.string().email().label("Last Name"),
		Password: passwordComplexity().required().label("Password"),
        ConfirmPassword: passwordComplexity().required().label("ConfirmPassword"),
        MobNumber: Joi.string().required().label("MobNumber"),
        College: Joi.string().required().label("College"),
		Country: Joi.string().required().label("Country"),
		State: Joi.string().required().label("State"),
		City: Joi.string().required().label("City"),
        Gender: Joi.string().required().label("Gender"),
		YearofStudy: Joi.string().required().label("YearofStudy"),
		ifPMegalith: Joi.string().required().label("ifPMegalith"),
		MegalithID: Joi.string().required().label("MegalithID"),
	});
	return schema.validate(data);
};
module.exports=userdb;