function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = ` Agora são ${hora} hora(s)`

    if (hora =>0 && hora < 12) {
        //BOM DIA
        img.src = 'manha.png'
    }else if (hora=>12 && hora <18){
        //BOA TARDE
        img.src = 'tarde.png'
    }else{
        //BOA NOITE
        img.src = 'noite.png'
        //img.innerHTML = '<img src="noite.png">'
        //imagem.innerHTML = '<img src="noite.jpg">' 
    }
}