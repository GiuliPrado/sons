function tocaSomPom(){
    document.querySelector("#tecla tecla_pom")
}
document.querySelector("#som_tecla_pom").play();
const listaDeTeclas=document.querySelectorAll('.tecla');
listaDeTeclas[0].onclick=tocaSomPom;

function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}



let contador = 0;
while (contador < listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+ efeito;
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;
    console.log(contador);
}