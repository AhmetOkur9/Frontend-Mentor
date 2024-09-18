const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


const sumbitButton = document.querySelector('.submit-button')
const form = document.querySelectorAll('.form-element')
const warningMessages = document.querySelectorAll('.warning-message')
const inputDivs = document.querySelectorAll('.input-div')

const errorSvgArray = document.querySelectorAll('.error-svg')



const fFirstName = form[0]
const fLastName = form[1]
const fEmail = form[2]
const fPassword = form[3]

console.log(fFirstName.parentElement)


console.log(fFirstName.placeholder)
console.log(fFirstName.nextElementSibling.value)

addEventListeners()

function addEventListeners() {
    sumbitButton.addEventListener('click', submitData)
}

function submitData(event) {
    form.forEach((formELement,index) => {
        if (formELement.id == "femail") {
            if (!emailRegex.test(formELement.value)) {
                createWarning(formELement,index)
                formELement.style.color='red'
                formELement.placeholder = 'email@example.com'
            }else{
                deleteWarning(formELement,index)
            }
        } else {
            if (formELement.value == "") {
                createWarning(formELement,index)
            }else{
                deleteWarning(formELement,index)
            }
        }
    })
}

function createWarning(element,index) {
    warningMessages[index].style.display = 'block'
    element.parentElement.style.marginBottom = '0px'
    element.parentElement.style.border = "2px solid red"
    errorSvgArray[index].style.display = 'block'
}

function deleteWarning(element,index){
    warningMessages[index].style.display = 'none'
    element.parentElement.style.marginBottom = '2rem'
    element.parentElement.style.border = "1px solid rgb(173, 169, 169)"
    errorSvgArray[index].style.display = 'none'

}