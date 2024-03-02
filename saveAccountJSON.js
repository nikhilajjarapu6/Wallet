let saveForm=document.getElementById('formTable')
console.log(saveForm);

saveForm.addEventListener("submit",(element)=>{
    element.preventDefault()
    let saveForm1=new FormData(saveForm)

    let saveObject=Object.fromEntries(saveForm1)
    let saveJSON=JSON.stringify(saveObject)
    console.log(saveJSON)

    window.localStorage.setItem("saveJSON",saveJSON)
})