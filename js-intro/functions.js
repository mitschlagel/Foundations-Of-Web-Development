let total = 3;

function factorial(value) {
    let total = 1;
    for (var i = 2; i <= value; i++) {
        total = total * i;
    }
    return total;
}

console.log(factorial(5));
console.log(total);