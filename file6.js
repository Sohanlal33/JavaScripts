function complexFn(n) {
    let sum = 0;
    for (var i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
}
complexFn(100000);

