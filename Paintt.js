document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('paintCanvas');
    const ctx = canvas.getContext('2d');
    let isPainting = false;
    let isErasing = false;
    let currentColor = 'black';
  
    canvas.addEventListener('mousedown', startPainting);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mousemove', draw);
  
    document.getElementById('blackBtn').addEventListener('click', function() {
      setColor('black');
    });
  
    document.getElementById('redBtn').addEventListener('click', function() {
      setColor('red');
    });
  
    document.getElementById('greenBtn').addEventListener('click', function() {
      setColor('green');
    });
  
    document.getElementById('blueBtn').addEventListener('click', function() {
      setColor('blue');
    });
  
    document.getElementById('drawBtn').addEventListener('click', function() {
      isErasing = false;
    });
  
    document.getElementById('eraseBtn').addEventListener('click', function() {
      isErasing = true;
    });
  
    function startPainting(e) {
      isPainting = true;
      draw(e);
    }
  
    function stopPainting() {
      isPainting = false;
      ctx.beginPath();
    }
  
    function draw(e) {
      if (!isPainting) return;
  
      ctx.lineWidth = 4;
      ctx.lineCap = 'round';
      ctx.strokeStyle = isErasing ? '#fff' : currentColor;
  
      ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }
  
    function setColor(color) {
      currentColor = color;
      isErasing = false;
    }
});