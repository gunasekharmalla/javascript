let count = 0
function inc()
{
 let result = document.getElementById("result");
 result.innerHTML = count+=1;
   result.style.color = count > 0 ? "green" : "red";

}
function dec()
{
 let result = document.getElementById("result");
 if (count > 0)
 {
    count = count - 1;
 }else{
    alert("Count cannot be negative");
    return;
 } 
 result.innerHTML = count;
    result.style.color = count > 0 ? "green" : "red";

}

document.getElementById("inc").addEventListener("click", inc);
document.getElementById("dec").addEventListener("click", dec);