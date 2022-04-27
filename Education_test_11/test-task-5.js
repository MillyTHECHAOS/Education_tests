const clientsEstimations = []

const askClientToGiveEstimation = () => {
    let question = prompt("Как вы оцениваете нашу кофейню от 1 до 10?")
    question = Number(question)
    if (question >= 1 && question <= 10) {
        clientsEstimations.push(question)
    }
}

askClientToGiveEstimation()
askClientToGiveEstimation()
askClientToGiveEstimation()
askClientToGiveEstimation()
askClientToGiveEstimation()

console.log(clientsEstimations)

const goodEstimations = clientsEstimations.filter((good) => good > 5)
const notGoodEstimations = clientsEstimations.filter((bad) => bad <= 5)

alert(`Всего положительных оценок: ${goodEstimations.length}; Всего отрицательных оценок: ${notGoodEstimations.length}`)