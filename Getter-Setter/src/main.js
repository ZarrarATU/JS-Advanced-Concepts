import './style.css'
import javascriptLogo from './javascript.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Getter & Setter</h1>
  </div>
`



class User{
  constructor(name,id){
    this.name = name;
    this.id = id
  }

  get id(){
    return 'Your ID is: ' + this._id
  }
  set id(value){
      this._id = value
  }

  details() {
    return `details ${this.name}, ${this.id}`
  }
}

let user1 = new User('USER1','#23445');

// user1.id = 'saar'
console.log(user1);


console.log(user1.details());
console.log(user1._id);



class Game{
  constructor(name,mode,difficulty){
    this.name = name
    this.difficulty = difficulty
    this.mode = mode
  }

  get mode(){
    return `Your game mode is: ${this._mode}`;
  }
  set mode(value){
    this._mode = value
  }
}


let minecraft = new Game('minecraft','survival','easy');

console.log(minecraft.name);
console.log(minecraft.mode)




// **How it's working?**

function Player(name,mode){
  this.name = name
  this.mode = mode

  Object.defineProperty(this,'name',{
    get: ()=>{
      return this._name + ' is your name!'
    },
    set: (value)=>{
      this.name = value
    }
  })

}


let player1 = new Player('player1','pvp')

console.log(player1);
console.log(player1.name);






