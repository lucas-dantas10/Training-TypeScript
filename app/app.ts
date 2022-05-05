import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { Negociacoes } from "./models/negociacoes.js";

const controller = new NegociacaoController();
const form = document.querySelector(".form");
form.addEventListener("submit", evento => {
    evento.preventDefault();
    controller.adiciona();
})