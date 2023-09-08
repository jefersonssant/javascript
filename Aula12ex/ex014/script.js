function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora <= 12) {
        img.src = 'imagens/manha.png'
        masg.innerHTML += '<p>Bom dia!</p>'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'imagens/tarde.png'
        window.document.body.style.background = '#e09e82'
        msg.innerHTML += '<p>Boa tarde!</p>'
    } else {
        img.src = 'imagens/noite.png'
        window.document.body.style.background = '#000b15'
        msg.innerHTML += '<p>Boa noite!</p>'
    }
}