const arr = ['a', 'b', 'c'];
// arr.push('a'); //리터럴로 쓰는 건 좋지 않은 방식

// arr.unshift(arr[arr.length-1]);
// 주선하는 부분

// 임시값을 사용하면 된다
// 1.
// todo: 1. 원소값 중 a를 c 다음으로 놓는 방법
let temp;
temp = arr[0];
arr.shift();
console.log(arr); //[b, c];
arr.push(temp);
console.log(arr); //[b, c, a];

// 2.
// todo: 2. 원소값 중 c를 a 앞으로 놓는 방법
console.log(arr.sort());
temp = arr[arr.length-1];
// arr.shift();
arr.unshift(temp);
console.log(arr);
arr.pop(temp);
console.log(arr); //c,a,b

// 3. 
// todo: 3. ['b', 'a', 'c']; 형태로 바꾸는 방법

console.log(arr);
arr.unshift(arr.pop(temp));
console.log(arr);
temp = arr.pop(temp);
arr.splice(1, 0, temp);
console.log(arr); //b, a, c

