var t=1;
function tongcong(){
    var cong=document.getElementById("cong");
    cong.innerText=t;
    t++;
}
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}