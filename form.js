function setError(id,error){
element=document.getElementById(id);
element.getElementsByClassName('formerror')[0].innerHTML=error;
}
function clearErrors(){
    errors=document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML="";
    }
}
function validateForm(){
    var returnval=true;
    clearErrors();
    var name=document.forms['myform']['uname'].value;
  if(name.length<5){
    setError("name","* this name length is too short");
    returnval=false;
  }

  var email=document.forms['myform']['email'].value;
  if(email.length>15){
    setError("email","* email length is too long");
    returnval=false;
  }

  var password=document.forms['myform']['password'].value;
  if(password.length>6){
    setError("password","* password length is too long");
    returnval=false;
  }

  var confirm=document.forms['myform']['confirm'].value;
  if(confirm!=password){
    setError("confirm","* password not match");
    returnval=false;
  }



    return returnval;
}