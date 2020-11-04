
InptName.onselect=function(){
  let userName = prompt("Please enter your name", '');
  if (userName = null) {
  document.getElementById("InptName"),value = userName;
  }
}

InptAddress.onselect=function(){
  let userAddress = prompt("Please enter your address", '');
  if (userAddres = null) {
  document.getElementById("InptAddress"),value = userAddress;
  }
}

InptCityState.onselect=function(){
  let userCity = prompt("Please enter your city and state", '');
  if (userCity = null) {
  document.getElementById("InptCityState"),value = userCity;
  }
}

InptZip.onselect=function(){
  let userZip = prompt("Please enter your zipcode", '');
  if (userZip = null) {
  document.getElementById("InptZip"),value = userZip;
  }
}

InptPhone.onselect=function(){
  let userPhoneNum = prompt("Please enter your phone number", '');
  if (userPhone = null) {
  document.getElementById("InptPhone"),value = userPhoneNum;
  }
}

InptDes.onselect=function(){
  let userDescription = prompt("Please enter a brief description of pet", '');
  if (userDescription = null) {
  document.getElementById("InptDes"),value = userDescription;
  }
}

btnSubmit.onclick=function(){
  document.getElementById("FoundPetForm").submit();
  }