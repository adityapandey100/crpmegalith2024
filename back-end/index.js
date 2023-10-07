const express = require("express");
const app = express();
require("./Database/connection");
const router=require("./Routes/router");
const cors = require("cors");
const connection=require("./Database/connection"); 

connection();
app.use(express.json())
app.use(cors());
app.use(router);
const PORT=process.env.PORT;
app.listen(PORT,console.log(`Listening on port : ${PORT}`));