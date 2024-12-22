const containerele = 
document.querySelector('.container');

//containerele.innerHTML = `<h1>I am a</h1>`;

const text = ['Learner', 'Enthusiast', 'Developer','Designer', 'Freelancer'];


let textIndex = 0;
let letterIndex = 0;
updateText();
function updateText()
{   letterIndex++;
    containerele.innerHTML = `<h1>I am ${text[textIndex].slice(0, letterIndex)} </h1>`
    
    if(letterIndex === text[textIndex].length)
    {
        textIndex++;
        letterIndex = 0;
    }
    if(textIndex === text.length)
    {
        textIndex = 0;
    }
    setTimeout(updateText, 400);
     
}
//document.write("I am a learner");