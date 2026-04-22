//Example 1: 

let str = "Hello World";
let word = str.split(" ");

let lastword = word[word.length - 1];

console.log(lastword.length);

//Example 2:  

let str1 = "   fly me   to   the moon  ";

let trimmed = str1.trim();
let splitstr = trimmed.split(" ");

let last = splitstr[splitstr.length - 1];

console.log(last.length);


//Example 3:

function isAnagram(str1, str2) {

 // 1. remove spaces + lowercase
    let convertedstr1 = str1.split(" ").join("").toLowerCase();
    let convertedstr2 = str2.split(" ").join("").toLowerCase();

    // 2. sort characters
    let sortstr1 = convertedstr1.split('').sort().join('');
    let sortstr2 = convertedstr2.split('').sort().join('');

    // 3. compare & return
    if(sortstr1===sortstr2){
        return true;
    }
    else{
        return false;
    } 

}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));





