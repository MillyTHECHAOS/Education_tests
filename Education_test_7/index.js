const existedUserLogin = "the_best_user"
const existedUserPassword = 123

let userLogin = prompt("Введите логин")
userLogin = userLogin.trim()
let userPassword = prompt("Введите пароль")
userPassword = userPassword.trim()

if (userLogin === existedUserLogin) {
    alert("Добро пожаловать Джон")
} else {
    alert("Логин и (или) Пароль введены неверно!")
}

