// function that print a staircase of size N

const staircase = num => {
    let spaces = ' ';
    for (let i = 0; i <= num; i++){
        console.log(spaces.repeat(num-i) + '#'.repeat(i) )
    }
    return '';
}

console.log(staircase(6))