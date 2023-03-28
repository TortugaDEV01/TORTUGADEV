/* Mouse position */
const cube = document.getElementsByClassName('cube')[0];
document.addEventListener('mousemove', function (event) {
    var x = event.clientX * 0.5;
    var y = event.clientY * 0.5;

    console.log(`X: ${x}, Y: ${y}`)

    cube.style.transform = ` rotateY(${x}deg) rotateX(${y}deg)`;
});