const bodyel = document.querySelector("body");

bodyel.addEventListener("mousemove", (e)=>{
    const xpos = e.offsetX;
    const ypos = e.offsetY;
    const span1 = document.createElement("span");
    span1.style.left = xpos + "px";
    span1.style.top = ypos + "px";
    const size = Math.random()*100;
    span1.style.width = size + "px";
    span1.style.height = size + "px";
    bodyel.appendChild(span1);
    setTimeout(()=>{
        span1.remove();
    },3000)
});