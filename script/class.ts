import { ISmartphone } from "./interface.js";

export class User implements ISmartphone{
    phoneCredit: number;
    callsCost: number
    callsNumber: number 
    callsList: {id:number, duration:number, date:Date}[]

    constructor(_phoneCredit:number,  _callsCost:number = 0.20,  _callsNumber:number = 0){
        this.phoneCredit = _phoneCredit
        this.callsCost = _callsCost
        this.callsNumber = _callsNumber
        this.callsList = []
    }

    recharge(money:number):void{
        this.phoneCredit += money
    }

    callSomeone(minDuration:number):void{
        let cost = minDuration * this.callsCost
        if(this.phoneCredit > cost) {
        this.phoneCredit -= cost
        this.callsNumber++
        let call:{id:number, duration:number, date:Date} = {
            id: Math.floor(Math.random()*100001),
            duration: minDuration,
            date: new Date()
        }
        this.callsList.forEach(el =>{
            if(el.id === call.id)
            call.id = Math.floor(Math.random()*100001)
        })
        this.callsList.push(call)
        } else alert("You don't have enough phone Credit, use recharge");  
    }

    get callNumber404():string{
        return this.phoneCredit + '$'
    }

    get getCallnumber():number{
        return this.callsNumber
    }

    resetCalls():void{
        this.callsNumber = 0
    }

    showCallsList():void {
        console.log(this.callsList);
    }

    // NON FUNZIONA - NON PRENDE LA CONCATENAZIONE NELLA CONDIZIONE FILTER
    // filterCalls(_day:number, _month?:number, _year?:number, _hour?:number):void {
    //      console.log(this.callsList.filter(call => 
    //         call.date.getDate() === _day &&
    //         call.date.getMonth() === _month &&
    //         call.date.getFullYear() === _year &&
    //         call.date.getHours() === _hour
    //         ));
    // }

    filterCallsByDay(_day:number):void {
             console.log(`Calls in day ${_day} =`,this.callsList.filter(call => 
                call.date.getDate() === _day
                ));
             }
}
















