function findSum(x, y) {
    const answer = x + y;
    return answer;
}
const sum = findSum(99, 1000)
console.log(sum)
// another function 
function laugh() {
    const result = 'hahahahahahahahahaha!';
    return result;
}
console.log(laugh())
/* another function */
function gigle(num) {
    const output = 'ha'.repeat(num) + '!';
    return output;
}
console.log(gigle(3));
console.log(findSum(1, 2))
// new
function makeLine(length) {
    var line = "";
    for (let j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

function buildTriangle(width) {
    let triangle = "";
    for (let i = 1; i <= width; i++) {
        triangle += makeLine(i);
    }
    return triangle;
}

console.log(buildTriangle(10));