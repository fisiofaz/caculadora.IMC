// variaveis
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeigth = document.querySelector('#heigth')

//const modalWrapper = document.querySelector('.modal-wrapper')
//const modalMessage = document.querySelector('.modal .title span')
//const modalBtnClose = document.querySelector('.modal button.close')

// Responsavel pelo modal
const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),
  
  open: function() { //duas maneiras diferente de fazer
    Modal.wrapper.classList.add('open')
  }, 
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

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

Modal.buttonClose.onclick = () => { // array function
  //modalWrapper.classList.remove('open')
  Modal.close()
}

function IMC (weight, height)  {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

