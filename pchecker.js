function isPalindrome(str){

    const cleanStr = str.replace(/[^\w]/g, '').toLowerCase();

    return cleanStr === cleanStr.split('').reverse().join('');
}

function myfunction(){
    const inputElement = document.getElementById("inputWord");
    const resultElement = document.getElementById("result");

    const inputWord = inputElement.value.trim();

    if (inputWord === "") {
        resultElement.textContent = "Please enter a word to check.";

    } else {
        const isPalindromeResult = isPalindrome(inputWord);
        resultElement.textContent = isPalindromeResult
            ? "The word is a palindrome!"
            : "The word is not a palindrome!";
    }
}