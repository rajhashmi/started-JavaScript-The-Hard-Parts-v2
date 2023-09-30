// Object 1;


let user1 = {
    Name: "User1",
    Score: 2,
    increment(){
        this.Score++
    }
}

// Object 2

let user2 = {};

user2.Name = "User2";
user2.Score = 2;
user2.increment = function(){
    user2.Score++
};

// Object 3

let user3 = Object.create(null);

user3.Name = "User3";
user3.Score = 2;
user3.increment = function(){
    user3.Score++
}

// ========= Generate Object using function ===========

function userCreater(Name,Score){
    let user = {};
    user.Name = Name;
    user.Score = Score;
    user.increment = function(){
        user.Score++
    }
    return user
}
// console.log(userCreater("User1", 2));


//  Aproch two

function createObject(user, Score){
    let data = Object.create(protoChain)
    data.user = user;
    data.Score = Score;
    return data
}
let protoChain = {
    increment: function(){this.Score++;},
    login: function(){console.log("Logged In");}
}
let person1 = createObject('user1',2)
let person2 = createObject('user2',3)
person1.increment()
console.log(person1.login());


// ===============================

// the new  keyword automates a lot of our manual work for us

function UserCreaterTwo(Name,Score){
    this.Name = Name;
    this.Score = Score;
}
UserCreaterTwo.prototype.fullInformation = function(){
    return `the user name is: ${this.Name} and the score is: ${this.Score}`
};

let userOne = new UserCreaterTwo('user1', 2);
console.log(userOne.fullInformation());



function userCreate(name,score){
    const newUser = Object.create(userFunctionstore);
    newUser.name = name;
    newUser.score = score
    return newUser
}
const userFunctionstore = {
    increment: function(){
        let that = this
        function add1(){
        //    console.log(that);
        that.score++
       }
        add1()
    }
}
let user1o = userCreate('will',3);
user1o.increment()
user1o.increment()
user1o.increment()
console.log(user1o);

function sayHi() {
    console.log("Hi");
  
    sayHi.counter++;
  }
  sayHi.counter = 0;
  
  sayHi(); // Hi
  sayHi(); // Hi
  
  console.log(( `Called ${sayHi.counter} times` )); // Called 2 times