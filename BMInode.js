const express= require("express");
const app= express();
const bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html")
})
app.post("/", function(req, res){
    var height1= Number(req.body.height);
    var weight1= Number(req.body.weight);
    var result= weight1/(Math.pow(height1,2));
    if(result<18.5){
        res.send("<h1>Your BMI is " + result+". You are underweight");
    }
    if(result>24.5){
        res.send("<h1>Your BMI is " + result+". You are overweight");
    }
    else 
        res.send("<h1>Your BMI is " + result+". You have a normal weight");
})
app.listen(2000, function(){
    console.log("The server is running in the port 2000.")
});