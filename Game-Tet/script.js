var elDiceOne = document.getElementById('dice1');
var elDiceTwo = document.getElementById('dice2');
var elDiceThree = document.getElementById('dice3');
var elComeOut = document.getElementById('roll');

elComeOut.onclick   = function () {rollDice();};

function rollDice() {

  var diceOne   = Math.floor((Math.random() * 6) + 1);
  var diceTwo   = Math.floor((Math.random() * 6) + 1);
  var diceThree   = Math.floor((Math.random() * 6) + 1);
 
  console.log(diceOne + ' ' + diceTwo+ ' ' + diceThree);

  for (var i = 1; i <= 6; i++) {
    elDiceOne.classList.remove('show-' + i);
    if (diceOne === i) {
      elDiceOne.classList.add('show-' + i);
    }
  }

  for (var k = 1; k <= 6; k++) {
    elDiceTwo.classList.remove('show-' + k);
    if (diceTwo === k) {
      elDiceTwo.classList.add('show-' + k);
    }
  } 
  for (var j = 1; j <= 6; j++) {
    elDiceThree.classList.remove('show-' + j);
    if (diceThree === j) {
      elDiceThree.classList.add('show-' + j);
    }
  } 
  setTimeout(rollDice(), 1000);
}


var id = null;

function xoc() {
  var audio = new Audio('./media/dicerolling.ogg');
    audio.play();
    // Swal.fire({
    //   icon: 'success',
    //   title: 'Xóc thành công',
    //   showConfirmButton: false,
    //   timer: 3500
    // })
    var elem = document.getElementById("animationBat");
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 0.0001);
    function frame() {
      if (pos == 10) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.left = -132 + 'px';
      }
      
  }
}

function moBat(){
  var elem = document.getElementById("animationBat");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 0.01);
  function frame() {
    if (pos == 1) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = 250 + 'px';
    }
  }
}