// Задание #1
const myName = "Моё имя"
const programmingLanguage = "JavaScript"
const courseCreatorName = "Владилен Минин"
const reasonText = "заработок большего количества денег"
const numberOfMonth = "ноль месяцев"

const Speach = `Всем привет! Меня зовут, ${myName}.
Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев.
Я уверен(а), что пройду данный курс до конца!`
console.log(Speach)

// Задание #2
console.log("Задание #2")

let myInfoText = `Всем привет! Меня зовут, ${myName}.
Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. 
Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал(а) ${programmingLanguage} ${numberOfMonth} месяцев.
Я уверен(а), что пройду данный курс до конца!`
myInfoText = myInfoText.replaceAll(programmingLanguage, programmingLanguage.toUpperCase())
console.log(myInfoText)
console.log(myInfoText.length)
console.log(myInfoText[0])
console.log(myInfoText[myInfoText.length - 1])

// Задание #3

let userName = prompt("Как Вас зовут?")
userName = userName.trim().toUpperCase()
alert(userName)

// Задание #4

let userAge = prompt("Сколько Вам лет?")
userAge = Number(userAge.trim())
alert(`Вас зовут ${userName} и Вам ${userAge} лет.`)