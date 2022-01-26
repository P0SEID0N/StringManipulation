const readline = require('readline');
const StringManipulation = require('./js/stringManipulation');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//It should be noted this is simply to facilitate the ability to provide user input. As an example this might be a customer implementing the package that I have designed
//This is NOT part of the solution or the library just a way to simulate a real world example of user input.
rl.question('Please enter any word, we will evaluate it.\n', function (value) {
    //let lib = new StringManipulation()
    let answer = StringManipulation.evalFirstCapital(value)
    console.log(`Does the word you have entered start with a Capital Letter?: ${answer}`);
    rl.close();
});

rl.on('close', function () {
  console.log('\nString Evaluated Please run again to input another.');
  process.exit(0);
});