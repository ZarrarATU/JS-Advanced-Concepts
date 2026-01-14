// import './style.css'
// import javascriptLogo from './javascript.svg'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Class constructor & Static</h1>

//   </div>
// `

class User {
  constructor(username,password){
    this.username = username;
    this.password = password;
  }

   userDetails(){
    return `details: ${this.username}, ${this.password}`
   }
   
   encrpytPassword(){
    return this.password + 'm35#4'
   }

}


let user = new User('user1','passwrod1244')


console.log(user);
console.log(user.userDetails());
console.log(user.encrpytPassword());



// **HOW ITS WORKING?**

function oldUser(username,password,id){
   this.password = password
   this.username = username
   this.id = id
};

oldUser.prototype.userDetails = function(){
  return `old details: ${this.username}, ${this.password}`
};

let olduser = new oldUser('olduser','oldpassword','old#33456');

console.log('old',olduser.userDetails());



//  **Inheritance** 

class Player{
  constructor(name,mode){
    this.name = name;
    this.mode = mode;
  }

  startGame(){
    return `Your game is starting... ${this.mode}`
  }
}


let player = new Player('player1','pvp');
let player2 = new Player('player2','hardcore')

console.log(player.startGame());


class Admin extends Player{
  constructor(name,mode,password){
    super(name,mode)
    //  this.name = name;    //wrong
    //  this.mode = mode;    //wrong
     this.password = password;
  }


  accessAdmin(password) {
      if(password === this.password){
        return `your are succesfully logedIn as an Admin`;
      }
      else if(!password){
        return `please enter your password!`
      }
      else{
        return `sorry, your password is wrong!`
      }
  }
}

let admin1 = new Admin('admin1','survival','mysecret');

console.log(admin1.accessAdmin('mysecret'));
console.log(admin1.startGame());
// console.log(player.accessAdminI());      //error

console.log(player === admin1);     //false
console.log(player === player2);     //false
console.log(player === Player);       //false
console.log(player instanceof Player);   //true



// **Static Property**

class Student{
  constructor(name,rank){
      this.name = name;
      this.rank = rank;
  }

  static createID(){
      this.id = 'random123'
      return this.id
  }

  showUser(){
    return `student name is ${this.name}`
  }
}

let student1 = new Student('student1','10th')

// console.log(student1.createID());       //wrong


class Teacher extends Student {
  constructor(name,password){
    super(name)
    this.password = password
  }

  createBatch(batchName){
     return `the batch has been created, ${batchName}`
  }
}

let newTeacher = new Teacher('teacher1','teacherpass');

console.log(newTeacher.showUser());



let student2 = new Student('student2','secret');

console.log(Student.createID())

console.log(student2);












