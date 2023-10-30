//opdracht A
let a = 0;
let b = 1;

while (a <= 10000000) {
    console.log(a);
    let temp = a;
    a = b;
    b = temp + b;
}
//opdracht C
for (let i = 1; i <=50 ; i++) {
    for (let j = 1; j <= 50; j++) {
    console.log(i + " x " + j + " = " + (i * j));
    }
}
