// todo: 1. 원소값 중 a를 c 다음으로 놓는 방법
// const arr = ['a', 'b', 'c'];
// arr.concat(arr.push(arr.shift()));
// console.log(arr);

// todo: 2. 원소값 중 c를 a 앞으로 놓는 방법
// const arr = ['a', 'b', 'c'];
// 1. c를 잘라서
// 2. a 앞으로 넣어주면 된다
// arr.concat(arr.unshift(arr.pop()));
// console.log(arr);

// todo: 3. ['b', 'a', 'c']; 형태로 바꾸는 방법
const arr = ['a', 'b', 'c'];
// ?좀 더 간단한 방법이 없을까?
// arr.concat(arr.unshift(arr.slice(1, 2)));
arr.splice(0, 2, arr.slice(1, 2), arr.slice(0, 1));
console.log(arr);