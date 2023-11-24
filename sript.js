function carregar () {
var msg = window.document.getElementById ('msg')
var foto = window.document.getElementById ('imagem')
var data = new Date()
//var hora = data.getHours()
var hora  = 20
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12) {
    //bom dia
    foto.src = 'manha.png'
    document.body.style.background = "#cad3bd"
} else if (hora >= 12 && hora <= 18){
   //boa tarde 
   foto.src = 'tarde.png'
   document.body.style.background ='#cb9675'
} else{
    //boa noite
    foto.src = 'noite.png'
    document.body.style.background = '#000000'
}

}
