function wholeSumOfNumbers() {
    let result = 0;
    return (num) => result += num;
}

const sum = wholeSumOfNumbers();

console.log(sum(2));
console.log(sum(5));
console.log(sum(12));
