const btnShuffle = document.querySelector('.btnShuffle')// 
const btnLight = document.querySelector('.btnLight')
const menuSelect = document.querySelectorAll('.menuSelect')


// Gera cores aleatórias em todos os blocos ao clicar no shuffle

const blocks = document.querySelectorAll('.flex div')

var randomNumbers = () => Math.floor(Math.random() * 4)

var colors = [
    'blue',
    'red',
    'green',
    'yellow'
]

btnShuffle.addEventListener('click', () => {
    blocks.forEach((item) => {
        item.classList.remove('blue', 'red', 'green', 'yellow')
        item.classList.add(colors[randomNumbers()])
    })
})

// Gera cor aleatória em apenas um bloco ao clicar nele

blocks.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.remove('blue', 'red', 'green', 'yellow')
        item.classList.add(colors[randomNumbers()])
    })
})

// Ativa a cor correspondente ao clicar no botão do menu

const btnRed = document.querySelector('.red')
const btnBlue = document.querySelector('.blue')
const btnGreen = document.querySelector('.green')
const btnYellow = document.querySelector('.yellow')


btnRed.addEventListener('click', () => {
    if (btnRed.classList.contains('red')){
        blocks.forEach((item) => {
            item.classList.remove('red', 'yellow', 'green', 'blue')
            item.classList.add('red')
        })
    }
})

btnBlue.addEventListener('click', () => {
    if (btnBlue.classList.contains('blue')){
        blocks.forEach((item) => {
            item.classList.remove('red', 'yellow', 'green', 'blue')
            item.classList.add('blue')
        })
    }
})

btnGreen.addEventListener('click', () => {
    if (btnGreen.classList.contains('green')){
        blocks.forEach((item) => {
            item.classList.remove('red', 'yellow', 'green', 'blue')
            item.classList.add('green')
        })
    }
})

btnYellow.addEventListener('click', () => {
    if (btnYellow.classList.contains('yellow')){
        blocks.forEach((item) => {
            item.classList.remove('red', 'yellow', 'green', 'blue')
            item.classList.add('yellow')
        })
    } 
})

// Restarta o jogo

const btnRestart = document.querySelector('.btnRestart')
const menuSelectLight = document.querySelectorAll('.menuSelectLight button')


btnRestart.addEventListener('click', () => {

    blocks.forEach((item) => {
        item.classList.remove('blue', 'red', 'yellow', 'green', 'showDown')
    })

    menuSelectLight.forEach((item) => {
        item.classList.add('border2')
    })

    btnLight.style.backgroundColor = '#d8bfd8'

    clearInterval(animationScreen)

}) 

// Desativa os blocos com a cor selecionada no menu de cores ao clicar no btnlight

const btnRedLight = document.querySelector('.menuSelectRedLight')
const btnBlueLight = document.querySelector('.menuSelectBlueLight')
const btnGreenLight = document.querySelector('.menuSelectGreenLight')
const btnYellowLight = document.querySelector('.menuSelectYellowLight')

btnLight.onclick = () => {
    if (btnRedLight.classList.contains('border2') == false) {
        btnLight.style.backgroundColor = '#d8bfd8'

        blocks.forEach((item) => {
            item.classList.remove('red')
        })

        btnRedLight.classList.add('border2')
    }

    if (btnBlueLight.classList.contains('border2') == false) {
        btnLight.style.backgroundColor = '#d8bfd8'

        blocks.forEach((item) => {
            item.classList.remove('blue')
        })

        btnBlueLight.classList.add('border2')
    }

    if (btnGreenLight.classList.contains('border2') == false) {
        btnLight.style.backgroundColor = '#d8bfd8'

        blocks.forEach((item) => {
            item.classList.remove('green')
        })

        btnGreenLight.classList.add('border2')
    }

    if (btnYellowLight.classList.contains('border2') == false) {
        btnLight.style.backgroundColor = '#d8bfd8'

        blocks.forEach((item) => {
            item.classList.remove('yellow')
        })

        btnYellowLight.classList.add('border2')
    }
}


// Ativa a cor de fundo do btnlight conforme a cor escolhida no menuSelect

btnRedLight.addEventListener('click', () => {
    btnRedLight.classList.toggle('border2')

    if (btnRedLight.classList.contains('border2') == false) {
        btnLight.style.backgroundColor = '#b685b6'
    } else if (btnRedLight.classList.contains('border2') == true) {
        btnLight.style.backgroundColor = '#d8bfd8'
    }

})

btnBlueLight.addEventListener('click', () => {
    btnBlueLight.classList.toggle('border2')

    if (btnBlueLight.classList.contains('border2') == false) {
        btnLight.style.backgroundColor = '#b685b6'
    } else if (btnBlueLight.classList.contains('border2') == true) {
        btnLight.style.backgroundColor = '#d8bfd8'
    }

})

btnGreenLight.addEventListener('click', () => {
    btnGreenLight.classList.toggle('border2')

    if (btnGreenLight.classList.contains('border2') == false) {
        btnLight.style.backgroundColor = '#b685b6'
    } else if (btnGreenLight.classList.contains('border2') == true) {
        btnLight.style.backgroundColor = '#d8bfd8'
    }

})

btnYellowLight.addEventListener('click', () => {
    btnYellowLight.classList.toggle('border2')

    if (btnYellowLight.classList.contains('border2') == false) {
        btnLight.style.backgroundColor = '#b685b6'
    } else if (btnYellowLight.classList.contains('border2') == true) {
        btnLight.style.backgroundColor = '#d8bfd8'
    }

})

// Animação para cada bloco ao dar refresh

var index = 0

var animationScreen = setInterval(() => {
    blocks[index].classList.add('showDown')
    index++
}, 150)

setTimeout(() => {
    clearInterval(animationScreen)
}, 2400)





