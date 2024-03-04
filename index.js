require("dotenv").config();
const express = require("express");
const router = require("./Routes");
const cors = require("cors");
// const upload = require("express-fileupload");
const PORT = process.env.PORT;

const app = express();
app.use(cors());
// app.use(upload());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/", router);

app.listen(PORT,()=>{
console.log(`App running on ${PORT}`);
});


module.exports = app;