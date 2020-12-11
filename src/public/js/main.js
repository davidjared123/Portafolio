
const typed = new Typed('.typed', {
    strings: ['Hola Mundo', 'Me llamo David'],
    typeSpeed: 75,
    startDelay: 300,
    loop: true,
    loopCount: false,
    backSpeed: 75,
})

function menu() {
    const label = document.querySelector('#check')
if(window.screen.width <= 1080){
    // console.log('funciona')
    if (label.checked) {
        // console.log('activo')
        document.querySelector('.nav-links').style.display = 'block';
    } else {
        // console.log('desactivado')
        document.querySelector('.nav-links').style.display = 'none';
    }
} else{
    // console.log('no funciona')
    document.querySelector('.nav-links').style.display = 'block';
}
    
}

menu()