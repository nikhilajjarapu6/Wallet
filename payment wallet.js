// function submitbuttononclick(){
//     let registerInputClass=document.getElementsByClassName("registerInputClass")
//     let registerInputClasspureArray=Array.from(registerInputClass)
//     registerInputClasspureArray.map(iterateElements)=> {
//         let iterateElementsValues=iterateElements.value
//         if(iterateElementsValues==''){
//             document.getElementById('emptyFieldErrorSpan').innerHTML='the given fileds are manadtary you need to fill the fields'
//                     iterateElements.style.border="red solid 2px"
//                     alert("thr given fields are mandotry")
//         }
//     }

// }

function aboutSelectOninput()
{
    document.getElementById('aboutSelect').style.border="none"
    document.getElementById('aboutSelect').style.outline="none"
}
function servicesSelectOninput()
{
    document.getElementById('servicesSelect').style.border="none"
    document.getElementById('servicesSelect').style.outline="none"
}
function aboutSelectOnchange()
{
    let aboutSelectValue=document.getElementById('aboutSelect').value
    if(aboutSelectValue=='JSPIDERS')
    {
        window.open("https://jspiders.com/")
    }
    else if(aboutSelectValue=='CEO')
    {
        window.open("https://yourstory.com/people/girish-shivanna?origin=awards#:~:text=Girish%20Shivanna%20Mr.%20Girish%20is%20a%20seasoned%20Executive,Test%20Yantra%20Software%20Solutions%2C%20Qspiders%2C%20Jspiders%20%26%20Flagroot.")
    }
    else if(aboutSelectValue=='FACULTIES')
    {
        document.getElementById('div2').remove()
        let facultiesApi=window.fetch("payment vallet 1st page.json")
console.log(facultiesApi)
facultiesApi.then((element)=>{element.json().then((facultyObject)=>{console.log(facultyObject) 
facultyObject.map((obj)=>{console.log(obj)
document.getElementById('mainSection1').innerHTML+=`<span id="mainSpan1">
<img id="facultyImg" src="${obj.facultyImage}">
<h3 id="h3">${obj.facultyName}</h3>
<p id="p">${obj.expertIn}</p>
</span>`})
})})
    }
}
function signupLoad()
{
    setInterval(()=>{document.getElementById('signupButton').style.color="black";
    document.getElementById('signupButton').style.fontSize=""},500)
    setInterval (()=>{document.getElementById('signupButton').style.color="red";
    document.getElementById('signupButton').style.fontSize="larger"},1000)
    // setInterval (()=>{document.getElementById('thAbout').style.color="lime"},1000)
    // setInterval (()=>{document.getElementById('thAbout').style.color="black"},2000)
    // setInterval (()=>{document.getElementById('thAbout').style.color="black"},3000)
    // setInterval (()=>{document.getElementById('thServices').style.color="black"},1000)
    // setInterval (()=>{document.getElementById('thServices').style.color="lime"},2000)
    // setInterval (()=>{document.getElementById('thServices').style.color="black"},3000)
    // setInterval (()=>{document.getElementById('thContacts').style.color="black"},1000)
    // setInterval (()=>{document.getElementById('thContacts').style.color="black"},2000)
    // setInterval (()=>{document.getElementById('thContacts').style.color="lime"},3000)
    // setInterval (()=>{document.getElementById('jspSpan').style.color="white"},1000)
    // setInterval (()=>{document.getElementById('jspSpan').style.color="black"},2000)
    // setInterval (()=>{document.getElementById('div2').style.backgroundImage="linear-gradient(orange,black)"},1000)
    // setInterval (()=>{document.getElementById('div2').style.backgroundImage="linear-gradient(black,orange)"},2000)
    // setInterval (()=>{document.getElementById('bd').style.backgroundImage="linear-gradient(white,black)"},5000)
    // setInterval (()=>{document.getElementById('bd').style.backgroundImage="linear-gradient(black,white)"},10000)

}

function playstore(){
    window.open("https://play.google.com/store/apps/details?id=com.jspiders")
}

function signup(){
    window.open("userlogin.html","_self")
}

