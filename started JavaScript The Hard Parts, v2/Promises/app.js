
// // function  promise(val){
// //     let promiseEx = new Promise((resolve,reject)=>{
// //         setTimeout(() => {
// //             resolve(val)
// //         },0);
// //     })
// //    for(let i = 0; i < 10; i++ ){
// //     console.log(promiseEx);
// //    }
// //     return promiseEx
// // }
// // console.log(promise("raj").then((result)=>{
// //     console.log(result)
// // }));

// // let weather = getFunction()
// // console.log(weather);

// // function getFunction(){
// //    setTimeout(()=>{
// //     return '20 deg'
// //    },2000)

// // }

// // let promiseg = new Promise((r,f)=>{
// //     setTimeout(()=>{
// //         r('I don"t know anything')
// //     },10)
// // });

// // promiseg.then(result => console.log(result)).finally(console.log("I know everthing.........")); 

// let promise = new Promise((resolve,reject)=>{
//    setTimeout(()=>{
//         resolve(123456)
//     },0)
     
// })
// promise.then(()=> console.log(12345));
// promise.then(console.log(678910));

 
// promise



// let newPromise = getData();
// let result
// console.log(newPromise);
// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//            resolve(result = 'hello')
//         },2000)
//     })
   
// }
// newPromise
// .then((value)=>{
//     result = value;
//     console.log(result);
//     return result
// })
// .then((value)=>{
//     result = 'bye';
//     // console.log(result);
//     return result;
// })
// .then((val)=>{
//     console.log(val);
// });

// function wordsWhichStartsWithLetteA(){
//     let arr = ["alex", "likes", "Apple"];
//     return arr.map((element,index,arrs)=>{
//         if(element.charAt(0).toLowerCase() === "a"){
//             return arrs[index];
//         }
//     }).filter((value)=> value !== undefined)
// }
// console.log(wordsWhichStartsWithLetteA());


// // let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,-1];

// // let result = true;

// // numbers.forEach((val)=>{
// //     if(val < 0 ){
// //         result = false
// //     }
// // })
// // console.log(result);


// // function reverseEachString(){
// //     let str = "this is javaScript code";
// //     let reverse = str.split("").map(( _ ,index,arr)=>{
// //         return arr[arr.length - 1 - index]
// //     });
// //     return reverse.join("")
// // }
// // console.log(reverseEachString());



// function outer(){
//     let counter = 0
//     function inner(){
//        if(counter < 5){
//         counter++
//         return counter
//        }else{
//         console.log('this function is cannot run more then 5 times');
//        }
//     }
//     return inner
// }
// let first = outer()
// let second = first()
// let third = outer()
// console.log(first());
// console.log(second);
// console.log(third());
// console.log(first());

 



// function max(){
// let arr=[3,18,20,11,30,22]
// let max;
// max=arr[0];

// for(let i =0; i<=arr.length; i++) {
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// // document.write(`the max no is ${max}`)
// return max;
// }
// console.log(max());



// let map = new Map()

// map.set('1','str');
// map.set(1,'null');

// // console.log(map.delete('1'));
// console.log(map.keys());

// for(let key of map.keys()){
//     console.log(key);
// }


// let john = {name:"john"};
// let ben = {name: "Ben"};

// let visitsCount = {};
// visitsCount[ben] = 123;
// visitsCount[ben] = 243;

// // console.log(visitsCount);

// let map2 = new Map([
//     [1,'one'],
//     [2,[1,2,3]],
//     [3, 'three']
// ])
// console.log(map2);

// let obj = {
//     name: "John",
//     age: 30
//   };


// let obj2 = new Map(Object.entries(obj))
// console.log(obj2);


// let map3 = new Map();
// map3.set('banana', 1);
// map3.set('orange', 2);
// map3.set('meat', 4);

// let newObj = Object.fromEntries(map3.entries());
// console.log(newObj);



// // for(let i = 5; i <=(5*10); i+=5 ){
// //     console.log(i);
// // }

// setTimeout(()=>{
// console.log("hi");
// },0)

// let newPro = new Promise((resulve,reject)=>{
//    resulve("hello")
// }).then(result => console.log(result))



// let arr = [1, 2, 3, 4, 5];
// let i = 0;
// let j = arr.length - 1;

// while (i < j) {
//     [arr[i], arr[j]] = [arr[j], arr[i]];
//     i++;
//     j--;
// }

// console.log(arr);





// let array = [1,2,3,4,5,6];
// let newArr = array[Symbol.iterator]();
// newArr.next()

// function itetor(values){


//     let nextindex = 0;
//     return {
//         next : function(){
//             if(nextindex < values.length){
//                 return{
//                     value: values[nextindex++],
//                     done: false
//                 };
//             }else{
//                 return{
//                     done : true
//                 };
//             }
//         },
//     };
// }
// let starting = itetor(array);
// console.log(starting.next());
// console.log(starting.next());
// console.log(starting.next());
// console.log(starting.next());
// console.log(starting.next());
// console.log(starting.next());
// console.log(starting.next());


