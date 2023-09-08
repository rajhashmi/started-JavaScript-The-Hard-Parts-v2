function sayHowdy() {
  console.log('Howdy');
}

function testMe() {
  setTimeout(sayHowdy, 0);
  console.log('Partnah');
}

testMe()


function delayedGreet() {
    setTimeout(() => {
      console.log("welcome")
    }, 3000)
  }



  function helloGoodbye() {
    console.log("hello");
    setTimeout(() => {
      console.log("goodbye")
    }, 2000)
  }


  function brokenRecord() {
    setInterval(() => {
      console.log("hi again")
    }, 100000)
  }

//   brokenRecord()


  function limitedRepeat() {
    let count = 0;
    let id = setInterval(() => {
      console.log("hi for now");
      count++
    //   if(count >= 5) {
    //     clearInterval(id)
    //   }
    }, 1000)
  }

//   limitedRepeat()



  function everyXsecsForYsecs(func, interval, duration) {
    let currentDuration = 0;
    let id = setInterval(() => {
        func()
      currentDuration += interval
      if(currentDuration >= duration) {
        clearInterval(id)
      }
    }, interval)
  }


  function theEnd() {
	console.log('This is the end!');
}
// everyXsecsForYsecs(theEnd, 1000, 20000);



function delayCounter(target, wait) {
    let current = 1;
      return function(){
      let id = setInterval(() => {
        if(current <= target) {
          console.log(current)
          current++;
        } else {
          clearInterval(id)
        }
      }, wait)
    }
  }
  const countLogger = delayCounter(3, 1000)
countLogger();
// After 1 second, log 1
// After 2 seconds, log 2
// After 3 seconds, log 3




function promised (val) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(val)
      }, 2000)
    })
        
    return promise;
  }