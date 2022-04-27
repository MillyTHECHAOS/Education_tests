const numbers = [10, 4, 100, -5, 54, 2]

//for
let sumFor = 0
for (let i = 0; i < numbers.length; i+=1) {
    sumFor += numbers[i] ** 3
}
console.log("sumFor", sumFor)


// for (let i = 0; i < devNames.length; i += 1) {
//     console.log(i)
//     console.log(devNames[i])
// }

//for of
let sumForOf = 0

for (const number of numbers) {
    sumForOf += number ** 3
}

console.log("for of", sumForOf)

//forEach
let sumForEach = 0
const forEach = numbers.forEach(number => {
    return sumForEach += number ** 3   
})

console.log("forEach", sumForEach)

//reduce
const numbersReduce = numbers.reduce((acc, number) => {
    return acc + number ** 3
}, 0)

console.log("refuce", numbersReduce)