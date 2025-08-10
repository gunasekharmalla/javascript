function generateColor() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  
  const box = document.getElementById("colorBox");
  box.style.backgroundColor = randomColor;
    document.body.style.backgroundColor = randomColor;

  box.textContent = randomColor;
}
