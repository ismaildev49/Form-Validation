const form = document.querySelector("form")
const button = document.querySelector("button")
const inputUsername = document.querySelector("#username")
const inputEmail = document.querySelector("#email")
const inputPassword = document.querySelector("#password")
const inputPasswordConf = document.querySelector("#passwordConf")
let result =[]

const checkRequired = (input) => {
    if (!input.value.trim().length){
        showError(input, 'This field is required')
    } else {
        showSucces(input, "success")
    }
}
const checkUsername = () => {
    if (inputUsername.value.trim().length < 5 || inputUsername.value.trim().length >10) {
        showError(inputUsername, "Username must contain between 5 and 10 characters")
    }  else {
        showSucces(inputUsername, 'success')
    }
}
const checkEmail = () => {
    if (!inputEmail.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        showError(inputEmail, "This is not an E-mail")
    } else {
        showSucces(inputEmail, "success")
    }
}
const checkPassword = () => {
    if (inputPassword.value.length < 8 || inputPassword.value.length > 15) {
        showError(inputPassword, "Password must contain between 8 and 15 characters")
    } else {
        showSucces(inputPassword, "success")
    }
}
const checkPasswordConf = () => {
    if (inputPasswordConf.value !== inputPassword.value && inputPasswordConf.value.length == 0) {
        showError(inputPasswordConf, "Passwords don't match")
    } else {
        showSucces(inputPasswordConf, "success")
    }
}

const showError = (input, msg) => {
    input.style.border = "1px solid red"
    input.nextElementSibling.classList = "msg error"
    input.nextElementSibling.innerText = `${msg}`
    result.push(input)
}

const showSucces = (input, msg) => {
    input.style.border = "1px solid green"
    input.nextElementSibling.classList = "msg success"
    input.nextElementSibling.innerText = `${msg}`
    
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    result.length = 0
    checkRequired(inputUsername)
    checkRequired(inputEmail)
    checkRequired(inputPassword)
    checkRequired(inputPasswordConf)

    checkUsername()
    checkEmail()
    checkPassword()
    checkPasswordConf()
    console.log(result);
    if (!result.length) {
        console.log({
            inputUsername : inputUsername.value,
            inputEmail : inputEmail.value,
            inputPassword : inputPassword.value
        });
    }
    
})