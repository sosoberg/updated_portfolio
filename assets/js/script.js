var mainPage = document.querySelector('.main');
var contactModal = document.querySelector('.contactModal');
var resumeModal = document.querySelector('.resumeModal');
var projectModal = document.querySelector('.projectModal');
var closeBtn = document.querySelectorAll('#closeBtn');

for (var i = 0; i < closeBtn.length; i++) {
    console.log(closeBtn[i])
};

document.querySelector('#contactBtn').addEventListener('click', function() {
    mainPage.style.display = 'none';
    resumeModal.style.display = 'none';
    projectModal.style.display = 'none';
    contactModal.style.display = 'block';
});

document.querySelector('#projectBtn').addEventListener('click', function() {
    mainPage.style.display = 'none';
    resumeModal.style.display = 'none';
    contactModal.style.display = 'none';
    projectModal.style.display = 'block';
});

document.querySelector('#resumeBtn').addEventListener('click', function() {
    mainPage.style.display = 'none';
    contactModal.style.display = 'none';
    projectModal.style.display = 'none';
    resumeModal.style.display = 'block';
});

closeBtn[0].addEventListener('click', function () {
    resumeModal.style.display = 'none';
    contactModal.style.display = 'none';
    projectModal.style.display = 'none';
    mainPage.style.display = 'grid';
});
closeBtn[1].addEventListener('click', function () {
    resumeModal.style.display = 'none';
    contactModal.style.display = 'none';
    projectModal.style.display = 'none';
    mainPage.style.display = 'grid';
});
closeBtn[2].addEventListener('click', function () {
    resumeModal.style.display = 'none';
    contactModal.style.display = 'none';
    projectModal.style.display = 'none';
    mainPage.style.display = 'grid';
});
closeBtn[3].addEventListener('click', function () {
    resumeModal.style.display = 'none';
    contactModal.style.display = 'none';
    projectModal.style.display = 'none';
    mainPage.style.display = 'grid';
});

