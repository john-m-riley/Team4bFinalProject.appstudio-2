/*
inptEnterName.onselect=function(){
 let userName = prompt("Please enter a username", "");
 if (userName = null) {
  document.getElementById("inptEnterName"),value = userName;
  }
}



inptEnterAddress.onclick=function(){
   let userAddress = prompt("Please enter your Address", "");
 if (userAddress = null) {
  document.getElementById("inptEnterAdress"),value = userAddress;
  }
}



inptEnterCityState.onclick=function(){
   let userCity = prompt("Please enter a city", "");
 if (userCity = null) {
  document.getElementById("inptEnterCity"),value = userCity;
  }
}


inptEnterZip.onclick=function(){
   let userZip = prompt("Please enter zipcode", "");
 if (userZip = null) {
  document.getElementById("inptEnterZip"),value = userZip;
  }
}


inptEnterPhone.onclick=function(){
   let userPhone = prompt("Please enter a phone number", "");
 if (userPhone = null) {
  document.getElementById("inptEnterPhone"),value = userPhone;
  }
}



txtDescription.oninput=function(){
  let petFrom = document.getElementById("petForm");
  let message = document.getElementbyId("message");
  
  if (message.value.length == 0){
  alert("empty message is not acceptable, please enter description);
  return;
  }
  petForm.submit();
  
}


btnSubmitInfo.onclick=function(){
  document.getElementById("LostPetForm").submit();
}
