const input = document.querySelector('input')
const button = document.querySelector('button')
const inputDiv = document.querySelector('.input-div')
const emailControlRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const warningMessage = document.createElement("p")
warningMessage.textContent = "Please provide a valid email address"
inputDiv.append(warningMessage)
warningMessage.style.color = "red"
warningMessage.style.fontSize = ".8rem"
warningMessage.style.marginLeft = "2rem"
warningMessage.style.display = "none"

addEventListeners()

function addEventListeners() {
    button.addEventListener("click", sendEmail)
}


function sendEmail(event) {
    console.log(input.value)
    if (emailControlRegex.test(input.value)) {
        warningMessage.style.display = "none"
        alert("Success")
        input.value = ""
    } else {
        warningMessage.style.display = "block"
    }
}



