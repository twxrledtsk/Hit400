require("dotenv").config();
const express = require("express");
const router = require("./Routes");
const cors = require("cors");
const formDataParse = require("multer")().fields([]);
const PORT = process.env.PORT;

const app = express();
app.use(formDataParse);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/", router);

app.listen(PORT,()=>{
console.log(`App running on ${PORT}`);
});


module.exports = app;