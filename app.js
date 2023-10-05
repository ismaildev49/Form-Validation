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
    if (inputPasswordConf.value !== inputPassword.value) {
        showError(inputPasswordConf, "Passwords don't match")
    } else {
        showSucces(inputPasswordConf, "success")
    }
}

const showError = (input, msg) => {
    input.style.border = "1px solid red"
    input.nextElementSibling.nextElementSibling.classList = "msg error"
    input.nextElementSibling.nextElementSibling.innerText = `${msg}`
}

const showSucces = (input, msg) => {
    input.style.border = "1px solid green"
    input.nextElementSibling.nextElementSibling.classList = "msg success"
    input.nextElementSibling.nextElementSibling.innerText = `${msg}`
    result.push(input)
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    checkRequired(inputUsername)
    checkRequired(inputEmail)
    checkRequired(inputPassword)
    checkRequired(inputPasswordConf)

    checkUsername()
    checkEmail()
    checkPassword()
    checkPasswordConf()
console.log(result);
    // if (result.length == 4) {
    //     console.log(result);
    //     result.length = 0
    // } else {
    //     result.length = 0
    // }
})