
let listArray = ["appel","banaan",2,3,true];
let newArray = ["peer","kers"];
console.log(listArray);

listArray.push(4);
console.log(listArray);

let popped = listArray.pop();
console.log(listArray);

listArray.shift();
console.log(listArray);

listArray.unshift("appel");
console.log(listArray);

listArray[4] = "false";
console.log(listArray);

listArray.splice(0, 2);
console.log(listArray);

let anderArray = listArray.concat(newArray);
console.log(anderArray);