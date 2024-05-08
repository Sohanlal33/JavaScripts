function starryPattern(n) {
    if (n == 1) {
        console.log("**")
    }
    if (n == 2) {
        console.log("**")
        console.log("****")

    }
    if (n == 3) {
        console.log("**")
        console.log("****")
        console.log("******")
    }
}

var answer = starryPattern(3);
console.log(answer);
