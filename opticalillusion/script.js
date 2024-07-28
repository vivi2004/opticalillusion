 const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = '#'
    for( let i =0; i<6;i++){
      color+=  hex[Math.floor(Math.random() *16) ];
    }
    return color;
 };


 let interValid = null;


 const startColorChange =   function() {
    interValid= setInterval( changeColors ,200)
 }

 const stopColorChange = function() {
    clearInterval(interValid);
 }

 const changeColors = function() {
    const circles = document.querySelectorAll('.circle');
    circles.forEach(circle => {
      circle.style.borderColor = randomColor();
    });
  };
document.querySelector('#start').addEventListener('click', startColorChange )
document.querySelector('#stop').addEventListener('click',  stopColorChange )