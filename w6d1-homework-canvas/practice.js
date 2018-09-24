document.addEventListener("DOMContentLoaded", function(){

  const canvas = document.getElementById('myCanvas');
  canvas.width = 500;
  canvas.height = 500;

  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(0, 0, 500, 500);

  ctx.beginPath();
  ctx.arc(100, 100, 100, 0, 2*Math.PI, true);
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.fillStyle = 'orange';
  ctx.fill();

  ctx.beginPath();
  ctx.strokeStyle = 'pink';
  ctx.lineWidth = 5;
  ctx.moveTo(300, 300);
  ctx.lineTo(105, 25);
  ctx.lineTo(25, 105);
  ctx.stroke();
  ctx.fillStyle = 'green';
  ctx.fill();

});
