//Check whether a string is a palindrome
//Compare the string to lowercase
//We will split the string into characters, reverse the array of characters, join the characters back to form a string,
//and then test the created string against what was originally received

const isPalindrome = str => {
    return (str.toLowerCase() === str.toLowerCase().split('').reverse().join('')) 
}

const str = 'moom';
console.log('test', isPalindrome(str));

const str2 = 'daddy';
console.log('test2', isPalindrome(str2));

//Using another method to check for palindrome
/** We will use a for loop to iterate through the characters
 * For each character at position i, we compare with the character at position i from the end
 * If any of these does not equal, we can reject the input as being a palindrome and we break out of the loop and return a false
 * We also only need to iterate through the half of the string, since going through the whole string 
 * would be comparing every character twice
 */

const checkPalindrome = str => {
    const lowerString = str.toLowerCase();

    for (let i = 0; i < lowerString.length / 2; i++){
        if (lowerString[i] !== lowerString[lowerString.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
 
console.log('second check', checkPalindrome(str));
console.log('check', checkPalindrome(str2));