const sentence = "hello. it\'s me.\n";

const typewriter = (sentence) => {
  let startTime = 1000;
  for (const char in sentence) {
    setTimeout(() => {process.stdout.write(sentence[char]) // print the letters in one line
      // console.log(sentence[char])// prints each letter one at a time
    }, (startTime + 100 * char));
  }
  
}

typewriter(sentence);

