const sentence = "hello. it\'s me.";
const typewriter = (sentence) => {
  let startTime = 1000;
  for (const char in sentence) {
    setTimeout(() => {process.stdout.write(sentence[char]) // print the letters in one line
      // console.log(sentence[char])// prints each letter one at a time
    }, (startTime + 100 * char));
  }
  setTimeout(() => {process.stdout.write('\n'); // adds a new line after the loop is completed
  }, (startTime + 100 * (sentence.length - 1))); // this will happen after the last char is printed
}

typewriter(sentence);

