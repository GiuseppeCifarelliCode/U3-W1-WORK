import { User } from "./class.js";

// TRY ON 
const firstUser = new User(10, 0.50)
const secondUser= new User(25)
const thirdUser = new User(100)

firstUser.callSomeone(1.5)
firstUser.callSomeone(5)
firstUser.recharge(5)
console.log('Phone Credit =', firstUser.callNumber404);
console.log('Number of calls =', firstUser.getCallnumber);
firstUser.resetCalls()
firstUser.showCallsList()
firstUser.filterCallsByDay(21)
// --TRY END --

// HTML DOM
const userArray:User[] = []
function createSmartphone(_phoneCredit:number,  _callsCost?:number,  _callsNumber?:number){
    const user:User = (new User(_phoneCredit,  _callsCost,  _callsNumber))
    const rowReference = document.querySelector('.row') as HTMLDivElement
    const col = document.createElement('div') as HTMLDivElement
    col.classList.add('col')
    col.innerHTML = `
    <div class="card">
    <div class="card-body">
      <h5 class="card-title phone-credit">${user.phoneCredit}$</h5>
      <p class="card-text call-number">Calls Number = ${user.callsNumber}</p>
      <p class="card-text">Calls Cost = ${user.callsCost}</p>
      <div class= "container d-flex justify-content-evenly mb-2">
      <a href="#" class="btn btn-success">Call Someone</a>
      <a href="#" class="btn btn-danger">Reset Calls</a>
      </div>
      <form>
      <input type="number" class="recharge-input" required></input>
      <button class="btn btn-primary">Recharge</button>
      </form>
      <a href="#" class="btn btn-secondary">Show Calls List</a>
      </div>
    </div>
  </div>`
  userArray.push(user)
  rowReference.appendChild(col)
}

createSmartphone(10, 0.5)
createSmartphone(25, 0.7, 2)
createSmartphone(100, 1, 5)
const callButton = document.querySelectorAll('.btn-success') as NodeList
const phoneCredit = document.querySelectorAll('.phone-credit') as NodeListOf<HTMLAnchorElement>
const callNumber= document.querySelectorAll('.call-number') as NodeListOf<HTMLAnchorElement>
const resetButton = document.querySelectorAll('.btn-danger') as NodeList
const formReference = document.querySelectorAll('form') as NodeList
const rechargeInput = document.querySelectorAll('.recharge-input') as NodeListOf<HTMLInputElement>

userArray.forEach((user,i) =>{
    if(callButton) {
        callButton[i].addEventListener('click', () => {
            user.callSomeone(2)
            if(phoneCredit)
            phoneCredit[i].innerText = user.phoneCredit.toString()
            if(callNumber)
            callNumber[i].innerText = user.callsNumber.toString()
          })
      }

      if(resetButton) {
        resetButton[i].addEventListener('click', () =>{
            user.resetCalls()
            callNumber[i].innerText = user.callsNumber.toString()
        })
      }


// Per aggiungere il recharge button devo prima dividere la stringa del Credito, prendere
// solo la parte numerica ed aggiungere la ricarica. Poi riaggiungere il $ e cambiare
// l innertext di riferimento in HTML. Non ho avuto tempo per completare tutto l' HTML

    //   if(formReference) {
    //     formReference[i].addEventListener("submit", (e) =>{
    //         e.preventDefault()
    //         user.recharge(rechargeInput[i].value)
    //         console.log((rechargeInput));
            

    //     })
    //   }
})