// const user1 = {
//     name: 'will',
//     score: 1,
//     increment : function(){
//         this.score++
//     }
// }
// console.log(user1.increment());





// function sayHi(){
//     console.log('hi');
//     sayHi.counter++
// }
// sayHi.counter = 0;

// sayHi()
// sayHi()

// console.log(sayHi.counter);


// function makeCounter(){

//     function counter(){
//         return counter.count++
//     }
//     counter.count = 0;

//     return counter
// }

// let counter = makeCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// // let userName = 'shahid hashmi'

// // let sum = new Function('console.log(userName)')


// // console.log(sum());


// function greet() {
//     console.log("00000000000000000000000000000000!");
//   }
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
  
//   console.log("hi");
// //   async function shahid(){
// //     let counter = await setTimeout(()=>{
// //         return 'shahid hashmi'
// //     },1000)
// //     return counter
// //   }
// //   let nameitsdf = await shahid()
// //   console.log(nameitsdf);
// async function greet() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Hello!");
//       }, 1000);
//     });
//   }
  
//   async function main() {
//     const greeting = await greet();
//     console.log(greeting);
//   }
  
//   main();
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
//   console.log("hi");
  
//   const timerId = setTimeout(greet, 0);
//   console.log(third());
  
//   clearTimeout(timerId);
//   function sumOfRows(arr) {
//     let sumOfRows = [];

//     for (let i in arr) {
//         let sumOfRow = 0;

//         for (let j in arr[i]) {
//             sumOfRow += arr[i][j];
//         }

//         sumOfRows.push(sumOfRow);
//     }

//     return sumOfRows;
// }

// console.log(sumOfRows([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));


// function promise5(){
//     let newpromise = new Promise(function second(resolve,rejecj){
//       setTimeout(function third(){
//       resolve('maShaAllah')
//    },3000)
//     }).then(function microtask(value){
//         console.log(value)
//         return value
//     }
//         ).then(function microtask(value){console.log(value)})


//     return newpromise
//   }
//   promise5()

 

//   let promise6 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Allah")
//     },2999.9999999)
//   }).then((value)=> console.log(value))

//   console.log(promise6);


// let x = 10;
// let y = 20;

// [[x,y] = [y,x]]

// const myArray = [
//     {
//       name: "Alice",
//       age: 25,
//     },
//     {
//       name: "Bob",
//       age: 30,
//     },
//     {
//       name: "Carol",
//       age: 35,
//     },
//   ]

// // const [{name:name1,age:age1},{name: name2, age:age2}, {name : name3,age, age3}] = myArray
// console.log(name1);


// let array3 = [1,[2,3],4];

// let [
//     one = 10,
//     [
//         two = 0,
//         three = 0
//     ] = [],
//     four = 40
// ] = array3 || []
// console.log('====================================');
// console.log(one,two,three,four);
// console.log('====================================');


// let array4 = [1,2,3,4,5];
// let [
//     one1,
//     ,
//     three3,
//     ...rest
// ] = array4

// let obj4 = { coordinates: null };

// let { coordinates: [a, b] = [] } = obj4 && obj4.coordinates ? obj4 : { coordinates: [] };
// console.log('====================================');
// console.log(a, b);
// console.log('====================================');

// async function shahid(){
//     let promise = await new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(10)
//         },4000)
//     })
//     console.log('4');
//     return promise
// }
// console.log("1");
// function hello(){
//     console.log('2');
//     shahid().then((value)=>{
//         console.log(value);
//     })
//     console.log(3);
// }

// hello();

// function* hashmi(){
//     yield 1;
//     yield 2;

// };
// console.log(hashmi().next());


// let s = 10;
// let d = 20;

// [s,d] = [d,s]



// const object = {
//     name: "Alice",
//     age: 25,
//     occupation: "Software Engineer",
//     address: {
//       street: "123 Main Street",
//       city: "Anytown",
//       state: "CA",
//       zip: "91234"
//     }
//   };


// // const  {name : name5, age: age5, address: {street,city,state,zip} = {}}  = object || {}

// console.log(age5,street)


// let  [
//     fisrst,
//     ,
//     [
//         thirsd,
//         fg
//     ]= [],
//     secsond,
//     ...rsest
// ] = arr







// let number = '1';
// number = number + 1; // 11
// number++ // 11
// ++number // 11

// let bigint = 1000000000000000000n;

// var shahid;
// console.log(hashmi);

// let myAge = Number("46"); // 46
// const myNextAge = Number("39"); // 39 
// let myCatsAge = Number("n/a"); // NAN
// myAge - 'My Son Age'; // NAN
// myCatsAge === myCatsAge; // false


// '' == []; // true

// '' === []; // false 
// let numberBig = 1200000;
// let newnumberBig = 12_0_0_00_0; // numeric sprator

// numberBig == newnumberBig // true
// numberBig === newnumberBig // true


// null == undefined // true // sence of emptyness

