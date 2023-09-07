function outer (){
    let counter = 0;
    function incrementCounter(){counter ++;}
    return incrementCounter;
}
const myNewFunction = outer(); // we are return function from the outer function memory and this is a special kind of function It's just not return the function it is also returning the sarounding outer local memory in the form of return function (incrementCounter) bagPack 

myNewFunction(); // when we call this function this we hunt for counter in his local memory but it will not find so it will 
myNewFunction();