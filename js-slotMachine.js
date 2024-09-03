
let totalSum = 0;
let betSum = 0;
let winSum = 0;

roundCount = 0;

var Enabled = true;
//var lock1Enabled = false;
//var lock2Enabled = false;
//var lock3Enabled = false;
//var lock4Enabled = false;


function displaySaldoAndBet() {
  document.getElementById("saldo").innerHTML = "Saldo: " + totalSum + "e&nbsp;&nbsp;";
  document.getElementById("bet").innerHTML = "Panos: " + betSum + "e&nbsp;&nbsp;";
}

//lisää massia, 20cent = 1e, tofixed ei toimi kunnolla
function add20cent() {
  if (totalSum !== 40) {
     totalSum += 1;
     displaySaldoAndBet();
  }
}

function add50cent() {
  if (totalSum !== 40) {
     totalSum += 0.50;
     displaySaldoAndBet();
  }
}

function add1eur() {
  if (totalSum !== 40) {
     totalSum += 1;
     displaySaldoAndBet();
  }
}

function add2eur() {
  if (totalSum !== 40) {
     totalSum += 2;
     displaySaldoAndBet();
  }
}
//aseta panos
function addBet() {
  if (totalSum == 0) {
     Enabled = false; 
     betSum += 0;
     displaySaldoAndBet();
  }
  if (betSum == 10) {
     betSum = 0;
     displaySaldoAndBet();
  }
  if (betSum <= 10 && totalSum !== 0) {
     betSum += 1;
     displaySaldoAndBet();
  }
}
//voitonmaksu eli kaikki nolliin
function payOut() {
  if (totalSum !== 0) {
     Enabled = true;
     document.getElementById('wins').innerHTML = "Voitonmaksu " + totalSum + "e";
     totalSum = 0;
     betSum = 0;
     displaySaldoAndBet();
  }
}

