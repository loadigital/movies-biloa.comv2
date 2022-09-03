
const btm = document.getElementById("boton-menu");
btm.addEventListener("click", () =>{
    document.querySelector(".co-header").style.left="0";
    document.querySelector(".bi-x").style.display="block";
    document.querySelector(".bi-list").style.display="none";
})
function cerrarx(){
    document.querySelector(".co-header").style.left="-100%";
    document.querySelector(".bi-x").style.display="none";
    document.querySelector(".bi-list").style.display="block";
}


const positionCero = document.getElementById("bi-search");
positionCero.addEventListener("click", function (){
    document.getElementById("contenedor-inp").style.right="0";
})
const positionCero1 = document.getElementById("bi-search-1");
positionCero1.addEventListener("click", function (){
    document.getElementById("contenedor-inp").style.right="0";
})

const positionAtras = document.getElementById("atras-inp");
positionAtras.addEventListener("click", function (){
    document.getElementById("contenedor-inp").style.right="-100%";
})

//const borraInp = document.getElementById("borrar-inp");
//borraInp.addEventListener("click", function (){
    //document.getElementById("inp").value = "";
//})

const fragment = document.createDocumentFragment();
const moviesIndexx = document.getElementById("movies-index-buscador");
const tem_buscador = document.getElementById("tem-buscador").content;
document.addEventListener('DOMContentLoaded', () => {
    fetchBusc();
});
const fetchBusc = async () => {
    try{
        const res = await fetch('https://loadigital.github.io/movies-biloa.comv2/js/api.json');
        const data = await res.json();
        movieIndexx(data);
    }catch (error) {
        console.log(error);
    };
};
const movieIndexx = data => {
    data.forEach(movie => {
        tem_buscador.querySelector('img').src = movie.urlImg;
        tem_buscador.querySelector('h5').textContent = movie.title;
        tem_buscador.querySelector('a').href = movie.linkVideo;
        const clone = tem_buscador.cloneNode(true); 
        fragment.appendChild(clone); 
        moviesIndexx.appendChild(fragment); 
    }); 
};


$(document).ready(function(){
    $("#inp").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".movies-index-buscador .movies-buscador").filter(function() {    
    $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    });
