// number, string, boolean, null, undefined, object, bigint, symbol

// 1. number
let age=20
console.log(Number(age), String(age), Boolean(age))

// 2.string
let name="John"
console.log(Number("John"), String("John"), Boolean("John"))

// 3.boolean
let you=true
console.log(Number(you), String(you), Boolean(you))

//4. null
let chaos=null
console.log(Number(chaos), String(chaos), Boolean(chaos))

// 5.undefined
let future=undefined
console.log(Number("future"), String("furute"), Boolean("furute"))

// 6.object
let game={
    shadowofmordor:8,
    goodgame:true,
}
console.log(Number(game), String(game), Boolean(game))

// 7.bigint
let price=100n
console.log(Number(price), String(price), Boolean(price))

// 8.symbol
let syb=Symbol("youtoo")
console.log(String(syb), Boolean(syb))