export interface ISmartphone {
    phoneCredit:number
    callsCost?:number
    callsNumber?:number
    callsList:{readonly id:number, duration:number, date:Date}[]

    recharge(money:number):void

    callSomeone(minDuration:number):void

    get callNumber404():string

    get getCallnumber():number

    resetCalls():void
}
