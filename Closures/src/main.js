import './style.css'
import javascriptLogo from './javascript.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Closures in javascript</h1>
    <button class="orange">ORANGE</button>
    <button class="black">BLACK</button>
  </div>
`


// **LEXICAL SCOPE**

function printName(n){
  let name = n;

  function displayName(){
    console.log(name);
    
  }
  displayName()
}


printName('player1')


// Example of Closure 

function Closure(name){
    function displayName(){
      return name
    }

    return displayName
}

let myFun = Closure('secret name');

console.log('secret ', myFun() );



// PRACTICAL OF CLOSURE


let orangeBtn = document.querySelector('.orange')
let blackBtn = document.querySelector('.black')

function handleColor(color){

  return ()=>{
    document.body.style.backgroundColor = color 
  }
}

orangeBtn.onclick = handleColor('orange')
blackBtn.onclick = handleColor('black')

