var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("male");
var female = document.getElementById("female");
let resultArea = document.querySelector(".comment");



function calculate(){
  
    var bmi =weight.value/(height.value/100*height.value/100);
        
    var result = '';
    if(bmi<18.5){
      result = 'You are Underweight';
       }else if(18.5<=bmi&&bmi<=24.9){
      result = 'You are Healthy';
       }else if(25<=bmi&&bmi<=29.9){
      result = 'You are Overweight';
       }else if(30<=bmi&&bmi<=34.9){
      result = 'You are Obese';
       }else if(35<=bmi){
      result = 'You are Extremely obese';
       }



  resultArea.style.display = "block";
  document.querySelector(".comment").innerHTML = result
  document.querySelector("#result").innerHTML = bmi.toFixed(3);

  const utterance = new SpeechSynthesisUtterance(result);
  window.speechSynthesis.speak(utterance);

  
  }
  







