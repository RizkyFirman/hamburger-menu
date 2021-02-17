const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const menu = document.getElementById('menu-container');

openBtn.addEventListener('click', function () {
    menu.style.transform = 'translateX(0)';
    closeBtn.style.display = 'block';
    openBtn.style.display = 'none';
});

closeBtn.addEventListener('click', function () {
    menu.style.transform = 'translateX(100%)';
    closeBtn.style.display = 'none';
    openBtn.style.display = 'block';
});

