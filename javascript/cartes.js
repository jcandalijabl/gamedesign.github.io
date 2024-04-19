const categories = document.querySelectorAll('.carta-event')
const cartes = document.querySelectorAll('.div-carta')
const descripcions = document.querySelectorAll('.div-carta-descripcio')

for (let i = 0; i < categories.length; i++){
    categories[i].addEventListener('click', () => {
        cartes.forEach(e => {e.style.visibility = 'hidden'})
        cartes[i].style.visibility = 'visible'
        descripcions.forEach(e => {e.style.visibility = 'hidden'})
        descripcions[i].style.visibility = 'visible'
    })
}