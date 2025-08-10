const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2"); 
const result = document.getElementById("result");
let output = 0;

document.getElementById("add").addEventListener("click", add);
document.getElementById("sub").addEventListener("click", sub);
document.getElementById("mul").addEventListener("click", mul);
document.getElementById("div").addEventListener("click", div);
function add()
{
 let n1 = Number(num1.value)
 let n2 = Number(num2.value);
 output = n1 + n2;
 console.log(output);
 result.textContent = output;
}
function sub()
{
 let n1 = Number(num1.value)
 let n2 = Number(num2.value);
 output = n1 - n2;
  return result.textContent = output;
 //return result.innerHTML = n1 - n2;
}
function mul()
{
 let n1 = Number(num1.value)
 let n2 = Number(num2.value);
 output = n1 * n2;
 result.textContent = output;
 //return result.innerHTML = n1 * n2;
}
function div()
{
 let n1 = Number(num1.value)
 let n2 = Number(num2.value);
 output = n1 !== 0 ? n1 / n2 : "cannot divide by zero"
result.textContent = output;
}