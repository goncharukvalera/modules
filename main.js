// можно совмещать
import Gr1, {divide, sub} from "./math";
// или даже так
import Gr1, * as calc from "./math";

console.log(typeof Gr1);
console.log(sub(5, 4));
console.log(calc.sum(2, 5));