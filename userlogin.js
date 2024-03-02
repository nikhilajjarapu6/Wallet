

function submitButtonOnclick() {
  
  let registerInput = document.getElementsByClassName('registerInputClass');
  let registerInputPure = Array.from(registerInput);
  var everyValue = registerInputPure.every((element) => {
    return element.value == '';
  });
  console.log(everyValue);

  var lengthOfNulls = registerInputPure.map((element) => {
    if (element.value == '') {
      var nullElements = element;
    }
    return nullElements;
  });

  lengthOfNulls = lengthOfNulls.filter((element) => {
    return element !== undefined;
  });

  if (everyValue === true) {
    registerInputPure.map((element) => {
      element.style.border = "red solid 2px";
    });
    let emptySpan=document.getElementById('emptySpan').innerHTML = 'The Given Fields Are Mandatory. You Should Not Leave Any Fields Empty';
    emptySpan.style.color="red"
  } else if (everyValue === false) {
    registerInputPure.map((element) => {
      if (element.value === '') {
        element.style.border = "red solid 2px";
        let emptySpan= document.getElementById('emptySpan').innerHTML = 'The Given Fields Are Mandatory. You Should Not Leave Any Fields Empty';
        emptySpan.style.color="red"
      } else {
        element.style.border = "";
      }
    });
  }

  if (everyValue === true) {
    let id=document.getElementById('id')
    let idValue=id.value
    localStorage.setItem('id',idValue)
    let emailInput = document.getElementById('emailid');
    let emailInputValue = emailInput.value;
    let email = document.getElementById('emailid').value;
    localStorage.setItem('email',email)

    if (!emailInputValue.endsWith('@gmail.com') || emailInputValue.slice(0, -10) === '') {
      alert("Please enter a valid email address ending with '@gmail.com'");
      emailInput.style.border = "red 2px solid";
    } else if (emailInputValue.endsWith('@gmail.com') || emailInputValue.slice(0, -10) !== '') {
      emailInput.style.border = "";
      setTimeout(() => { emailInput.style.border = "green 2px solid" }, 500);
      setTimeout(() => { emailInput.style.border = "" }, 3500);
    }

    let phno = document.getElementById('phno');
    phnoValue = phno.value;
    localStorage.setItem('phno',phnoValue)
    if (phnoValue.length !== 10) {
      alert("Phone number should be 10 digits");
      phno.style.border = "red 2px solid";
    } else if (phnoValue.length === 10) {
      phno.style.border = "";
    }

    let passwordInput = document.getElementById('passwordinput');
    let passwordValue = passwordInput.value;
    localStorage.setItem('password',passwordValue)
    let confirmInput = document.getElementById('confirmpassword');
    let confirmPasswordValue = confirmInput.value;
    localStorage.setItem('confirmPassword',onfirmPasswordValue)
    if (passwordValue !== confirmPasswordValue) {
      alert("Passwords should match");
      passwordInput.style.border = "2px solid red";
      confirmInput.style.border = "2px solid red";
    } else if (passwordValue === confirmPasswordValue) {
      passwordInput.style.border = "green 2px solid";
      confirmInput.style.border = "green 2px solid";
    }
  }
}

function onEmailInput() {
  let emailid = document.getElementById('emailid');
  let emailInputValue = emailid.value;
  if (emailInputValue == emailInputValue.slice(0, -10) + "@gmail.com" && emailInputValue.slice(0, -10) !== '') {
    setTimeout(() => { emailid.style.border = "orange 2px solid" }, 2000);
    setTimeout(() => { emailid.style.border = "" })
  }}


function onPasswordInput() {
  let passwordInput = document.getElementById('passwordinput');
  let passwordValue = passwordInput.value;
  let confirmInput = document.getElementById('confirmpassword');
  let confirmPasswordValue = confirmInput.value;
  let typePassword=document.getElementById('typepassword')
  let typePasswordValue=typePassword.value
  
  if (passwordValue === '' || confirmPasswordValue === '') {
    passwordInput.style.border = '';
    confirmInput.style.border = '';
   
  } else if (passwordValue !== '' && confirmPasswordValue === '' || passwordValue !== confirmPasswordValue) {
    passwordInput.style.border = "2px solid green";
    confirmInput.style.border = "2px solid red";
    
  } else if (passwordValue !== '' && confirmPasswordValue !== '' && passwordValue === confirmPasswordValue) {
    passwordInput.style.border = "2px solid green";
    confirmInput.style.border = "2px solid green";
  }

  
  if (passwordValue.length >= 1 && passwordValue.length <= 5) {
    let typePassword = document.getElementById('typepassword');
    typePassword.innerHTML = "Weak password";
    typePassword.style.color="red"
  } else if (passwordValue.length >= 6 && passwordValue.length <= 10) {
    let typePassword = document.getElementById('typepassword');
    typePassword.innerHTML = "Strong password";
    typePassword.style.color="green"
  } else if (passwordValue.length >= 10 && passwordValue.length <= 15) {
    let typePassword = document.getElementById('typepassword');
    typePassword.innerHTML = "Excellent password";
    typePassword.style.color="white"
  }
  
  if (passwordValue.length > 15) {
    passwordInput.value = passwordValue.slice(0, 15);
  }
  
  if (confirmPasswordValue.length > 15) {
    confirmInput.value = confirmPasswordValue.slice(0, 15);
  }
}

function onphNoInput(){
  let phno=document.getElementById('phno')
  let phnoValue=phno.value
 

  if(phnoValue.length!==10){
    setTimeout(()=>{phno.style.border="red 2px solid"},500)
  }
  else if(phnoValue.length==10){
    phno.style.border=""
    setTimeout(()=>{phno.style.border="green 2px solid"},500)
  }
  if(phnoValue.length>10){
    phno.value=phno.value.slice(0,10)
  }
  else if(phnoValue.length>10){
    phno.value=phno.value
}
}

function onclickClosedEye(){
  let closedEye=document.getElementById('eye')
  let password=document.getElementById('passwordinput')
  password.removeAttribute('type')
  password.setAttribute('type','text')
  closedEye.removeAttribute('class')
  closedEye.setAttribute('class','fa fa-eye')
}
function onclickOpendEye(){
  let closedEye=document.getElementById('eye')
  let password=document.getElementById('passwordinput')
  password.removeAttribute('type')
  password.setAttribute('type','password')
  closedEye.removeAttribute('class')
  closedEye.setAttribute('class','fa fa-eye-slash')
}
function onclickClosedEye1(){
  let closedEye1=document.getElementById('eye1')
  let confirmpassword=document.getElementById('confirmpassword')
  confirmpassword.removeAttribute('type')
  confirmpassword.setAttribute('type','text')
  closedEye1.removeAttribute('class')
  closedEye1.setAttribute('class','fa fa-eye')
}
function onclickOpendEye1(){
  let closedEye1=document.getElementById('eye1')
  let confirmpassword=document.getElementById('confirmpassword')
 confirmpassword.removeAttribute('type')
 confirmpassword.setAttribute('type','password')
  closedEye1.removeAttribute('class')
  closedEye1.setAttribute('class','fa fa-eye-slash')
}
function home(){
  window.open("payment wallet.html","_self")
  
}
function Loginuser(){
  window.open("loginuser.html")
}
