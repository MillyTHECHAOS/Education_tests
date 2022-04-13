// number, string, boolean, null, undefined, object, bigint, symbol

// 1. number
const steamGames=264
console.log("steamGames",steamGames, typeof steamGames)

// 2. string
const favotiteGame="none"
console.log("favotiteGame",favotiteGame, typeof favotiteGame)

// 3.boolean
const cyberpunk2077=true
console.log("cyberpunk2077",cyberpunk2077, typeof cyberpunk2077)

// 4.null исключение из typeof
const future=null
console.log(future)

// 5.undefined
const halflife3=undefined
console.log("halflife3",halflife3, typeof halflife3)

// 6. object
const game={
    shadowofmordor:8,
    goodgame:true,
}
console.log("game",game, typeof game)

// 7.bigint
const cash=100n
console.log("cash",cash, typeof cash)

// 8.symbol
const face=Symbol("imhere")
console.log("face",face, typeof face)