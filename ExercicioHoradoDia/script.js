function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    // var hora = 8   
    // var minuto = 30
    var hora = data.getHours() 
    var minuto = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora}h${minuto}.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#F5DEB3'
        
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'fototarde.jpg'
        document.body.style.background = '#5F9EA0'
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#8A2BE2'
    }
}
