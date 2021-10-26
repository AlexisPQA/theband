const modal = document.getElementsByClassName("modal-buy-ticket")[0];
const modalContainer = document.getElementsByClassName("modal-container")[0]
function onClickBuyTicket (){
    modal.style.display ="flex"
}

function onClickCloseModal(){
    modal.style.display = "none"
}

modal.addEventListener('click', onClickCloseModal)

modalContainer.addEventListener('click', (e) => {
    e.stopPropagation()
})