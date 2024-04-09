function fibonacci(num) {
// your code here

	 let fib = [0, 1];

    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[num];
}
 let num=5;
    document.write(fibonacci(num));

module.exports = fibonacci;
