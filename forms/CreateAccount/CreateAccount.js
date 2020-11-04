inptName.onselect=function(){
  let userFullName = prompt("Please enter your full name", '');
  if (userFullName = null) {
  document.getElementById("inptName"),value = userFullName;
  }
}

inptEmail.onselect=function(){
  let userEmail = prompt("Please enter your email", '');
  if (userEmail = null) {
  document.getElementById("inputEmail"),value = userEmail;
  }
}

inptPassword.onselect=function(){
  let userPassword = prompt("Please enter your password", '');
  if (userPassword = null) {
  document.getElementById("inptPasswor"),value = userPassword;
  }
}

inptUserName.onselect=function(){
  let userTag = prompt("Please enter username you wish to use", '');
  if (userTag = null) {
  document.getElementById("inptUserName"),value = userTap;
  }
}

inptPet.onselect=function(){
  let userPet = prompt("Please enter your pet's name and a brief description", '');
  if (userPet = null) {
  document.getElementById("inptPet"),value = userPet;
  }
}

btnCreate.onclick=function(){
  document.getElementById("CreateAccount").submit();
  }