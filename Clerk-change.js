// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing
// in a huge line. Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.
//
//     Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
//
//     Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the
// tickets strictly in the order people follow in the line?
//
//     Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.

// === JavaScript ==

// tickets([25, 25, 50]) // => YES
// tickets([25, 100])
// => NO. Vasya will not have enough money to give change to 100 dollars

function tickets(peopleInLine) {
    var count_25 = 1, count_50 = 0;

    if (peopleInLine[0] != 25) {
        return "NO"
    } else if (peopleInLine[1] === 100 || peopleInLine[2] === 100) {
        return "NO"
    } else {
        for (var i = 1; i < peopleInLine.length; i++) {
            if (peopleInLine[i] != 25) {
                if (peopleInLine[i] === 50) {
                    if (count_25 < 1) {
                        return "NO"
                    } else {
                        ++count_50;
                        --count_25;
                    }
                } else if (peopleInLine[i] === 100) {
                    if (count_50 < 1) {
                        if (count_25 < 3) {
                            return "NO"
                        } else {
                            count_25 = count_25 - 3;
                        }
                    } else if (count_25 < 1) {
                        return "NO"
                    } else {
                        --count_50;
                        --count_25;
                    }
                }
            } else {
                ++count_25;
            }
        }
        return "YES"
    }
}

console.log(tickets([25, 25, 50, 50])); // YES
console.log(tickets([25, 25, 100, 50])); // NO
console.log(tickets([25, 25, 25, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 50, 100])); // YES
