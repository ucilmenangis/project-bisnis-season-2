const navbarButton = document.getElementById('navbar-button')
const navbarResponsiveContainer = document.getElementById('navbar-res-con')

navbarButton.addEventListener('click',() => {
    navbarResponsiveContainer.classList.toggle('right')
})