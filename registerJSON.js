let registerForm=document.getElementById('regester')
console.log(registerForm)

registerForm.addEventListener("submit",(element)=>{
    element.preventDefault()
    let registerForm1= new FormData(registerForm)

    let regesterObject=Object.fromEntries(registerForm1)
    let regesterJSON=JSON.stringify(regesterObject)
    console.log(regesterJSON)

    window.localStorage.setItem("regesterJSON",regesterJSON)
})