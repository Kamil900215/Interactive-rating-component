const rates = document.querySelectorAll('.rate')
const summary = document.querySelector('.summary')
const submitBtn = document.querySelector('.btn')
const displayRating = document.querySelector('.rating-selected')
let isRateSelected = false;

const onRateSelect = (e) => {
    rates.forEach(rate => {
        rate.classList.remove('selected')

    });
    e.target.classList.add('selected')
    displayRating.textContent = e.target.textContent
    isRateSelected = true
}

const onSubmit = () => {
    isRateSelected ? summary.style.display = 'flex' : ''
}



rates.forEach(rate => rate.addEventListener('click', onRateSelect))
submitBtn.addEventListener('click', onSubmit)