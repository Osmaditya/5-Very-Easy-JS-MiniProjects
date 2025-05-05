
//reverse string func se bhi kr skte 
// function reverse(string){
//     return  string.split("").reverse().join("");
// }
// 🔸 1. string.split("")
// Kaam: String ko characters ki array me todta hai.

// "hello" → ["h", "e", "l", "l", "o"]

// 🔸 2. .reverse()
// Kaam: Array ko ulta karta hai.

// ["h", "e", "l", "l", "o"] → ["o", "l", "l", "e", "h"]

// 🔸 3. .join("")
// Kaam: Array ko wapas string me jodta hai, bina kisi separator ke.

// ["o", "l", "l", "e", "h"] → "olleh"

// *****************but maine reverse ka use nhi kiya hai 


function check() {

    let inp = document.querySelector("input").value;    //input button k func k ander hi lena bahar nhi varna null ayega
    let str = inp;
    let i = 0;
    let j = str.length - 1;

    let isPalindrome = true;
    while (i <= j) {
        if (str[i] != str[j]) {
            isPalindrome = false;
            break;
        }
        i++;
        j--;
    }

    if (isPalindrome) {
        alert(str + " is a palindrome string");

    } else {
        alert(str + " is not a palindrome string");
    }

}