// null === undefined // false

// !!null; // false
// null == false; // true
// 0 == false; // true
// "" == false; // true


// let num2 = 2;
// console.log(num2.toString());
// +num2


// let zero = -0;  
// console.log(zero)
// let trip_x = 0 === zero // false
// console.log(trip_x) // false
// console.log(zero.toString()); // "0"
// console.log(zero>0) // false
// console.log(zero<0) // false
// console.log(Object.is(zero,-0)) // true 
// console.log(Object.is(zero,0)) // false




// const num = 1; // 1
// const strNum = String(num); // '1'
// const boolenNum = Boolean(num) // true
// const numberNum = Number(strNum) // 1
// const boolenNum2 = Number(boolenNum) // 1
// const toNull = Number(null); // 0
// const toUndefined = Number(undefined); // NAN 
// const nestedArr = Number([[[[]]]]); // 0
// const nullToBoolean = Boolean(null) // false
// const undefinedToBoolean = Boolean(undefined) // false


// console.log(1+"hi") // 1hi  operator overloading
// let nume2 = 10;
// console.log(nume2.toString()) // boxing 


// let global = "global scope";

// {
//     let block = "aa";
//     var tool = 12
// }
// console.log(tool);

// function scope(){
//     let scoping = "aa"
// };

// function lexical(){
//     console.log(global)
//     console.log(dianamic)
// };

// function hi(){
//     let dianamic = "hi"
// }


// hoising();
// console.log(na);
// console.log(TDZ) // TDZ;
// let TDZ = 10
// var na = 123
// function hoising(){
//     //....
// }


// 1 < 2 < 3
// //(1) < 3
// // true
// 1 > 2 > 3
// // (0) > 3
// // false 

// const obj = {
//     name: "shahid",
//    nameing: function (){
//         this.name
//     }
// }
// let a = 10
// let b = "string";
// let c = 5 - a; // -5 // 'number'
// let d = 5 + b; //"5string" 'string'
// let e = a - b; // NAN // 'number'


// 3  - 1  // 2
// 3  + 1  // 4
// '3' - 1  // 2
// '3' + 1  // "31"

// '' + ''  // ''
// [] + []  // ''

// '222' - -'111' // 111

// // ============================= the recent parts =====================

// let myAge = 10;
// let newString = `shahid hashmi ${myAge}`;


// function string(string, age){
//     //....
// }
// string`hello ${myAge}` // tag template

// let arr = [1,2,3,4,5];
// let [
//     first = 10,
//     ,
//     ...rest = []
// ] = arr = []

// let obj = {age: 19,fullName : "shahid" };

// let {age: myAges, fullName : myFullName} = obj = {}

// let num1 = 10;
// let num2 = 20;

// [num1,num2] = [num2, num1]


// const obj2 = {
//     name2: "shahid",
//     addresh: {
//       houseNo: 22,
//       city: "Mexico",
//       subject: {
//         maths: 70,
//         English: [{ number: 10 }, { number: 20 }, { number: 30 }],
//       },
//     },
//   };
// // name, addresscity , math

// // let {name2 : myName, addresh:{city: myCity} = {} , subject: {English} } = obj2
// // let { name2, addresh: { city }, subject: { English: [ number ] } } = obj2;
// let { name2, addresh: { city, subject: { English: [ number ] } } } = obj2;

// const multiLevelArr = [
//     1,
//     [1, 2, [1, 2, 3], 4],
//     [4],
//     [5, 6, 7],
//     9,
//     8,
//     [10, [11, 23]],
//   ];

// let flatarr = multiLevelArr.flat(Infinity);




















// let number = 10;
// console.log(number);

// function sum(){
//     let a = 1;
//     let b = 2;
//     return a+b;
// }
//  const num = sum();

 const name = 'will sentence';
function a() {
    const name = 'kyle';
    b();
    console.log(1);
}

function b() {
    console.log(2)
    c()
}

function c() {
    console.log(3)
}
a();






// function highOrderfunction(func){
//     func()        // func : callback
// }
// highOrderfunction(callBack)



// function callBack(){
//     console.log(1);
// }
// highOrderfunction();







// function outerFunction(){
//     let counter = 0;
//     function inner(){
//         counter++
//     }
//     return inner
// }

// let increment = outerFunction();









// function outer() {
//     let x = 10;
  
//     function inner1() {
//       console.log(x);
//     }
  
//     function inner2() {
//       x++;
//     }
  
//     return {
//       func1: inner1,
//       func2: inner2
//     };
//   }
  
//   const closures = outer();
//   closures.func1(); // 10
//   closures.func2(); // 
//   closures.func1();// 11







// function printHello(){
//     console.log("hello");
// }
// setTimeout(printHello,0);
// console.log("name!");

// const promise = new Promise((resulve,reject)=>{
//     resulve(10);
// });
// promise.then(el => console.log(el));


// console =======

// "name!"
//  "Hello"







const promise = new Promise ((resolve,reject)=>{
    consol
})