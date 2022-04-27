const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

const giveParcel = () => {
    alert(`${peopleWaiting.shift()} получил(а) посылку. В очереди осталось ${peopleWaiting.length} человек.}`)
}

giveParcel()
giveParcel()
giveParcel()

const leaveQueueWithoutParcel  = () => {
    for (i = peopleWaiting.length; peopleWaiting.length > 0; i -= 1){
        alert(`${peopleWaiting.pop()} не получил(а) посылку и ушел(ла) из очереди`)
    }
}

leaveQueueWithoutParcel()