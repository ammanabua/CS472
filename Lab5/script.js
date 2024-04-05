
// QUESTION 1


function max(x, y){
    if(x > y){
        return x;
    } else if(x < y){
        return y;
    }
    return 1;
}

console.log("The maximum of the two numbers is: " + max(98, 12));


// QUESTION 2

function maxOfThree(x, y, z){
    
    max = x;

    if(x > y && x > z){
        return max;
    } else if (y > max && y > z){
        max = y;
    } else {
        max = z;
    }

    return max;

}

console.log("Maximum of the Three Numbers is: " + maxOfThree(192, 135, 98));


// QUESTION 3

function isVowel(c){
    if (c.length > 1){
        console.log("Enter one character only");
        return
    }

    s = c.toLowerCase();

    if (s == "a" || s == "e" || s == "i"|| s == "o" || s == "u"){
        return true
    }

    return false
}


console.log("Is Vowel?: " + isVowel("E"));

// QUESTION 4
a = [1,2,3,4];

function sum(a){
    total = 0;
    for(i = 0; i < a.length; i++){
        total += a[i];
    }

    return total;
}


function multiply(a){
    total = 1;
    
    for (i = 0; i < a.length; i++){
        total *= a[i];
    }

    return total;
}


console.log(sum(a));
console.log(multiply(a));



// QUESTION 5

function reverse(s){
    if(s == ""){
        return;
    }

    reverse(s.substring(1, s.length))
    console.log(s.charAt(0));
}

s = "jag testar";

reverse(s);



// QUESTION 6

function findLongestWordLength(a){
    let longestWord = a[0];

    for(i = 1; i < a.length; i++){
        if(a[i].length > longestWord.length){
            longestWord = a[i];
        }
    }

    return longestWord;
}

words = ["archipellagossdfsd", "ship", "caterpillar", "moose", "archipellagos"]

console.log(findLongestWordLength(words));


// QUESTION 7

function filterLongWords(a, x){

    var words = [];

    for(i = 0; i < a.length; i++){
        if (a[i].length > x){
            words.push(a[i]);
        }
    }

    return words;
    
}

var words1 = ["twitter", "chip", "casio", "shrem", "crepe"];

console.log("Filtered Words: " + filterLongWords(words1, 4));

