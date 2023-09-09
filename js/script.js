import { Modal } from "./modal"
// variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeigth = document.querySelector('#heigth')

//const modalWrapper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal .title span')
//const modalBtnClose = document.querySelector('.modal button.close')


form.onsubmit = function(event) { //function normal
  event.preventDefault();
  
  const weight = inputWeight.value
  const heigth = inputHeigth.value

  const result = IMC(weight, heigth)
  const message = `Seu IMC é de ${result}`
  
  //modalMessage.innerText = message
  Modal.Message.innerText = message
  //modalWrapper.classList.add('open')
  Modal.open()
}



function IMC (weight, height)  {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

