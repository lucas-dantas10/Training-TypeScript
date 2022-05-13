import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", evento => {
        evento.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error("Não foi possivel inicializar a aplicação. Verifique se o form existe");
}
