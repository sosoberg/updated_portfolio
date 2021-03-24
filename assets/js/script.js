var mainPage = document.querySelector('.main');
var contactModal = document.querySelector('.contactModal');

document.querySelector('#contactBtn').addEventListener('click', function() {
    mainPage.style.display = 'none';
    contactModal.style.display = 'block'
})