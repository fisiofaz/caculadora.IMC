import {Modal} from "./modal.js"
import {AlertError} from "./alert-error.js"
import {notNumber, calculateIMC} from "./utils.js"

// variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeigth = document.querySelector('#heigth')

inputHeigth.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

form.onsubmit = function(event) { //function normal
  event.preventDefault();
  
  const weight = inputWeight.value
  const heigth = inputHeigth.value 
  
  const weightOrHeightIsNotNumber = notNumber(weight) || notNumber(heigth)

  if (weightOrHeightIsNotNumber ) {
    AlertError.open()
    return
  }

  AlertError.close()  

  const resultIMC = calculateIMC(weight, heigth)
  displayResultMessage(resultIMC)
}

function displayResultMessage(resultIMC) {
  
  //modalMessage.innerText = message
  Modal.message.innerText = `${resultIMC}`
  //modalWrapper.classList.add('open')
  Modal.open()
}

