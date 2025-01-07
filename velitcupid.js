const numbers = [1, 2, 3, 4, 5];

if (numbers.length > 0) {
    // Perform actions on the non-empty list
    console.log(`The list has ${numbers.length} elements.`);
    numbers.forEach(number => {
        console.log(number);
    });
} else {
    console.log("The list is empty.");
}
