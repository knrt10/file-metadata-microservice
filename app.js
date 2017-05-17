var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var multer = require("multer");
var app = module.exports = express();
var upload = multer({dest:'uploads/'});
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});


app.post('/upload',upload.single('file'),(req,res,next)=>{
        return res.json(req.file);
});

app.listen(process.env.PORT||3000,()=>{
    console.log("hell yeah its working");
});