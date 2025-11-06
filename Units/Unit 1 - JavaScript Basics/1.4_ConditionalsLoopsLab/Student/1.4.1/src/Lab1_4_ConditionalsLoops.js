/* 
 Lab 004 – Conditionals and Loops
*/

// TODO 1: if..else with age discounts
function getDiscountedPrice(age, price) {
    if (age < 12) {
        return price * 0.5; // 50% discount for children
    } else if (age >= 65) {
        return price * 0.7; // 30% discount for seniors
    } else {
        return price; // no discount
    }
}

// TODO 2: Nested if with two numbers
function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return "First is greater";
    } else if (num1 < num2) {
        return "Second is greater";
    } else {
        return "Both are equal";
    }
}

// TODO 3: Switch statement for language greeting
function getGreeting(language) {
    switch (language) {
        case "English":
            return "Hello!";
        case "Spanish":
            return "¡Hola!";
        case "French":
            return "Bonjour!";
        case "German":
            return "Hallo!";
        default:
            return "Hello!";
    }
}

// TODO 4: While loop (1 to 10)
function printOneToTen() {
    let i = 1;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}

// TODO 5: Do..while loop (1 to 5)
function printOneToFive() {
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= 5);
}   

// TODO 6: For loop (1 to 20, print "ten" at 10 and "twenty" at 20)
function printOneToTwenty() {


// TODO 7: Even/Odd loop (1 to 20)
function printEvenOdd() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i + " is even");
        } else {
            console.log(i + " is odd");
        }
    }
}

// 🚀 Stretch Goals
// - Backwards loop from 20 to 1
// - Skip multiples of 3 in even/odd loop
