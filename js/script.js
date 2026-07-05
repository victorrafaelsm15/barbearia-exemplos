const whatsappButtons = [
"headerWhatsapp",
"heroWhatsapp",
"aboutWhatsapp",
"contactWhatsapp",
"finalWhatsapp",
"floatingWhatsapp"
];

function criarLinkWhatsapp(mensagem){
const texto = encodeURIComponent(mensagem);
return `https://wa.me/${empresa.telefone}?text=${texto}`;
}

function aplicarDadosEmpresa(){
document.title = `${empresa.nome} | Cortes Masculinos e Barba`;

document.querySelectorAll("span, h1, h2, h3, p").forEach(el=>{
if(el.textContent.includes("Barbearia XXXX")){
el.textContent = el.textContent.replace("Barbearia XXXX", empresa.nome);
}
});

document.getElementById("endereco").textContent = empresa.endereco;
document.getElementById("horario").textContent = empresa.horario;

document.getElementById("instagramLink").href = empresa.instagram;
document.getElementById("instagramLink").textContent = empresa.instagramUsuario;

document.getElementById("googleMaps").src = empresa.maps;
document.getElementById("footerEmpresa").textContent = empresa.nome;

whatsappButtons.forEach(id=>{
const botao = document.getElementById(id);
if(botao){
botao.href = criarLinkWhatsapp(`Olá! Vim pelo site da ${empresa.nome} e gostaria de saber mais informações.`);
}
});
}

function carregarServicos(){
const grid = document.getElementById("servicesGrid");

servicos.forEach(servico=>{
const card = document.createElement("div");
card.className = "service-card";

card.innerHTML = `
<h3>${servico.nome}</h3>
<p>${servico.descricao}</p>
<div class="service-price">${servico.preco}</div>
`;

grid.appendChild(card);
});
}
function carregarBarbeiros(){
if(barbeiros[0]){
document.getElementById("barbeiro1Nome").textContent = barbeiros[0].nome;
document.getElementById("barbeiro1Descricao").textContent = barbeiros[0].descricao;
}

if(barbeiros[1]){
document.getElementById("barbeiro2Nome").textContent = barbeiros[1].nome;
document.getElementById("barbeiro2Descricao").textContent = barbeiros[1].descricao;
}
}

function menuMobile(){
const button = document.getElementById("menuButton");
const menu = document.querySelector(".menu");

button.addEventListener("click", ()=>{
menu.classList.toggle("active");
});
}

function animarElementos(){
const elementos = document.querySelectorAll(
".service-card,.gallery-item,.team-card,.why-card,.about-text,.about-images,.contact-info,.map-area"
);

const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
}
});
},{threshold:.15});

elementos.forEach(el=>{
el.classList.add("hidden");
observer.observe(el);
});
}

document.addEventListener("DOMContentLoaded", ()=>{
aplicarDadosEmpresa();
carregarServicos();
carregarBarbeiros();
menuMobile();
animarElementos();
});
