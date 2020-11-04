/*
let inptUserName = document.getElementById("psw");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

function validateFrom () {
  let userName = document.LoginDesign.usr.value;
  let passwrod = document.LoginDesign.password.value;
  let username = "username";
  let password = "password";
if (( userName = username) && (password = password)){
return false;
}
else { 
  alert ("login was unnsuccesful, please create an account")
  }
  }


inptPassword.onkeyup=function(){
 var lowerCaseLetters = / [a-z]/g;
 if(inptUsername.value.match(lowerCaseLetters)) {
 letter.classList.remove("invalid");
 letter.classList.add("valid");
} else { 
  letter.classList.remove("valid");
  letter.classList.add("invalid");
  
}

var upperCaseLetters = /[A-Z]/g;
if(inptUserName.value.match(upperCaseLetters)){
capital.classList.remove("invalid");
capital.classList.remove("valid");
} else {
  capital.classList.remove("valid");
  capital.classList.add("invalid");
  }
  
  if(inptUserName.value.length >= 10) {
  length.classList.remove("invalid");
  length.classList.remove("valid");
} else {
  length.classList.remove("valid");
  length.classList.remove("invalid");
  }
  }
  

btnSubmit.onclick=function(){
  
}

