// function  promise(val){
//     let promiseEx = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(val)
//         },0);
//     })
//    for(let i = 0; i < 10; i++ ){
//     console.log(promiseEx);
//    }
//     return promiseEx
// }
// console.log(promise("raj").then((result)=>{
//     console.log(result)
// }));

// let weather = getFunction()
// console.log(weather);

// function getFunction(){
//    setTimeout(()=>{
//     return '20 deg'
//    },2000)
// }



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


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,-1];

let result = true;

numbers.forEach((val)=>{
    if(val < 0 ){
        result = false
    }
})
console.log(result);


function reverseEachString(){
    let str = "this is javaScript code";
    let reverse = str.split("").map(( _ ,index,arr)=>{
        return arr[arr.length - 1 - index]
    });
    return reverse.join("")
}
console.log(reverseEachString());