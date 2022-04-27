const arrNum = []
let sum = 0

const getSumOfSequence = (number) => {
    for(i = 1; i <= number; i += 1) {
        arrNum.push(i)
    }
    sum = arrNum[0] + (i-1)
    // sum = arrNum[0] + number второвая вариант
}

getSumOfSequence(7)
console.log(sum)
console.log(arrNum)
