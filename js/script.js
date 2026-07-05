const botoesWhatsapp=[
"headerWhatsapp",
"heroWhatsapp",
"aboutWhatsapp",
"contactWhatsapp",
"finalWhatsapp",
"floatingWhatsapp"
];

function linkWhatsapp(msg){
return `https://wa.me/${empresa.telefone}?text=${encodeURIComponent(msg)}`;
}

function carregarEmpresa(){

document.title=`${empresa.nome} | Cortes Masculinos e Barba`;

document.querySelectorAll(".empresa-nome,#footerEmpresa").forEach(el=>{
el.textContent=empresa.nome;
});

document.getElementById("endereco").textContent=empresa.endereco;

document.getElementById("horario").textContent=empresa.horario;

document.getElementById("instagramLink").href=empresa.instagram;

document.getElementById("instagramLink").textContent=empresa.instagramUsuario;

document.getElementById("googleMaps").src=empresa.maps;

botoesWhatsapp.forEach(id=>{

const botao=document.getElementById(id);

if(botao){

botao.href=linkWhatsapp(`Olá! Vim pelo site da ${empresa.nome} e gostaria de mais informações.`);

}

});

}
function carregarServicos(){

const grid=document.getElementById("servicesGrid");

servicos.forEach(servico=>{

grid.innerHTML+=`

<div class="service-card">

<h3>${servico.nome}</h3>

<p>${servico.descricao}</p>

<div class="service-price">${servico.preco}</div>

</div>

`;

});

}
function carregarBarbeiros(){

document.getElementById("barbeiro1Nome").textContent=barbeiros[0].nome;

document.getElementById("barbeiro1Bio").textContent=barbeiros[0].bio;

document.getElementById("barbeiro2Nome").textContent=barbeiros[1].nome;

document.getElementById("barbeiro2Bio").textContent=barbeiros[1].bio;

}
function menuMobile(){

const menu=document.getElementById("nav");

const botao=document.getElementById("menuBtn");

botao.addEventListener("click",()=>{

menu.classList.toggle("active");

});

}
function animacoes(){

const itens=document.querySelectorAll(

".service-card,.barber-card,.gallery-item,.why-card,.about-text,.about-images,.contact-info,.map-box"

);

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

itens.forEach(item=>{

item.classList.add("hidden");

observer.observe(item);

});

}
function galeria(){

const imagens=document.querySelectorAll(".gallery-item");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightboxImg");

imagens.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImg.src=img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

}

document.addEventListener("DOMContentLoaded",()=>{

carregarEmpresa();

carregarServicos();

carregarBarbeiros();

menuMobile();

animacoes();

galeria();

});
