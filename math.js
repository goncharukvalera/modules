function sum(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multyply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
export default class Graph { // экспорт по умолчанию при создании
    addNode() {
        console.log('node added');
    }
}
const Pi = 3.1415;

export {sum, divide, substract as sub, multyply};
