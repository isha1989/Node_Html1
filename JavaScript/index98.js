let a;
let sum = 0;
for (a = 0; a <= 1000; a++) {
    sum = sum + a;
    if (sum >= 400) {
        break;
    }
    
}
console.log("sum= " + sum);
