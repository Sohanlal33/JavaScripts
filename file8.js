function count(first, last) {
    var sum = 0;
    for (var i = first; i <= last; i++) {
        sum = sum + i;
    }
    return sum;
}

var answer = count(1, 10)
console.log(answer)