var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));

//add your content here

app.listen(3000,function(){
  console.log("Server started, listening on: "+3000);
})

//custom middleware
app.use("/api/calculator/:operation/:n1/:n2", function(req,res,next){
    var calculatorRequest = {
        operation: req.params.operation,
        n1: Number(req.params.n1),
        n2: Number(req.params.n2)
      }

      let result;
      if(calculatorRequest.operation === 'add'){
        result = `Result: ${calculatorRequest.n1 + calculatorRequest.n2}`;
      }

      res.calculatorResult = result;
      next();
    })
    app.get("/api/calculator/*",function(req,res){
        res.send(res.calculatorResult);
      })    