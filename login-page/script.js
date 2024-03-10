let emailInput = document.querySelector(".email-inputvalue");
let emailInputPasswordchange = document.querySelector(".email-inputvalue2");
let passwordInput = document.querySelector(".password-inputvalue");
let loginButton = document.querySelector(".loginbutton");
let forgotPassword = document.querySelector(".forgetpasswordbtn");
let confirmBtn = document.querySelector(".confirmbtn");
let loginPage = document.querySelector(".login-page");
let passwordPAge = document.querySelector(".password-page");

//getting email and password from input field
let email;
let password;
loginButton.addEventListener("click", (e) => {

    email = emailInput.value;
    password = passwordInput.value;

    console.log(email);
    console.log(password);
});

//create account btn
let emailPasswordchange;
confirmBtn.addEventListener("click",(e)=>
{
    console.log("password confirm...");
    emailPasswordchange = emailInputPasswordchange.value;
    
    console.log(emailPasswordchange);

})

//forgot password btn
forgotPassword.addEventListener("click", ()=>
{
    // console.log("New password...");
    
   

    loginPage.classList.add("active");
    passwordPAge.classList.remove("active");

})

