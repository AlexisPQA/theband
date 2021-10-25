const menuMobile = document.getElementsByClassName("menu-mobile-btn")[0];
const navigation = document.getElementsByClassName("navigation")[0];
const subMenu = document.getElementsByClassName("sub-menu")[0];
let menus = document.getElementsByClassName("menu");
menuMobile.addEventListener('click',onClickMenuMobile);
let isShow = false;
function onClickMenuMobile() {
    navigation.style.display = isShow===false ? 'flex' : 'none';
    isShow = !isShow;
}

for(let i = 0; i < menus.length; i++) {
    if(menus[i].localName != "div"){
        menus[i].onclick = onClickMenu;
    }
    else{
        menus[i].onclick = onClickMore;
    }
}

//hide menu when click on menu item
function onClickMenu() {
    if(isShow){
        navigation.style.display = "none";  
    }
}

let isShowMore = false;
function onClickMore() {
    if(isShowMore){
        subMenu.style.display = "none"
    }else{
        subMenu.style.display = "flex"
    }
    isShowMore = !isShowMore;
}