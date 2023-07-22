import { User } from "./class.js";

// TRY START
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
    const rowReference = document.querySelector('.card-space') as HTMLDivElement
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
      <form class= 'mb-2'>
      <input type="number" class="recharge-input w-50" required></input>
      <button class="btn btn-primary">Recharge</button>
      </form>
      <div class= 'container d-flex justify-content-between'>
      <a href="#" class="btn btn-secondary">Show Calls List</a>
      <a href="#" class="btn btn-warning">Filter Calls by Day</a>
      </div>
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
const creditReference = document.querySelectorAll('h5') as NodeListOf<HTMLHeadingElement>
const showListButton = document.querySelectorAll('.btn-secondary') as NodeListOf<Element>
const callListReference = document.querySelectorAll('ul') as NodeListOf<Element>
console.log(callListReference);


userArray.forEach((user,i) =>{
    if(callButton) {
        callButton[i].addEventListener('click', () => {
            user.callSomeone(Math.floor(Math.random()*11))
            if(phoneCredit)
            phoneCredit[i].innerText = user.phoneCredit.toString() +'$'
            if(callNumber)
            callNumber[i].innerText = "Calls Number = " + user.callsNumber.toString()
          })
      }

      if(resetButton) {
        resetButton[i].addEventListener('click', () =>{
            user.resetCalls()
            callNumber[i].innerText = "Calls Number = " + user.callsNumber.toString()
            const allLi = document.querySelectorAll(`ul li`) as NodeListOf<HTMLLIElement>
            allLi.forEach(li => {
              li.classList.add('d-none')
            })
            

        })
      }

      if(formReference) {
        formReference[i].addEventListener("submit", (e) =>{
            e.preventDefault()
            user.recharge(Number(rechargeInput[i].value))
            creditReference[i].textContent = `${user.phoneCredit}$`
            rechargeInput[i].value = ""
        })
      }

      if(showListButton) {
        showListButton[i].addEventListener('click', () => {
          user.callsList.forEach(call => {
            const li = document.createElement('li') as HTMLLIElement
            li.textContent = `${call.date} & It takes ${call.duration} minutes`
            callListReference[i].appendChild(li)
            user.callsList = []
          })

          
        })
      }
})
