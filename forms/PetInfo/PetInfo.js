inptPet.onselect=function(){
  let userPetName = prompt("Please enter your Pet's name", '');
  if (userPetName = null) {
  document.getElementById("inptPet"),value = userPetName;
  }
}

inptType.onselect=function(){
  let userType = prompt("Please enter the type of pet you own (dog, cat, lizard, etc.)", '');
  if (userType = null) {
  document.getElementById("inptType"),value = userType;
  }
}

inptColor.onselect=function(){
  let userColor = prompt("Please enter the color of your pet", '');
  if (userColor = null) {
  document.getElementById("inptColor"),value = userColor;
  }
}

inptUserName.onselect=function(){
  let userSpecies = prompt("Please enter the sepecies of your pet", '');
  if (userSpecies = null) {
  document.getElementById("inptSpecies"),value = userSpecies;
  }
}

inptAge.onselect=function(){
  let userAge = prompt("Please enter the age of your pet", '');
  if (userAge = null) {
  document.getElementById("inptAge"),value = userAge;
  }
}

inptDescribe.onselect=function(){
  let userDescription = prompt("Please enter a brief descrition of your pet", '');
  if (userDescription = null) {
  document.getElementById("inptDescribe"),value = userDescription;
  }
}

btnCreate.onclick=function(){
  document.getElementById("PetInfo").submit();
  }