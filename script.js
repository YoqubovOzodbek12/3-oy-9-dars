function getCount(str) {
    let word = 0;
    const unli = ['a','e','i','o','u']
    
    for(let char of str) {
        if (unli.includes(char)) {
            word++
        }
    }
    return word
}

console.log(getCount('saaaaiii'))