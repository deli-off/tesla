let teslaImg = document.querySelector('.tesla')
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
let stock__type = document.querySelector('.stock__type')
let kolesoOne = document.querySelector('.koleso__one')
let kolesotwo = document.querySelector('.koleso__two')
let door = document.querySelector('.door')
let vid = document.querySelector('.off')
let price = document.querySelector('.price__type')

let speedLife = 55
let stockLife = 750
let degLife = 20
let disLife = 19
let priceLife = 89 + ', ' + 990



speedUpDown.forEach((btn) => {
    btn.onclick = () => {
        let command = btn.getAttribute('data-command')

        upDown(command)
    }
})



function upDown(cmd) {
    switch (cmd) {
        case 'up':
            if (speedLife < 90) {
                speedLife += 5
                stockLife -= 15
                speedView.innerHTML = speedLife
                stock__type.innerHTML = stockLife + 'км'
            }
            break;
        case 'down':
            if (speedLife > 40) {
                speedLife -= 5
                stockLife += 10
                speedView.innerHTML = speedLife
                stock__type.innerHTML = stockLife + 'км'
            }
            break
        case 'degUp':
            if (degLife < 40) {
                degLife += 10
                degView.innerHTML = degLife
                if (degLife === 30) {
                    stockLife -= 5
                    candy.setAttribute('src', './img/on.svg')
                    pechka.setAttribute('src', './img/off.svg')
                }
            }
            break
        case 'degDown':
            if (degView.innerHTML > 10) {
                degLife -= 10
                degView.innerHTML = degLife
            }
            if (degLife === 10) {
                stockLife -= 5
                pechka.setAttribute('src', './img/on.svg')
                candy.setAttribute('src', './img/off.svg')
            }

            break
        case 'diskUp':
            disView.innerHTML = '21'
            price.innerHTML = '$' + 91 + ', ' + 900
            kolesoOne.setAttribute('width', '130px')
            kolesotwo.setAttribute('width', '130px')
            kolesoOne.setAttribute('height', '130px')
            kolesotwo.setAttribute('height', '130px')
            break
        case 'diskDown':
            disView.innerHTML = '19'
            price.innerHTML = '$' + 89 + ', ' + 990
            kolesoOne.setAttribute('width', '120px')
            kolesotwo.setAttribute('width', '120px')
            kolesoOne.setAttribute('height', '120px')
            kolesotwo.setAttribute('height', '120px')
            break
    }
}

white.onclick = () => {
    teslaImg.setAttribute('src', './img/white-salon.png')
}

black.onclick = () => {
    teslaImg.setAttribute('src', './img/black-salon.png')
}

grey.onclick = () => {
    teslaImg.setAttribute('src', './img/grey-salon.png')
}

offBtn.onclick = () => {
    teslaImg.setAttribute('src', './img/tesla.png')
}

function zoom() {
    door.onclick = () => {
        teslaImg.style.scale = '20'
        setTimeout(() => {
            teslaImg.setAttribute('src', './img/tesla-salon.png')
            teslaImg.style.scale = '1'
        }, 1000);
        kolesoOne.style.display = 'none'
        kolesotwo.style.display = 'none'
        functional.style.opacity = '0'
        notific.style.opacity = '1'
        door.classList.add('door')
    }

    vid.onclick = () => {
        teslaImg.setAttribute('src', './img/tesla-salon.png')
        kolesoOne.style.display = 'none'
        kolesotwo.style.display = 'none'
        functional.style.opacity = '0'
        notific.style.opacity = '1'
        door.classList.add('door')
    }

    offBtn.onclick = () => {
        teslaImg.setAttribute('src', './img/tesla.svg')
        kolesoOne.style.display = 'block'
        kolesotwo.style.display = 'block'
        functional.style.opacity = '1'
        notific.style.opacity = '0'
        door.classList.add('door')
    }
}

zoom()  