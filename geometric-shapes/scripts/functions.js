function drawRectangle(){
    ctxSquare.clearRect(0,0,canvasSquare.width,canvasSquare.height);
    ctxSquare.fillRect(40,40,widthSquare.value,heightSquare.value);
    ctxSquare.fillStyle = "#FF0000"
}


function drawTriangle() {

    ctxTriangle.strokeStyle = 'blue';

    ctxTriangle.clearRect(0, 0, canvasTriangle.width, canvasTriangle.height);
    ctxTriangle.beginPath();

    ctxTriangle.moveTo(baseTriangle.value, heightTriangle.value);
    ctxTriangle.lineTo(baseTriangle.value * 3, heightTriangle.value);
    ctxTriangle.stroke();

    ctxTriangle.moveTo(baseTriangle.value * 3, heightTriangle.value);
    ctxTriangle.lineTo(baseTriangle.value * 2, heightTriangle.value / 2);
    ctxTriangle.stroke();

    ctxTriangle.moveTo(baseTriangle.value * 2, heightTriangle.value / 2);
    ctxTriangle.lineTo(baseTriangle.value, heightTriangle.value);
    ctxTriangle.stroke();
}

function drawCircle() {
    ctxCircle.strokeStyle = 'green';

    ctxCircle.clearRect(0, 0, canvasCircle.width, canvasCircle.height);
    ctxCircle.beginPath();
    ctxCircle.arc(circleX.value, circleY.value, circleRadius.value, 0, 2 * Math.PI);
    ctxCircle.stroke();
}