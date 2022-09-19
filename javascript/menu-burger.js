const iconoMenu = document.querySelector("#icono-menu"),
        menu = document.querySelector("#menu");

iconoMenu.addEventListener('click', (e)=>{

    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

    const rutaActual = e.target.getAttribute('src');

    if(rutaActual == 'img/icon-burger-white.png'){
        e.target.setAttribute('src', 'img/icon-burger-white.png')
    }else{
        e.target.setAttribute('src', 'img/icon-burger-white.png')
    }
     
})