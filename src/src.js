var express = require('express');
var app = express();
const HOST = '127.0.0.1';
const PORT= 6023;
app.get("/",(req,res)=>{
  res.send("hello there!! Iam SOUJANYA. This is my home page.");
});
app.get("/posts",(req, res)=>{
  res.send("WELCOME!!  My posts page.");
});
app.get("/*list",(req,res)=>{
  res.send("List Page!!  Topic Lists");
});
app.get("/:id[0-9]{3}", (req,res)=>{
  res.send("th id specified is :"+req.params.id);
});
var server=app.listen(PORT,(err)=>{
  if(err) throw err;
  console.log("listening on server port %s:%s",HOST, PORT);
});