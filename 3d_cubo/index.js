const rangeX = document.getElementById('rangeX');
const rangeY = document.getElementById('rangeY');
const cube = document.querySelector('.cube');

x = 0;
y = 0;

rangeX.addEventListener('input', (e) => {
    y = e.target.value;
    cube.style.transform = `rotateY(${y}deg) rotateX(${x}deg)`;
});

rangeY.addEventListener('input', (e) => {
    x = e.target.value;
    cube.style.transform = `rotateY(${y}deg) rotateX(${x}deg`;
});