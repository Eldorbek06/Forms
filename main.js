// form
const mainForm = document.querySelector('form')
inputs = mainForm.querySelectorAll('input')
requiredInputs = mainForm.querySelectorAll('.required input')
button = mainForm.querySelector('button')
title = document.querySelector('.title')

// title
all_InputsNum = title.querySelector('.all')
needed_InputsNum = title.querySelector('.need')
success_InputsNum = title.querySelector('.success')
error_InputsNum = title.querySelector('.error')

all_InputsNum.innerHTML += inputs.length
needed_InputsNum.innerHTML += requiredInputs.length

inputs.forEach(el => {
    el.style.fontSize = '16px'
    el.onfocus = () => {
        inputs.forEach(elem => {
            elem.classList.remove('input-focus')
            elem.previousElementSibling.classList.remove('input-name-active')
        })
        el.classList.add('input-focus')
        el.previousElementSibling.classList.add('input-name-active')
    }
    el.onblur = () => {
        inputs.forEach(elem => {
            elem.classList.remove('input-focus')
            elem.previousElementSibling.classList.remove('input-name-active')
        })
    }
})

let importanceTxt;

mainForm.onsubmit = () => {
    requiredInputs.forEach(requiredInput => {
        if (requiredInput.value.length === 0) {
            requiredInput.classList.add('input-red')
            requiredInput.previousElementSibling.classList.add('input-name-red')
            requiredInput.nextElementSibling.classList.add('img-active')
            importanceTxt = requiredInput.parentElement.querySelector('.important').innerHTML
            requiredInput.parentElement.querySelector('.important').classList.add('important-red')
            requiredInput.parentElement.querySelector('.important').innerHTML = `Please enter you ${requiredInput.previousElementSibling.innerHTML}`
            
            event.preventDefault()
        }
    })
}

requiredInputs.forEach(requiredInput => {
    requiredInput.oninput = () => {
        if (requiredInput.value.length !== 0) {
            requiredInput.classList.remove('input-red')
            requiredInput.previousElementSibling.classList.remove('input-name-red')
            requiredInput.nextElementSibling.classList.remove('img-active')
            requiredInput.parentElement.querySelector('.important').classList.remove('important-red')
            requiredInput.parentElement.querySelector('.important').innerHTML = importanceTxt

            event.preventDefault()
        }
    }
})