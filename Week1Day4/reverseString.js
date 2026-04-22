function reverseString(str) {
    let char = str.split("");
    let reversed = "";

    for (let i = char.length - 1; i >= 0; i--) {
        reversed += char[i];

    }
    console.log("Reversed String " + reversed);
    return reversed;
}


function ispalindrome(str) {
    let reversed = reverseString(str);
    if (reversed === str) {
        return true;
    }
    else {
        return false;
    }
}
let string1 = "madam"
let string2 = "testing"

console.log(string1 + "-->" + ispalindrome(string1));
console.log(string2 + "-->" + ispalindrome(string2));

