let updateForm=document.getElementById('formTable')

updateForm.addEventListener("submit",(Element)=>{
    Element.preventDefault()
    let updateForm1=new FormData(updateForm)

    let updateObject=Object.fromEntries(updateForm1)
    let updateJSON=JSON.stringify(updateObject)
    console.log(updateJSON);

    window.localStorage.setItem("updateJSON",updateJSON)
})