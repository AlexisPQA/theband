// let head = document.getElementsByClassName("header")[0];
// let content = document.getElementsByClassName("content")[0];
// console.log("top:",head.offsetHeight)
// content.style.top = head.offsetHeight + "px";
let index = 1;
function autoSlideShow() {
    const slide = document.getElementsByClassName("slide")
    slide[0].style.display = "block"
    setInterval(() =>{
        slide[ (index-1 ) < 0 ? slide.length-1 : index-1].style.display = "none";
        slide[index].style.display = "block";
        index = (index+1) > 2 ? 0 : index + 1
    },2000)
}

autoSlideShow()