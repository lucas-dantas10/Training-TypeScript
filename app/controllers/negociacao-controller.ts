import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData;
    private inputQuantidade;
    private inputValue;

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
    }

    adiciona() {
        const negociacao = new Negociacao(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValue.value
        );
    }
}