const MAX_RED_VALUE = 26;
const MAX_WHITE_VALUE = 69;

function getBall(maxValue) {
  return Math.ceil(Math.random() * maxValue);
}

function getPowerball() {
  var redBall = getBall(MAX_RED_VALUE);
  var whiteBalls = [];
  // for (let i = 0; i < 5; i++) {
  //   var whiteBall = getBall(MAX_WHITE_VALUE);
  //   whiteBalls.push(whiteBall);
  // }
while (whiteBalls.length < 5)
{
  var whiteBall = getBall(MAX_WHITE_VALUE)
  if(!whiteBalls.includes(whiteBall)) {
    whiteBalls.push(whiteBall)
  } else {
    console.log(whiteBall)
  }
}  
// console.log(whiteBalls.length);
//   console.log(whiteBalls[0]);
  document.getElementById("red-ball").innerHTML = "Red Ball: " + redBall;
  document.getElementById("white-balls").innerHTML = "White Balls: " + whiteBalls;
}

// show the user the rules of the game
// range of numbers: 1-69 (white) 1-26(red)
// constant to generate 5 random numbers (white)
// constant to generate 1 random number (red)
// extra credit: ensure the numbers are unique
// var redBall = getBall(MAX_RED_VALUE);
// var whiteBall = getBall(MAX_WHITE_VALUE);
