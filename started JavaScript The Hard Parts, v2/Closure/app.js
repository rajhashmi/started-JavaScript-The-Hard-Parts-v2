function outer (){
    let counter = 0;
    function incrementCounter(){counter ++;}
    return incrementCounter;
}
const myNewFunction = outer(); // we are return function from the outer function memory and this is a special kind of function It's just not return the function it is also returning the sarounding outer local memory in the form of return function (incrementCounter) bagPack 

myNewFunction(); // when we call this function this we hunt for counter in his local memory but it will not find so it will 
myNewFunction();

 function outerFunction() {
  var outerVariable = 'I am from outerFunction';

  function innerFunction() {
    console.log(outerVariable); // Inner function has access to outerVariable
  }

  return innerFunction;
}

var closureExample = outerFunction(); // closureExample now holds a reference to innerFunction
closureExample(); // This will log "I am from outerFunction" because of the closure

// 1.  Parsing	
// Definition	:-> The process of analyzing the syntax of a program and building a representation of its structure.
// Purpose :-> To ensure that the program is written correctly and to make it easier for the computer to understand.
// Implementation :-> Parsing is typically done by a component of the compiler or interpreter called the parser.
// Impact on closures :-> Parsing is essential for the creation of closures. Without parsing, the compiler or interpreter would not be able to determine which variables should be part of the closure.
// Examples :->Parsing is used to create the abstract syntax tree (AST) of a program. The AST is a representation of the structure of the program that is used by the compiler or interpreter to generate machine code.

// 2. Lexical Scoping	
// Definition	:-> A feature of programming languages that allows inner functions to access the variables of their outer functions.
// Purpose :-> To allow inner functions to access the data they need without having to explicitly pass it to them.
// Implementation :->Lexical scoping is implemented by the language itself.
// Impact on closures :-> Lexical scoping is the mechanism that allows inner functions to access the variables of their outer functions. This is what makes closures possible.
// Examples :->Lexical scoping is a feature of most programming languages, including JavaScript, C++, and Java.

// 3. Lexical Environment
// Definition	:-> A data structure that keeps track of the variables that are in scope for a particular function.
// Purpose :-> To provide a way to store and access variables that are in scope for a particular function.
// Implementation :->Lexical environments are typically implemented as data structures that are associated with each function call.
// Impact on closures :-> Lexical environments are the data structures that store the variables that are in scope for a particular function. This information is used by the JavaScript engine to determine which variables should be part of the closure.
// Examples :->Lexical environments are typically implemented as stacks of variable bindings. Each stack frame corresponds to a function call, and the variables that are in scope for that function call are stored in the stack frame.

// generator funciton

function *generate(){
  yield 1
  yield 2
}
let generatorFunction = generate();
let element1 = generatorFunction()
let element2 = generatorFunction()
