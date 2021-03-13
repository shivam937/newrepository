const container = document.getElementById("container");
const signIn = document.getElementById("sign-in");
const signUp = document.getElementById("sign-up");

setTimeout(() => {
  container.classList.add("sign-in");
}, 200);

const toggle = () => {
  container.classList.toggle("sign-in");
  container.classList.toggle("sign-up");
};

signIn.addEventListener("click", toggle);
signUp.addEventListener("click", toggle);

function validate(){
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  if(username.value.trim().length<3 && password.value.trim().length<5)
  {
    username.style.border = "solid 3px red";
    document.getElementById("invalid").style.visibility="visible";
    password.style.border = "solid 3px red";
    document.getElementById("invalid").style.visibility="visible";
    return false
  }
  else if(username.value.trim().length>=3 && password.value.trim().length<5) 
  {
    username.style.border = "solid 3px green";
    document.getElementById("valid").style.visibility="visible";
    password.style.border = "solid 3px red";
    document.getElementById("invalid").style.visibility="visible";
    return false
  }
  else if(username.value.trim().length<3 && password.value.trim().length>=5)
  {
    password.style.border = "solid 3px green";
    document.getElementById("valid").style.visibility="visible";
    username.style.border = "solid 3px red";
    document.getElementById("invalid").style.visibility="visible";
    return false
  }
  else
  {
    return true
  }
}

function validate1(){
  var username = document.getElementById("username1");
  var email = document.getElementById("email1");
  var password = document.getElementById("password1");
  var cpassword = document.getElementById("cpassword1");

  if(username.value.trim().length<3 && password.value.trim().length<5)
  {
    username.style.border = "solid 3px red";
    document.getElementById("invalid").style.visibility="visible";
    password.style.border = "solid 3px red";
    document.getElementById("invalid").style.visibility="visible";
    cpassword.style.border = "solid 3px red";
    document.getElementById("invalid").style.visibility="visible";
    email.style.border = "solid 3px red";
    document.getElementById("invalid").style.visibility="visible";
    return false
  }
  else if(username.value.trim().length>=3 && password.value.trim().length<5) 
  {
    username.style.border = "solid 3px green";
    document.getElementById("valid").style.visibility="visible";
    password.style.border = "solid 3px red";
    document.getElementById("invalid").style.visibility="visible";
    cpassword.style.border = "solid 3px red";
    document.getElementById("invalid").style.visibility="visible";
    email.style.border = "solid 3px red";
    document.getElementById("invalid").style.visibility="visible";
    return false
  }
  else if(username.value.trim().length<3 && password.value.trim().length>=5 && password != cpassword)
  {
    password.style.border = "solid 3px green";
    document.getElementById("valid").style.visibility="visible";
    username.style.border = "solid 3px red";
    document.getElementById("invalid").style.visibility="visible";
    cpassword.style.border = "solid 3px red";
    document.getElementById("invalid").style.visibility="visible";
    email.style.border = "solid 3px green";
    document.getElementById("invalid").style.visibility="visible";
    return false
  }
  else
  {
    return true
  }
}