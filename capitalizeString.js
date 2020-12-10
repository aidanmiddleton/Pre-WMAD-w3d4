let myString = "i cant wait for summer"
let splitString = myString.split(' ')

console.log(myString);

console.log(splitString);

console.log(joinedString);

for (i = 0; i < splitString.length; i++) {
    let splitWord = splitString[i].split('');
    console.log(splitWord);
    splitWord[0] = splitWord[0].toUpperCase();
    let capitalizedWord = splitWord.join('')
    splitString[i] = capitalizedWord;
    
}

console.log(splitString.join(' '));