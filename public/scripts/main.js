import Modal from './modal.js';

const modal = Modal()

/* Quando o botao 'marcados como lido' é clicado a moral será aberta */
const checkButtons = document.querySelectorAll(".actions a.check")
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

checkButtons.forEach(button => {

    //adicionar a escuta
    button.addEventListener("click", event => {

        //abrir modal
        modal.open()
    })

})

/*Quando o botao 'delete' for clicado a modal será aberta*/
const deleteButtons = document.querySelectorAll(".actions a.delete")

deleteButtons.forEach(button => {

    //adicionar a escuta
    button.addEventListener("click", event => {

        //abrir modal
        modal.open()
    })
})