function createAccount()
{   
    console.log(localStorage.getItem('email'))
    let userDivv = document.getElementById('userDiv');
    userDivv.style.width = '600px';
    userDivv.style.height = '300px';
    userDivv.style.position='releative';
    userDivv.style.top='100px'
    
    
    document.getElementById('userDiv').innerHTML = `<div id=createAccountdiv>
    <table id="formTable">
        <tr>
            <td>
                <select onchange="minimumSelectOnchange()" onclick="minimumSelectOninput()" oninput="minimumSelectOninput()" id="minimumSelect" class="creatAccountInputClasses" id="minimumselect">
                    <option selected hidden>MINIMUM TRANSACTION </option>
                    <option>0</option>
                    <option>100</option>
                    <option>1000</option>
                    <option>10000</option>
                </select>
            </td>
        </tr>
        <tr>
            <td> 
                <span class="userPass">
                    <input id="userPagePassword" type="password" placeholder="Password" class="creatAccountInputClasses">
                    <i onmousedown="onclickClosedEye3()" onmouseup="onNoClickClosedEye3()" id="createAccountEye" class="fa fa-eye-slash"></i>
                </span>
            </td>
        </tr>
        <tr>
            <td>
               
                <span class="userPass">
                    <input id="userPageConfirmPassword" type="password" placeholder="Confirm Password" class="creatAccountInputClasses">
                    <i onmousedown="onclickClosedEye4()" onmouseup="onNoClickClosedEye4()" id="createAccountEye" class="fa fa-eye-slash"></i>
                </span>
            </td>
        </tr>
        <tr>
            <td>
               
                <input id="amount" type="number" placeholder="Enter Amount" class="creatAccountInputClasses">
            </td>
        </tr>
        <tr>
            <td>
                <input onclick="proceedButtonOnClick()" id="proceedButton" type="button" value="Proceed" id=proceedButton>
            </td>
        </tr>
    </table> </div>
    <script src="./saveAccountJSON.js"></script>`;
    

}
// function minimumSelectOninput()
// {
//     document.getElementById('minimumSelect').style.border="2px inset rgb(125, 124, 124)"
//     document.getElementById('minimumSelect').style.outline="none"
//     document.getElementById('minimumSelect').style.borderRadius="5px"
//     setInterval (()=>{
//         let element=document.getElementById('minimumSelect').style.color="white"
//     element.style.backgroundColor="red",1000})
//     document.getElementById('minimumSelect').style.boxShadow="2px 2px 3px black"
// }

function onclickUpdateAccountId() {
    let userDivv = document.getElementById('userDiv');
    userDivv.style.width = '600px';
    userDivv.style.height = '300px';
    userDivv.style.position = 'relative';
    userDivv.style.top = '100px';

    document.getElementById('userDiv').innerHTML = `<div id="createAccountdiv">
    <table id="formTable">
        <tr>
            <td>
                <select onchange="minimumSelectOnchange()" onclick="minimumSelectOninput()" oninput="minimumSelectOninput()" id="minimumSelect" class="creatAccountInputClasses">
                    <option selected hidden>MINIMUM TRANSACTION</option>
                    <option>0</option>
                    <option>100</option>
                    <option>1000</option>
                    <option>10000</option>
                </select>
            </td>
        </tr>
        <tr>
            <td> 
                <span class="userPass">
                    <input id="userPagePassword" type="password" placeholder="Password" class="creatAccountInputClasses">
                    <i onmousedown="onclickClosedEye3()" onmouseup="onNoClickClosedEye3()" id="createAccountEye" class="fa fa-eye-slash"></i>
                </span>
            </td>
        </tr>
        <tr>
            <td>
               
                <span class="userPass">
                    <input id="userPageConfirmPassword" type="password" placeholder="Confirm Password" class="creatAccountInputClasses">
                    <i onmousedown="onclickClosedEye4()" onmouseup="onNoClickClosedEye4()" id="createAccountEye" class="fa fa-eye-slash"></i>
                </span>
            </td>
        </tr>
        <tr>
            <td>
               
                <input id="amount" type="number" placeholder="Enter Amount" class="creatAccountInputClasses">
            </td>
        </tr>
        <tr>
            <td>
                <input onclick="proceedButtonOnClick()" id="proceedButton" type="button" value="Proceed">
            </td>
        </tr>
    </table></div>
    <script src="./updateAccountJSON.js"></script>`;
}

function deleteAccount(){
    document.getElementById('userDiv').innerHTML=`<div id="createAccountdiv">
    <span>
    <form>
        <input  placeholder="Enter Your Account No" class="creatAccountInputClasses">
        <br>
        <input  placeholder="Enter Your Password" class="creatAccountInputClasses">
        <br>
        <input  style="width:20%; font-size:25px ;" type="button" value="Delete" onclick="window.confirm('Are you sure to delete your account')">
    </form>
</span></div>`
}

function onLoadUserPage() {
    // let phnono = localStorage.getItem('userPhNo');
    // document.getElementById('studentId').innerHTML = localStorage.getItem('userId');
    // document.getElementById('studentName').innerHTML = localStorage.getItem('userName');

    let registrationData = window.localStorage.getItem("regesterJSON");
    let registrationObject = JSON.parse(registrationData);

    let userId=registrationObject.id
    let username=registrationObject.name
    let userNumber=registrationObject.number

    let displyId="Student ID         :" +userId

    document.getElementById('studentId').innerHTML=displyId
    document.getElementById('studentName').innerHTML=username

}


