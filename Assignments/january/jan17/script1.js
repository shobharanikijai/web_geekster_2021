document.write(" Assignment 2: ")
function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("True");
       document.write("True. The given string is anagram.")
    } else { 
       console.log("False. The given string is not an anagram.");
    }
 }
 checkStringsAnagram("indian","ndiani")