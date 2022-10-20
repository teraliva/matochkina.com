//cursor dot 

const cursorTag = document.querySelector ("div.cursors");
const ball = cursorTag.querySelector("div");

// let currentX = 0;
// let currentY = 0;
// let aimX = 0;
// let aimY = 0;
// let speed = 0.2;
  
// const animate = function() {
  
//  currentX += (aimX - currentX) * speed;
//  currentY += (aimY - currentY) * speed;
  
//   ball.style.left = currentX + "px";
//   ball.style.top = currentY + "px";
  
//   requestAnimationFrame(animate);
  
// };

document.addEventListener("mousemove", function(event){
  ball.style.top = event.clientY;
  ball.style.left= event.clientX;
});