function getAccount(){
    document.getElementById('userDiv')
}

function proceedButtonOnClick(){
    let inputfileds=document.getElementsByClassName('creatAccountInputClasses')
    let form=document.getElementsById('createAccountdiv')
    let formPure=Array.from(form)
    let everyValue=formPure.some((element)=>{
        console.log(element)}
        )

    
    let inputfiledsPure=Array.from(inputfileds)
    let everyInputValue=inputfiledsPure.some((element)=>{
        return element.value==''||element.value=='MINIMUM TRANSACTION'}
        )
    if(everyInputValue==true){
        alert("fill the all fields those are mandotary")
        inputfiledsPure.map((element)=>{
            if(element.value==''){element.style.border="2px solid red"}
            else{element.style.border=""}
        })

    }
    else{
        inputfiledsPure[0].style.border=""
        //password from regster json
        var PasswordValue=document.getElementById('userPagePassword').value
        var confirmPasswordValue=document.getElementById('userPageConfirmPassword').value 
        if(PasswordValue!==confirmPasswordValue){
            alert("check ur password")
        }
        else if(PasswordValue===confirmPasswordValue){
            inputfiledsPure.map((element)=>{
                element.style.border=""
            })
            var verification=inputfiledsPure.some((element)=>{
                return element.value=""
            })
            if(inputfiledsPure[0]!=="MINIMUM TRACNSACTION" && verification==false){
                var amountValue=document.getElementById('amount').value
                localStorage.setItem('amount',amountValue)
                var amountValue=document.getElementById('amount').value
                var minimumSelectValue=document.getElementById('minimumSelect').value
                if(minimumSelectValue=='0')
                {if(amountValue<0){
                    alert('amount should be atleast 0')
                }
                else if(amountValue>=0){
                    document.getElementById('userDiv').innerHTML=`<span id="removingSpan1">
                    <i id="avatar" class="fa-solid fa-user-tie"></i>
                    <h1>Student Id: <span class="studentDetails" id="studentId"></span><br> Student Name: <span class="studentDetails" id="studentName"></span> <br>Student Phno:     <span id="studentPhNo" class="studentDetails"></span>
                    </h1>
                </span>`
                let phnono=localStorage.getItem('userPhno')
                document.getElementById('studentId').innerHTML=localStorage.getItem('userId')
                 document.getElementById('studentName').innerHTML=localStorage.getItem('userName')
                document.getElementById('studentPhNo').innerHTML=phnono.slice(0,2)+'*******'+phnono.slice(-2) }
 }
 else if(minimumSelectValue=='100')
 {if(amountValue<100){
     alert('amount should be atleast 100')
 }
 else if(amountValue>=100){
     document.getElementById('userDiv').innerHTML=`<span id="removingSpan1">
 <i id="avatar" class="fa-solid fa-user-tie"></i>
 <h1>Student Id: <span class="studentDetails" id="studentId"></span><br> Student Name: <span class="studentDetails" id="studentName"></span> <br>Student Phno:     <span id="studentPhNo" class="studentDetails"></span>
 </h1>
</span>`
let phnono=localStorage.getItem('userPhNo')
 document.getElementById('studentId').innerHTML=localStorage.getItem('userId')
 document.getElementById('studentName').innerHTML=localStorage.getItem('userName')
 document.getElementById('studentPhNo').innerHTML=phnono.slice(0,2)+'*******'+phnono.slice(-2)
    }
    else if(minimumSelectValue=='1000')
    {if(amountValue<1000){
        alert('amount should be atleast 1000')
    }
    else if(amountValue>=1000){
        document.getElementById('userDiv').innerHTML=`<span id="removingSpan1">
        <i id="avatar" class="fa-solid fa-user-tie"></i>
        <h1>Student Id: <span class="studentDetails" id="studentId"></span><br> Student Name: <span class="studentDetails" id="studentName"></span> <br>Student Phno:     <span id="studentPhNo" class="studentDetails"></span>
        </h1>
    </span>`
    let phnono=localStorage.getItem('userPhNo')
    document.getElementById('studentId').innerHTML=localStorage.getItem('userId')
    document.getElementById('studentName').innerHTML=localStorage.getItem('userName')
    document.getElementById('studentPhNo').innerHTML=phnono.slice(0,2)+'*******'+phnono.slice(-2)

        }
    }
}
            }
else if(minimumSelectValue=='10000')
    {if(amountValue<10000){
        alert('amount should be atleast 10000')
    }
    else if(amountValue>=10000){
        document.getElementById('userDiv').innerHTML=`<span id="removingSpan1">
        <i id="avatar" class="fa-solid fa-user-tie"></i>
        <h1>Student Id: <span class="studentDetails" id="studentId"></span><br> Student Name: <span class="studentDetails" id="studentName"></span> <br>Student Phno:     <span id="studentPhNo" class="studentDetails"></span>
        </h1>
    </span>`
    let phnono=localStorage.getItem('userPhNo')
    document.getElementById('studentId').innerHTML=localStorage.getItem('userId')
    document.getElementById('studentName').innerHTML=localStorage.getItem('userName')
    document.getElementById('studentPhNo').innerHTML=phnono.slice(0,2)+'*******'+phnono.slice(-2)
    }
}

}
 
    

    }
    var pure =inputfiledsPure.map((element)=>{
        return element.value

    })
    var object={
         MINIMUMTRACNSACTION:pure[0],
         password:pure[1],
         amount:pure[3] }
         console.log(JSON.stringify(object))
         
}

