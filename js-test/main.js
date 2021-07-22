import getType from './getType' 
// 타입 확인
// console.log(typeof 'hello world!!')
// console.log(typeof 123)
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof {})
// console.log(typeof []
// console.log(getType('hello world!!'))
// console.log(getType(123))
// console.log(getType(false))
// console.log(getType(null))
// console.log(getType({}))
// console.log(getType([]))

// 사직 연산자
// console.log(2+3)
// console.log(5-7)
// console.log(1*3)
// console.log(10/2)
// console.log(7%3)

// 할당 연산자(assigment operator)
// const a = 2 //재할당 불가능 
// let b = 2   //재할당 가능
// // b = b + 1
// b += 1
// console.log(a)
// console.log(b)

// 비교 연산자(comparison operator)
// 일치 연산자
// const a = 1
// const b = 3
// console.log(a === b)
// function isEqual(x,y) {
//     return x === y
// }
// console.log(isEqual(1, 1))
// console.log(isEqual(2, '2'))
// 불일치 연산자
// const a = 1
// const b = 3
// console.log(a !== b);
// 비교 연산자
// const a = 13
// const b = 13
// console.log(a <= b);

// 논리 연산자(logical operator)
const a = 1 === 12
const b = 'AB' === 'ABC'
const c = false
console.log(a)
console.log(b)
console.log(c)

console.log('&& : ', a && b && c)
console.log('|| : ', a || b || c)
console.log('! : ', !a)