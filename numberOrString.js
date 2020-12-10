let mixedArray = ["Dogs", "cats", 6, "77", 70, "toyota", 9, true, null];

// Write a loop that goes through all of the items of the array
// For each item, check if it is a string, or if it is a number. 
// If its a string, console.log("The item at index __ is the type ____") -if its a number, 
// say its a number and if its a string say its a string. 


for (i = 0; i < mixedArray.length; i++) {

    if (typeof mixedArray[i] === "number") {
        console.log(`The item at index ${i} is the type number`);
    } else if (typeof mixedArray[i] === "string") {
        console.log(`The item at index ${i} is the type string`);    
    } else {
        console.log(`The item at index ${i} is neither a string nor a number`);
    }



};