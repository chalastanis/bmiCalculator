//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

//get from the index.html file
app.get('/',function(request,response){ 
    response.sendFile(__dirname + "/index.html");
    // console.log(request);
 });

 app.post('/',function(request,response){
     var num1 = parseFloat(request.body.n1);
     var num2 = parseFloat(request.body.n2);

     var result = num1 + num2;
     
     response.send("the result is " + result);
 })
// get from the bmiCalculator.html file
 app.get('/bmiCalculator',function(req,res){ 
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post('/bmiCalculator',function(req,res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = weight/(height*height);    
    res.send("Your BMI is " + bmi);
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
});