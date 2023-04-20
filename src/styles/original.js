// Получение корневого элемента
const app = document.getElementById("app")

// Получение таблицы результатов
const score = document.getElementById("score")

// Текущий ход
let player = "cross"

// Результаты
let crossesWins = 0
let zerosWins = 0

// Получение прошлых результатов
if (localStorage.getItem("crossesWins") && localStorage.getItem("zerosWins")) {
    crossesWins = +localStorage.getItem("crossesWins")
    zerosWins = +localStorage.getItem("zerosWins")

    score.innerHTML = `<div>Победы крестиков - ${crossesWins}</div><div>Победы ноликов - ${zerosWins}</div>`
}

// Создание ячеек
const cells = [] // [cell1, cell2, cell3, ...]
for (let i = 0; i < 9; i++) { // i++ => i = i + 1
    // Создание одной ячейки
    const cell = document.createElement("div")
    cell.classList.add("cell")

    // Событие нажатия на ячейку
    cell.addEventListener("click", (event) => {
        if (!cell.classList.contains("cross") && !cell.classList.contains("zero")) {
            cell.classList.add(player)

            let isWin = false

            // Проверка победы
            if (i === 0 || i === 1 || i === 2) {
                const class0 = cells[0].classList[1],
                    class1 = cells[1].classList[1],
                    class2 = cells[2].classList[1]

                isWin = class0 === class1 && class1 === class2
            }
            if (!isWin && (i === 3 || i === 4 || i === 5)) {
                const class0 = cells[3].classList[1],
                    class1 = cells[4].classList[1],
                    class2 = cells[5].classList[1]

                isWin = class0 === class1 && class1 === class2
            }
            if (!isWin && (i === 6 || i === 7 || i === 8)) {
                const class0 = cells[6].classList[1],
                    class1 = cells[7].classList[1],
                    class2 = cells[8].classList[1]

                isWin = class0 === class1 && class1 === class2
            }
            if (!isWin && (i === 0 || i === 4 || i === 8)) {
                const class0 = cells[0].classList[1],
                    class1 = cells[4].classList[1],
                    class2 = cells[8].classList[1]

                isWin = class0 === class1 && class1 === class2
            }
            if (!isWin && (i === 2 || i === 4 || i === 6)) {
                const class0 = cells[2].classList[1],
                    class1 = cells[4].classList[1],
                    class2 = cells[6].classList[1]

                isWin = class0 === class1 && class1 === class2
            }
            if (!isWin && (i === 0 || i === 3 || i === 6)) {
                const class0 = cells[0].classList[1],
                    class1 = cells[3].classList[1],
                    class2 = cells[6].classList[1]

                isWin = class0 === class1 && class1 === class2
            }
            if (!isWin && (i === 1 || i === 4 || i === 7)) {
                const class0 = cells[1].classList[1],
                    class1 = cells[4].classList[1],
                    class2 = cells[7].classList[1]

                isWin = class0 === class1 && class1 === class2
            }
            if (!isWin && (i === 2 || i === 5 || i === 8)) {
                const class0 = cells[2].classList[1],
                    class1 = cells[5].classList[1],
                    class2 = cells[8].classList[1]

                isWin = class0 === class1 && class1 === class2
            }

            let isDraw = false
            if (!isWin) {
                isDraw = cells.every(c => c.classList.contains('cross') || c.classList.contains('zero'))
            }

            if (isWin || isDraw) {
                setTimeout(() => {
                    if (isWin) {
                        alert(`${player} победил!`)

                        if (player === "cross") {
                            crossesWins++ // crossesWins = crossesWins + 1
                        } else if (player === "zero") {
                            zerosWins++
                        }
                        localStorage.setItem('crossesWins', crossesWins)
                        localStorage.setItem('zerosWins', zerosWins)

                        score.innerHTML = `<div>Победы крестиков - ${crossesWins}</div><div>Победы ноликов - ${zerosWins}</div>`
                    } else if (isDraw) {
                        alert('Ничья')
                    }

                    for (let c of cells) {
                        c.classList.remove("cross")
                        c.classList.remove("zero")
                    }
                    player = "cross"

                }, 100)
            } else {
                // Передача хода
                if (player === "cross") {
                    player = "zero"
                } else if (player === "zero") {
                    player = "cross"
                }
            }
        }
    })

    app.appendChild(cell)
    cells.push(cell)
}