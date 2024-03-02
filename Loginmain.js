function usermainlogin(){
    let loginInput = document.getElementById('login');
    let loginInputPure = Array.from(loginInput);
    var everyValue = loginInputPure.every((element) => {
      return element.value == '';
    });
    console.log(everyValue);
  
    var lengthOfNulls = loginInputPure.map((element) => {
      if (element.value == '') {
        var nullElements = element;
      }
      return nullElements;
    });
  
    lengthOfNulls = lengthOfNulls.filter((element) => {
      return element !== undefined;
    });
    let email=document.getElementById('emailid')
    let emailValue=email.value
    if(emailValue!==emailValue.slice(0,-10)+"@gmail.com"){
        alert("ended with @gmail.com")
        email.style.border="red 2px solid"
    }
    
    let registrationData = window.localStorage.getItem("regesterJSON");
    let loginFormData=window.localStorage.getItem("loginJSON");
    if (loginFormData!==null) {
      let registrationObject = JSON.parse(registrationData);
      let loginObject=JSON.parse(loginFormData)

      if (loginObject.username === registrationObject.username && loginObject.password === registrationObject.password) {
          console.log("Login successful!");
          // Perform login actions or redirect to another page
          window.open("payment wallet.html")
      } else {
          console.log("Invalid username or password!");
          alert("Invalid username or password!")
         
          // Display error message or perform other actions
      }
  } else {
      console.log("Registration data not found!");
      alert("Registration data not found!")
      return;
      // Display error message or perform other actions
  }

    // if(regesterEmail===emailValue && regsterPassword===passwordValue){
      
    //   window.open('payment wallet.html')
    // }
}