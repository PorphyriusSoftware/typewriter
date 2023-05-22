let sentence = "hello there from lighthouse labs";
let time = 250;
let counter = 0;
for (const char of sentence) {
    setTimeout(() => {
        // print the char here
        process.stdout.write(char);
        counter++;

        if (counter === sentence.length) {
            console.log('');
        }
    }, time) // <= 1s delay to make it noticeable. Can dial it down later.
    time += 250;
}
