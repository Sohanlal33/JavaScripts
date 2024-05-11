function fun() {
    console.log("fun called");
}

function newFunction(fn) {
    console.log("inside newFunction");
    fn();
    console.log("leaving newFunction");
}

fun(function logger() {
    console.trace();
    console.log("new function passed");
});
