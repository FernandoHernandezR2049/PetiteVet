////////////////////////////////////////SCROLL//////////////////////////////////////////////////////////////////////
document.getElementById("btnPosition").addEventListener("click", scrollUp);

function scrollUp(){
    let position=document.documentElement.scrollTop;
    if(position>10){
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0,position - (position/10));
        btnPosition.style.transform= "scale(0)";
        // console.log(position);
    }
}

let btnPosition = document.getElementById("btnPosition");
window.onscroll = function(){
    let scroll = document.documentElement.scrollTop;
    if(scroll>400){
        btnPosition.style.transform = "scale(1)";
    } else if (scroll <400){
        btnPosition.style.transform= "scale(0)";
    }
}