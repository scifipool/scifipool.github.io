window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          function(callback){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var canvas = document.getElementById("bg-animation");
var c = canvas.getContext("2d");

// ORB ANIMATION
// -------------------------------------------------------
// const orbCanvas = document.getElementById('orb-canvas');
// const ctx = orbCanvas.getContext('2d');
// const dpr = window.devicePixelRatio || 1;
// const pi = Math.PI;
// const points = 12;
// const radius1 = 90 * dpr;
// const h = 600 * dpr;
// const w = 600 * dpr;
// const center = {
//     x: w / 8 * dpr,
//     y: h / 8 * dpr
// };
// const circles = [];
// const rangeMin = 1;
// const rangeMax = 30;
// const showPoints = false;

// let mouseY = 0;
// let tick = 0;

// const gradient1 = ctx.createLinearGradient(0, 0, w, 0);
// gradient1.addColorStop(0, '#96fbc4');
// gradient1.addColorStop(1, '#f9f586');

// const gradient2 = ctx.createLinearGradient(0, 0, w, 0);
// gradient2.addColorStop(0, '#48c6ef');
// gradient2.addColorStop(1, '#6f86d6');

// const gradient3 = ctx.createLinearGradient(0, 0, w, 0);
// gradient3.addColorStop(0, '#9795f0');
// gradient3.addColorStop(1, '#9be15d');

// const gradient4 = ctx.createLinearGradient(0, 0, w, 0);
// gradient4.addColorStop(0, '#f6d365');
// gradient4.addColorStop(1, '#fda085');

// const gradients = [gradient1, gradient2, gradient3, gradient4];

// window.addEventListener('mousemove', handleMove, true);

// function handleMove(event) {
//     mouseY = event.clientY;
// }

// ctx.scale(dpr, dpr);

// ctx.width = w * dpr;
// ctx.height = h * dpr;
// orbCanvas.style.width = w + 'px';
// orbCanvas.style.height = h + 'px';

// // Setup swing circle points

// for (var idx = 0; idx <= gradients.length - 1; idx++) {

//     let swingpoints = [];
//     let radian = 0;

//     for (var i = 0; i < points; i++) {
//         radian = pi * 2 / points * i;
//         var ptX = center.x + radius1 * Math.cos(radian);
//         var ptY = center.y + radius1 * Math.sin(radian);

//         swingpoints.push({
//             x: ptX,
//             y: ptY,
//             radian: radian,
//             range: random(rangeMin, rangeMax),
//             phase: 0
//         });
//     }

//     circles.push(swingpoints);

// }

// // --------------------------------------------------------------------------- //
// // swingCircle

// function swingCircle() {
//     ctx.clearRect(0, 0, w * dpr, h * dpr);

//     ctx.globalAlpha = 1;
//     // ctx.globalCompositeOperation = 'source-over';
//     ctx.globalCompositeOperation = 'screen';

//     for (let k = 0; k < circles.length; k++) {
//         let swingpoints = circles[k];

//         for (var i = 0; i < swingpoints.length; i++) {
//             swingpoints[i].phase += random(1, 10) * -0.01;

//             let phase = 0.5 * Math.sin(tick / 65);

//             if (mouseY !== 0) {
//                 phase = mouseY / 200 + 1;
//             }

//             var r = radius1 + (swingpoints[i].range * phase * Math.sin(swingpoints[i].phase)) - rangeMax;

//             swingpoints[i].radian += pi / 360;

//             var ptX = center.x + r * Math.cos(swingpoints[i].radian);
//             var ptY = center.y + r * Math.sin(swingpoints[i].radian);

//             if (showPoints === true) {
//                 ctx.strokeStyle = '#96fbc4';

//                 ctx.beginPath();
//                 ctx.arc(ptX, ptY, 2 * dpr, 0, pi * 2, true);
//                 ctx.closePath();
//                 ctx.stroke();
//             }

//             swingpoints[i] = {
//                 x: ptX,
//                 y: ptY,
//                 radian: swingpoints[i].radian,
//                 range: swingpoints[i].range,
//                 phase: swingpoints[i].phase,
//             };
//         }

//         const fill = gradients[k];

//         drawCurve(swingpoints, fill);

//     }

//     tick++;

//     requestAnimationFrame(swingCircle);
// }

// requestAnimationFrame(swingCircle);


// // --------------------------------------------------------------------------- //
// // drawCurve

// function drawCurve(pts, fillStyle) {
//     ctx.fillStyle = fillStyle;
//     ctx.beginPath();
//     ctx.moveTo(
//         (pts[cycle(- 1, points)].x + pts[0].x) / 2,
//         (pts[cycle(- 1, points)].y + pts[0].y) / 2);
//     for (var i = 0; i < pts.length; i++) {

//         ctx.quadraticCurveTo(
//             pts[i].x,
//             pts[i].y,
//             (pts[i].x + pts[cycle(i + 1, points)].x) / 2,
//             (pts[i].y + pts[cycle(i + 1, points)].y) / 2);
//     }

//     ctx.closePath();
//     ctx.fill();

// }

// // --------------------------------------------------------------------------- //
// // cycle
// function cycle(num1, num2) {
//     return (num1 % num2 + num2) % num2;
// }

// // --------------------------------------------------------------------------- //
// // random
// function random(num1, num2) {
//     var max = Math.max(num1, num2);
//     var min = Math.min(num1, num2);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// --------------------------------------------------------------------------- //
// ORB ANIMATION END
// --------------------------------------------------------


var numStars = 1000;
var radius = '0.'+Math.floor(Math.random() * 6) + 1  ;
var focalLength = canvas.width * 4.5;
var warp = 0;
var centerX, centerY;

var stars = [], star;
var i;

var animate = true;
initializeStars();

function executeFrame(){
  
  if(animate)
    requestAnimFrame(executeFrame);
  moveStars();
  drawStars();
}

function initializeStars(){
  centerX = canvas.width / 2;
  centerY = canvas.height / 2;
  
  stars = [];
  for(i = 0; i < numStars; i++){
    star = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * canvas.width,
      o: '0.'+Math.floor(Math.random() * 99) + 1
    };
    stars.push(star);
  }
}

function moveStars(){
  for(i = 0; i < numStars; i++){
    star = stars[i];
    star.z--;
    
    if(star.z <= 0){
      star.z = canvas.width;
    }
  }
}

function drawStars(){
  c.clearRect(0, 0, canvas.width, canvas.height)
  var pixelX, pixelY, pixelRadius;
  
  // Resize to the screen
  if(canvas.width != window.innerWidth || canvas.width != window.innerWidth){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeStars();
  }
  if(warp==0)
  {c.fillStyle = "rgba(0,10,20,1)";
  c.fillRect(0,0, canvas.width, canvas.height);}
  c.fillStyle = "rgba(209, 255, 255, "+radius+")";
  c.canvas.width = window.innerWidth;
  c.canvas.height = window.innerHeight;
  for(i = 0; i < numStars; i++){
    star = stars[i];
    
    pixelX = (star.x - centerX) * (focalLength / star.z);
    pixelX += centerX;
    pixelY = (star.y - centerY) * (focalLength / star.z);
    pixelY += centerY;
    pixelRadius = 1 * (focalLength / star.z);
    
    c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
    c.fillStyle = "rgba(209, 255, 255, "+star.o+")";
    //c.fill();
  }
}

requestAnimFrame(executeFrame);
