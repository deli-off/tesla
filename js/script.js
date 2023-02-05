let teslaImg = document.querySelector('.tesla')
let kolesa = document.querySelectorAll('.one')
let speedView = document.querySelector('.speed__type')
let degView = document.querySelector('.deg__type')
let disView = document.querySelector('.disk__type')
let speedUpDown = document.querySelectorAll('[data-command]')
let offBtn = document.querySelector('.off-btn')
let notific = document.querySelector('.notific')
let functional = document.querySelector('.functional')
let black = document.querySelector('.black')
let grey = document.querySelector('.grey')
let white = document.querySelector('.white')
let pechka = document.querySelector('.pechka1')
let candy = document.querySelector('.canditioner')



speedUpDown.forEach((btn) => {
    btn.onclick = () => {
        let command = btn.getAttribute('data-command')

        upDown(command)
    }
})

if (degView.innerHTML === '25') {
    pechka.setAttribute('src', '../img/on.svg')
}


function upDown(cmd) {
    switch (cmd) {
        case 'up':
            if (speedView.innerHTML < '90') {
                speedView.innerHTML++
            }
            break;
        case 'down':
            if (speedView.innerHTML > '50') {
                speedView.innerHTML--
            }
            break
        case 'degUp':
            if (degView.innerHTML < '30') {
                degView.innerHTML++
            }

            break
        case 'degDown':
            if (degView.innerHTML > '10') {
                degView.innerHTML--
            }
            break
        case 'diskUp':
            if (disView.innerHTML < '21') {
                disView.innerHTML++
            }
            break
        case 'diskDown':
            if (disView.innerHTML > '19') {
                disView.innerHTML--
            }
            break
    }
}

white.onclick = () => {
    teslaImg.setAttribute('src', '../img/white-salon.png')
}

black.onclick = () => {
    teslaImg.setAttribute('src', '../img/black-salon.png')
}

grey.onclick = () => {
    teslaImg.setAttribute('src', '../img/grey-salon.png')
}

offBtn.onclick = () => {
    teslaImg.setAttribute('src', '../img/tesla.png')
}

kolesa.forEach((kol) => {
    if (speedView.innerHTML === '70') {
        kol.style.animation = '.5s linear 0s normal none infinite running rot'
    } else if (speedView.innerHTML === '90') {
        kol.style.animation = '.1s linear 0s normal none infinite running rot'
    }

})


teslaImg.onclick = () => {
    teslaImg.setAttribute('src', '../img/tesla-salon.png')
    kolesa.forEach((kol) => {
        kol.style.display = 'none'
    })
    functional.style.opacity = '0'
    notific.style.opacity = '1'
}



offBtn.onclick = () => {
    teslaImg.setAttribute('src', '../img/tesla.png')
    kolesa.forEach((kol) => {
        kol.style.display = 'block'
    })
    functional.style.opacity = '1'
    notific.style.opacity = '0'
}
