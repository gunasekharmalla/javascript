
let count = 0;
const num = Math.floor(Math.random() * 100) + 1;
let run = true;

while (run) {
    let guess = prompt('Enter a number between 1 and 100:');
    if (guess === null) { 
        break;
    }

    guess = Number(guess);
    if (isNaN(guess)) {
        console.log('Please enter a valid number.');
        continue; 
    }

    count++;
    if (guess > num) {
        console.log('Too large!');
    } else if (guess < num) {
        console.log('Too small!');
    } else {
        console.log(`Correct! You guessed it in ${count} attempts.`);
        run = false;
    }
}