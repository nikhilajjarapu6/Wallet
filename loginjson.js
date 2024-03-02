// let loginForm=document.getElementById('loginform')
// console.log(loginForm)

// loginForm.addEventListener("submit",(element)=>{
//     // element.preventDefault()
//     let loginForm1=new FormData(loginForm)

//     let object=Object.fromEntries(loginForm1)
//     console.log(object)
//     let loginJson=JSON.stringify(object)
//     console.log(loginJson)

//     window.localStorage.setItem("loginForm",loginJson)
//     fetch("file:///D:/WEB%20Technologies/PAYMENT%20WALLET/userlogin.html")
// })

let loginForm = document.getElementById('loginform');
console.log(loginForm);

loginForm.addEventListener("submit", (event) => {
    // event.preventDefault();

    let loginForm1 = new FormData(loginForm);
    let loginObject = Object.fromEntries(loginForm1);
    let loginJson = JSON.stringify(loginObject);
    console.log(loginJson);
    window.localStorage.setItem("loginJSON",loginJson)

    // let registrationData = window.localStorage.getItem("regesterJSON");
    // if (registrationData) {
    //     let registrationObject = JSON.parse(registrationData);

    //     if (loginObject.username === registrationObject.username && loginObject.password === registrationObject.password) {
    //         console.log("Login successful!");
           
    //         window.open("payment wallet.html","_self")
    //         // Perform login actions or redirect to another page
    //     } else {
    //         console.log("Invalid username or password!");
    //         // Display error message or perform other actions
    //     }
    // } else {
    //     console.log("Registration data not found!");
    //     // Display error message or perform other actions
    // }

    // Fetch the login page
   
});
