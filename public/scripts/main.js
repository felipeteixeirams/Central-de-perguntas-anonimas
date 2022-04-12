import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// Armazena botões com a classe 'check'
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => {
    //adicionar o evento de clique
    button.addEventListener("click", handleClick)
})

// Quando o botao 'delete' for clicado a modal será aberta
const deleteButton = document.querySelectorAll(".actions a.delete")

deleteButton.forEach(button => {
    //adiciona o evento de clique
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    //abrir modalTitle
    const text = check ? "Marcar como lida" : "Excluir"
    
    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    modal.open()
}