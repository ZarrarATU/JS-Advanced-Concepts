import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>OOP IN JAVASCRIPT</h1>
  </div>
`

// object literals  

// --constructor functions
// --Prototypes
// --Classes
// --Instances (new,this)

let name = 'global'

let object = {
  name: 'steve',
  id: '#45533',
  getDetails: ()=>{
    return `details: ${this.name}, ${this.id}`   //wrong
  },
  getActualDetails(){
    return `actual details: ${this.name}, ${this.id}` //correct
  }
}

// this  --current context

let newObj = {...object}

object.name = 'minecraft';

// console.log(object.name, 'object');
// console.log(newObj, 'newObj');
// console.log(object.getDetails());
console.log(object.getActualDetails());

// window object in DOM --- global context

// console.log(this);   this refers to the window object


// constructor function 

// let promise = new Promise()
// let date = new Date()
// const object1 = new Object()

function User(username,id,password){
   this.username = username;
   this.id = id;
   this.password = password;

   this.details = ()=>{
     return `details: ${this.username}, ${this.id}, ${this.password}`
   }

   return this
}

let user1 = new User('ahad','#4245','mypassword123');  //new instance
let user2 = new User('user2','#4212','passwordsecret');  //new instance

// let user3 = User('user3','#455','snfhfhfe');
// let user4 = User('user4','#45','snfhfe');

console.log(user1.details());










