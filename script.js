let emailInput = document.querySelector(".email-inputvalue");
let passwordInput = document.querySelector(".password-inputvalue");
let loginButton = document.querySelector(".loginbutton");
let forgotPassword = document.querySelector(".forgetpasswordbtn");
let createAccount = document.querySelector(".createaccountbtn");
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
createAccount.addEventListener("click",()=>
{
    console.log("account bnao...");
})

//forgot password btn
let togglevar = 0;
forgotPassword.addEventListener("click", ()=>
{
    console.log("New password...");
    togglevar = 1;
    loginPage.classList.add("active");
    passwordPAge.classList.remove("active");

})

