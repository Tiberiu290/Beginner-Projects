const readMoreBtn = document.getElementById('read-more-btn');
const text = document.querySelector('.more-info')

readMoreBtn.addEventListener('click',(e) => {
    text.classList.toggle('show-more')
})