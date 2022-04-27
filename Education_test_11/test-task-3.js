const coffees = ['Latte', 'Cappuccino', 'Americano'];

let coffeeName = prompt("Поиск кофе по названию:")
coffeeName = coffeeName.toLocaleLowerCase()

const coffeeIndex = coffees.findIndex((coff) => {
    return coff.toLocaleLowerCase() === coffeeName
})

favCoffee = coffees[coffeeIndex]

if (favCoffee) {
    alert(`Держите ваш любимый кофе ${coffeeName}. Он ${coffeeIndex}-й по популярности в нашей кофейне`)
} else {
    alert("К сожалению, такого вида кофе нет в наличии")
}