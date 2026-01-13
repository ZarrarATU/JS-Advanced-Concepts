import './style.css'
import javascriptLogo from './javascript.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Prototype</h1>
    <p class="read-the-docs">
       In javascript everything is object!
    </p>
  </div>
`
// **instance of**

let array = [2, 3, 5];

// console.log(array);

function sub(num) {
  return num + 1
};

// sub.name = 'saar it"s my property'
console.log(sub.prototype);

sub(2)


function createUser(username, id) {
  this.username = username;
  this.id = id
}

function createAdmin(username, password) {
  this.username = username;
  this.password = password
}

let user = new createUser('user1', '#32453');

console.log(user);

console.log(user instanceof createAdmin);

// **refrence check**

let object1 = {
  name: 'obj1',
  password: 'hellopassword'
}

const object2 = object1

console.log(object1 === object2);
object2.name = 'changed'
console.log(object1);


// **prototype**

function createGame(name, mode) {
  this.name = name;
  this.mode = mode;
}

createGame.prototype.start = function () {
  return `your ${this.name} game is starting...`
}

createGame.prototype.editGame = function (name, mode) {
  this.name = name;
  this.mode = mode;
}

let minecraft = new createGame('minecraft', 'PVP');
let gta5 = new createGame('gta 5', 'online')

console.log(minecraft.start());
console.log(gta5.start());

gta5.editGame('gta 6', 'offline');

console.log(gta5);

// **custom Prototype functions**


let string = 'string        ';
let string2 = 'string      2       '

String.prototype.customLength = function () {
  return this.trim().length
}

console.log(string.length);
console.log(string.customLength(), 'customLength');
console.log(string2.customLength());





let dog = {
  name: 'mydog',
  hunger: 2,
  bark: false,

  letsBark() {
    return this.bark ? 'barking...' : 'sorry you don,t have permission!'
  }
}

Object.prototype.customFunction = function () {
  return `${this.name ? this.name : 'not an object'}: saar this is my custom function`
}

console.log(dog.letsBark());
console.log(dog.customFunction());
console.log(string.customFunction());


// **Inheritance**

let owner = {
  rank: 'server-owner',
  canLogin: true,
}

let helper = {
  rank: 'server-helper'
}

let mod = {
  rank: 'server-mod',
  canEdit: true,
}

mod.__proto__ = owner
helper.__proto__ = owner

console.log(mod.canLogin);


//  **Modern Syntax of Inheritance**

let cat = {
  name: 'cat',
  eat: true,
  walk: true
}

let fish = {
  name: 'fish',
  walk: false
}

Object.setPrototypeOf(fish, cat);

console.log(fish.eat);

















