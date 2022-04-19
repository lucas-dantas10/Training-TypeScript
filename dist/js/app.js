import { Negociacao } from "./models/negociacao.js";
const negociacao = new Negociacao(new Date(), 10, 10);
console.log(negociacao.volume);
