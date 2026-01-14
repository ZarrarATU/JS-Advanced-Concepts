import './style.css'
import javascriptLogo from './javascript.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Object.getOwnPropertyDescriptor</h1>
     <p>Objects in-depth</p>

  </div>
`


// how to check property descriptor? 

let piInfo = Object.getOwnPropertyDescriptor(Math,'PI');

console.log(piInfo);


let myObj = {
  name: 'myobj',
  id: '#35543',
  value: 24   //no one can change the value
}


let infoValue = Object.getOwnPropertyDescriptor(myObj,'value');

console.log(infoValue);   //writable: true


// how to define properties?

Object.defineProperty(myObj,'value',{
  writable: false
})

console.log(infoValue);  //writable: false

// myObj.value = 'saar i m changing the value'   //error


for (const prop in myObj) {
    console.log(`  ${prop}`);   
}

for (const [i,p] of Object.entries(myObj)) {
     console.log(`${i} : ${p}`);
}

Object.defineProperty(myObj,'value',{
  enumerable: false,
})


for (const prop in myObj) {
    console.log(`  ${prop}`);   
}

for (const [i,p] of Object.entries(myObj)) {
     console.log(`${i} : ${p}`);
}