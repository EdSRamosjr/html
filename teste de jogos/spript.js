var canvas = document.getElementsByid("canvas");
var ctx = canvas.getContext("2d");
var ballx = canvas.width/ 2;
var bally = canvas.height/ 2;
var ballRadius = 10;
var ballSpeedx = 3;
var ballSpeedy = -3;
var startButton = document.getElementById("start-Button");


startButton.addEventListener("click", startGame);


function startGame(){
    setInterval(draw, 10);
}

function drawBall(){
    ctx.beginPath();
    ctx.arc(ballx, bally, ballRadius, 0 , Math.PI*2)
    ctx.fillStyle = "#0095DD"
    ctx.fill();
    ctx.closePath();
}
function moveBall(){
    ballx += ballSpeedx;
    bally += ballSpeedy;
    if (ballx + ballRadius > canvas.width || ballx - ballRadius < 0){
        ballSpeedy = -ballSpeedx;
    }
    if (bally + ballRadius > canvas.height || bally - ballRadius < 0){
        ballSpeedy = -ballSpeedy;
    }
}
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    moveBall();
}
setInterval(draw, 10);