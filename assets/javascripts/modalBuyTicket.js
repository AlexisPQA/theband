const modal = document.getElementsByClassName("modal-buy-ticket")[0];

function onClickBuyTicket (){
    console.log("show")
    modal.style.display ="block"
}

function onClickCloseModal(){
    console.log("closed")
    modal.style.display = "none"
}