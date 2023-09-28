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
console.log(userCreater("User1", 2));
