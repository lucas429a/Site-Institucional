/* ------------------------------- Coloque sua lógica aqui ------------------------------- */
function showForm(){
    const button = document.querySelector(".Nav__button")
    const modalContainer = document.querySelector(".ModalContainer")

    button.addEventListener("click",function(){
        modalContainer.showModal();
    })
}
showForm()

function closeForm(){
    const button = document.querySelector(".Button_toClose")
    const modalContainer = document.querySelector(".ModalContainer")

    button.addEventListener("click",function(){
        modalContainer.close();
    })
}
closeForm()