const botao = document.getElementById("meuBotao");
const formulario = document.getElementById("formulario");
const mascaraForm = document.querySelector(".mascara-form");

function mostrarForm() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascaraForm.style.visibility = "visible";

}

function esconderForm() {
    formulario.style.left = "-260px";
    formulario.style.transform = "translateX(0)";
    mascaraForm.style.visibility = "hidden";

}   

function chamarForm() {   
    mostrarForm();
}





