export const Modal = {
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

Modal.buttonClose.onclick = () => { // array function
  //modalWrapper.classList.remove('open')
  Modal.close()
}

window.addEventListener('keydown', handleKeydown) //vai fazer mais de um click

function handleKeydown(event) {
  //console.log(event.key) //nome da tecla que que quero clicar
  if (event.key === "Escape") {
    Modal.close()
  }
}