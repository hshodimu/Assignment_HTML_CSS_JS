var canvasSquare = document.getElementById('canvas-square');
var ctxSquare = canvasSquare.getContext('2d');

var widthSquare = document.getElementById('width-square');
var heightSquare = document.getElementById('height-square');


widthSquare.addEventListener('keyup', function(){
    width = this.value;
    drawRectangle();
}, false);

heightSquare.addEventListener('keyup', function(){
    height = this.value;
    drawRectangle();
}, false);


var canvasTriangle = document.getElementById('canvas-triangle')
ctxTriangle = canvasTriangle.getContext('2d')

var baseTriangle = document.getElementById('base-triangle')
var heightTriangle = document.getElementById('height-triangle')


baseTriangle.addEventListener('change', function () {
    if (heightTriangle.value) {
        drawTriangle();
    }
    
}) 

heightTriangle.addEventListener('change', function () {
   if (baseTriangle.value) {
       drawTriangle();
   }
    
}) 


var canvasCircle = document.getElementById('canvas-circle')
ctxCircle = canvasCircle.getContext('2d')

var circleX = document.getElementById('x-circle')
var circleY = document.getElementById('y-circle')
var circleRadius = document.getElementById('radius-circle')


circleX.addEventListener('change', function () {
    if (circleY.value && circleRadius.value) {
        drawCircle();
    }
    
}) 

circleY.addEventListener('change', function () {
   if (circleX.value && circleRadius.value) {
       drawCircle();
   }
    
}) 

circleRadius.addEventListener('change', function () {
    if (circleX.value && circleY.value) {
        drawCircle();
    }
     
 }) 