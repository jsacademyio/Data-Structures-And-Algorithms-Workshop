//Check whether a string is a palindrome
//Compare the string to lowercase
//We will split the string into characters, reverse the array of characters, join the characters back to form a string,
//and then test the created string against what was originally received

const isPalindrome = str => {
    if (str.toLowerCase() === str.toLowerCase().split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }

}

const str = 'dad';
console.log('test', isPalindrome(str));

const str2 = 'daddy';
console.log('test2', isPalindrome(str2));