//Cong tac 1
var f =25;
function demo_1() {
    var x = document.getElementById("abc");
    x.style.transform = 'rotate('+f+'deg)';
    f += 2;
}
function quay_1(){
    setInterval(demo_1,10);
}

//Cong tac 2
function demo_2() {
    var x = document.getElementById("abc");
    x.style.transform = 'rotate('+f+'deg)';
    f += 6;
}
function quay_2(){
    setInterval(demo_2,10);
}

//Cong tac 3
function demo_3() {
    var x = document.getElementById("abc");
    x.style.transform = 'rotate('+f+'deg)';
    f += 15;
}
function quay_3(){
    setInterval(demo_3,10);
}

//Cong tac off
