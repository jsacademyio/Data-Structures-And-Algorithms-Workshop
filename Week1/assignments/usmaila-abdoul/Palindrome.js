function Palindrome(string) {
    // 1 change all strings to lower case
    // 2 reverse the link and compare with origin string to see if its a palindrome
    // 3 return true if its a palindrome
    let lowercaseString = string.toLowerCase();
    let newString = lowercaseString.split('').reverse().join('');

    return newString === lowercaseString
}

console.log(Palindrome('Racecar'));