//käynnistä jos ehdot ok
function playOnOff() {
  if (totalSum == 0) {
     Enabled = false;
     betSum = 0;
     displaySaldoAndBet();
  }
  if (betSum > totalSum) {
     betSum = 0;
     Enabled = false;
     displaySaldoAndBet();
  }
  if (betSum == 0) {
     Enabled = false;
     betSum = 0;
     displaySaldoAndBet();
  }
  if (betSum == 0 && totalSum == 0) {
     Enabled = false;
     betSum = 0;
     displaySaldoAndBet();
  }
  if (totalSum !== 0 && betSum !== 0) {
     Enabled = true;
     setImages();
     
  }
}
//arvo kuvat jos ehdot ok
function setImages() {
 
  document.getElementById('wins').innerHTML = "Voitto: 0e"
 
  const firstSlot = Math.floor(Math.random() * 5) + 1;
  const imgOne = 'reels/img' + firstSlot + '.png';
  document.querySelectorAll('img')[0].setAttribute('src', imgOne);
 
  const secondSlot = Math.floor(Math.random() * 5) + 1;
  const imgTwo = 'reels/img' + secondSlot + '.png';
  document.querySelectorAll('img')[1].setAttribute('src', imgTwo);    
 
  const thirdSlot = Math.floor(Math.random() * 5) + 1;
  const imgThree = 'reels/img' + thirdSlot + '.png';
  document.querySelectorAll('img')[2].setAttribute('src', imgThree);
 
  const fourthSlot = Math.floor(Math.random() * 5) + 1;
  const imgFour = 'reels/img' + fourthSlot + '.png';
  document.querySelectorAll('img')[3].setAttribute('src', imgFour);
  
  roundCount += 1;
  releaseHold();

  //alla randomi "tarkistusrivi" 
  if (firstSlot == 1 || firstSlot == 2 || firstSlot == 3 || firstSlot == 4 || firstSlot == 5) {
     totalSum -= betSum;
     displaySaldoAndBet();
  }
  
  if (firstSlot == 1 && secondSlot == 1 && thirdSlot == 1 && fourthSlot == 1 ) {   
     winSum = betSum * 10;
     totalSum += winSum;
     displayWin();
     displaySaldoAndBet();
  }
 
  if (firstSlot == 2 && secondSlot == 2 && thirdSlot == 2 && fourthSlot == 2 ) {
     winSum = betSum * 6;
     totalSum += winSum;
     displayWin();
     displaySaldoAndBet();
  }
  
  if (firstSlot == 3 && secondSlot == 3 && thirdSlot == 3 && fourthSlot == 3 ) {  
     winSum = betSum * 5;
     totalSum += winSum;
     displayWin();
     displaySaldoAndBet();
  }
  
  if (firstSlot == 4 && secondSlot == 4 && thirdSlot == 4 && fourthSlot == 4 ) {
     winSum = betSum * 4;
     totalSum += winSum;
     displayWin();
     displaySaldoAndBet();
  }  
 
  if (firstSlot == 5 && secondSlot == 5 && thirdSlot == 5 && fourthSlot == 5 ) {
     winSum = betSum * 3;
     totalSum += winSum;
     displayWin();
     displaySaldoAndBet();
  }
  //kolmen seiskan tsekkaus
  //123
  if (firstSlot == 1 && secondSlot == 1 && thirdSlot == 1 && fourthSlot !== 1) {
     winSum = betSum * 5;
     totalSum += winSum;
     displayWin();
     displaySaldoAndBet();
  }
  //124
  if (firstSlot == 1 && secondSlot == 1 && thirdSlot !== 1 && fourthSlot == 1) {
     winSum = betSum * 5;
     totalSum += winSum;
     displayWin();
     displaySaldoAndBet();
  }
  //134
  if (firstSlot == 1 && secondSlot !== 1 && thirdSlot == 1 && fourthSlot == 1) {
     winSum = betSum * 5;
     totalSum += winSum;
     displayWin();
     displaySaldoAndBet();
  }
  //234
  if (firstSlot !== 1 && secondSlot == 1 && thirdSlot == 1 && fourthSlot == 1) {
     winSum = betSum * 5;
     totalSum += winSum;
     displayWin();
     displaySaldoAndBet();
  }
  //vähän ekstraa
  if (firstSlot == 1 && secondSlot == 1 && thirdSlot !== 1 && fourthSlot !== 1) {
     winSum = betSum * 1;
     totalSum += winSum;
     displayWin();
     displaySaldoAndBet();
  }
  if (firstSlot == 1 && secondSlot !== 1 && thirdSlot == 1 && fourthSlot !== 1) {
     winSum = betSum * 1;
     totalSum += winSum;
     displayWin();
     displaySaldoAndBet();
  }
  if (firstSlot == 1 && secondSlot !== 1 && thirdSlot !== 1 && fourthSlot == 1) {
     winSum = betSum * 1;
     totalSum += winSum;
     displayWin();
     displaySaldoAndBet();
  }
  if (firstSlot !== 1 && secondSlot == 1 && thirdSlot == 1 && fourthSlot !== 1) {
     winSum = betSum * 1;
     totalSum += winSum;
     displayWin();
     displaySaldoAndBet();
  }
  if (firstSlot !== 1 && secondSlot == 1 && thirdSlot !== 1 && fourthSlot == 1) {
     winSum = betSum * 1;
     totalSum += winSum;
     displayWin();
     displaySaldoAndBet();
  }
  if (firstSlot !== 1 && secondSlot !== 1 && thirdSlot == 1 && fourthSlot == 1) {
     winSum = betSum * 1;
     totalSum += winSum;
     displayWin();
     displaySaldoAndBet();
  }
  //jos yksi x 7 tai kaksi x 7
  if (firstSlot == 1 && secondSlot !== 1 && thirdSlot !== 1 && fourthSlot !== 1) {
     winSum = 1;
     totalSum += winSum;
     displayWin();
     displaySaldoAndBet();
  }
  if (firstSlot !== 1 && secondSlot == 1 && thirdSlot !== 1 && fourthSlot !== 1) {
     winSum = 1;
     totalSum += winSum;
     displayWin();
     displaySaldoAndBet();
  }
  if (firstSlot !== 1 && secondSlot !== 1 && thirdSlot == 1 && fourthSlot !== 1) {
     winSum = 1;
     totalSum += winSum;
     displayWin();
     displaySaldoAndBet();
  }
  if (firstSlot !== 1 && secondSlot !== 1 && thirdSlot !== 1 && fourthSlot == 1) {
     winSum = 1;
     totalSum += winSum;
     displayWin();
     displaySaldoAndBet();
  }
  //jackpot
  if (firstSlot == 1 && secondSlot == 2 && thirdSlot == 3 && fourthSlot == 4) {
     winSum = 120;
     totalSum += winSum;
     document.getElementById('wins').innerHTML = "Päävoitto: " + winSum + "e";
     displaySaldoAndBet();
  }        
}

function displayWin() {
  document.getElementById('wins').innerHTML = "Voitto: " + winSum + "e";
}

function lock1Color() {
  document.getElementById('hold1').style.background = "grey";   
}

function lock2Color() {
  document.getElementById('hold2').style.background = "grey";
}

function lock3Color() {
  document.getElementById('hold3').style.background = "grey";
}

function lock4Color() {
  document.getElementById('hold4').style.background = "grey";
}

function releaseHold() {
  if (roundCount == 1) {
     roundCount = 0;
     document.getElementById('hold1').style.background = "orange";
     document.getElementById('hold2').style.background = "orange";
     document.getElementById('hold3').style.background = "orange";
     document.getElementById('hold4').style.background = "orange";  
  }
} 
  