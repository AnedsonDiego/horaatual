var horaatual = document.getElementById('hora-atual')
var img = document.getElementById('imagem')
var corfundo = document.getElementById('fundo')
var hora = new Date
var agora = hora.getHours()

horaatual.textContent = `Agora são ${agora} Horas`

if (agora >= '01' && agora <= '12'){
corfundo.style.backgroundColor = '#ff6600'
img.src = "img/sol01.jpg"
} else if(agora >= '13'&& agora <= '17'){
corfundo.style.backgroundColor = '#a54d13'
img.src = "img/img5.jpg"
} else if(agora >= '18'&& agora <= '24'){
corfundo.style.backgroundColor = '#33271e'
img.src = "img/lua01.jpg"
}