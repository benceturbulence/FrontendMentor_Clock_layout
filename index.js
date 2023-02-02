const toggleBtn = document.getElementById('toggle')
const wrapperElement = document.getElementsByClassName('wrapper')[0]
toggleBtn.addEventListener('click', () => {
    wrapperElement.classList.toggle('expanded')
})