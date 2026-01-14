import './style.css'
import javascriptLogo from './javascript.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>THIS & CALL</h1>
    <button class="bind-btn">BIND</button>
  </div>
`
//call

function createPassword(password){
  this.password = password + 'secret123';
}

function setUser(username,password,id){
  this.username = username;
  this.id = id

  createPassword.call(this,password)
}

let user = new setUser('subhan','password','#34525')

console.log(user);


//bind 

        class Server{
          constructor(){
            this.server = 'localhost:4000';
            this.dependency = 'none'

            document.querySelector('.bind-btn')
            .addEventListener('click',this.handleClick.bind(this))

          }

          handleClick(){
             console.log('bindingg....');
             console.log(this.dependency);
             
             
          }
  
        }

        let server1 = new Server()