function onclickPayment(){
    document.getElementById('userDiv').innerHTML=`<div id="paymentInput">
    <span>
    <form>
        <input class="payment" type="button" value="Send Amount" onclick="sendMoney()">
        <br>
        <input class="payment" type="button" value="Receive Amount" onclick="recieveMoney()">
        <br>
        <input class="payment" type="button" value="Check Balance" onclick="checkBalance()">
    </form>
</span></div>`
}

function recieveMoney(){
    document.getElementById('userDiv').innerHTML = `<div id="recieveDiv">
    <table>
        <tr>
            <td>Enter Amount:</td>
            <td><input class="receiveAmountInputClass" placeholder="Enter Amount" type="number"></td>
        </tr>
        <tr>
            <td>Enter Password:</td>
            <td><input class="receiveAmountInputClass" placeholder="Enter Password"></td>
        </tr>
        <tr>
            <td></td>
            <td><input style="font-size: 10px; width: 20%;" class="receiveAmountInputClass" type="button" value="RECIEVE"></td>
        </tr>
    </table></div>
`

}
function sendMoney(){
    document.getElementById('userDiv').innerHTML = `<div id="sendDiv">
    <table>
        <tr>
            <td>Enter Amount:</td>
            <td><input class="sendAmountInputClass" placeholder="Enter Amount" type="number"></td>
        </tr>
        <tr>
            <td>Enter Password:</td>
            <td><input class="sendAmountInputClass" placeholder="Enter Password"></td>
        </tr>
        <tr>
            <td></td>
            <td><input style="font-size: 10px; width: 20%;" class="receiveAmountInputClass" type="button" value="SEND"></td>
        </tr>
    </table></div>
`

}
function checkBalance(){
    document.getElementById('userDiv').innerHTML = `<div id="checkDiv">
    <table>
        <tr>
            <td>Enter Amount:</td>
            <td><input class="checkAmountInputClass" placeholder="Enter Amount" type="number"></td>
        </tr>
        <tr>
            <td>Enter Password:</td>
            <td><input class="checkAmountInputClass" placeholder="Enter Password"></td>
        </tr>
        <tr>
            <td></td>
            <td><input style="font-size: 10px; width: 20%;" class="checkAmountInputClass" type="button" value="SEND"></td>
        </tr>
    </table></div>
`

}
function userdetails(){
    window.open("file:///D:/WEB%20Technologies/payment%20wallet.html","_self")
}













//  JSON PAGE CODE FOR 1ST PAGE OF PAYMENT VALLET:-




[
    {
        "facultyName":"Vivek",
        "expertIn":"CoreJava expert",
        "facultyImage":"VIVEK SIR.jpeg"
        },
        {
            "facultyName":"Afroz",
            "expertIn":"Database expert",
            "facultyImage":"AFROZ SIR.jpg"
            },
            {
            "facultyName":"Prashant",
            "expertIn":"Backend expert",
            "facultyImage":"PRASHANT SIR.jpeg"
            },
            {
                "facultyName":"Ningaraju",
                "expertIn":"Frontend expert",
                "facultyImage":"NINGARAJU SIR.jpeg"
                },
                {
                    "facultyName":"Pavan",
                    "expertIn":"Programming expert",
                    "facultyImage":"PAVAN SIR.jpeg"
                    },
                    {
               "facultyName":"Koushik",
               "expertIn":"CoreJava expert",
                "facultyImage":"KOUSHIK SIR.jpeg"
                },
                {
                    "facultyName":"Gowtham",
                    "expertIn":"Database expert",
                     "facultyImage":"GOWTHAM SIR.jpeg"
                     }
                    ]
