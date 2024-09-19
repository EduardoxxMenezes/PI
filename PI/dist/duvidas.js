"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Duvidas = void 0;
var rl = require('readline-sync');
var Duvidas = /** @class */ (function () {
    function Duvidas(id_duvidas, pergunta) {
        this.id_duvidas = id_duvidas;
        this.pergunta = pergunta;
        this.Respondido = false;
    }
    Duvidas.prototype.getDuvida = function () {
        console.log("ID: ".concat(this.id_duvidas, "\n").concat(this.pergunta, "\nResposta: ").concat(this.resposta));
    };
    Duvidas.prototype.setDuvida = function () {
        var novoid = rl.questionInt("Insira o novo ID: ");
        var novaPergunta = rl.question('Digite a nova pergunta: ');
    };
    Duvidas.prototype.excluirDuvida = function () {
        this.id_duvidas = 0;
        this.pergunta = '';
        console.log("Dúvida excluída.");
    };
    Duvidas.prototype.resumoDuvida = function () {
        return this.pergunta.length > 50 ? this.pergunta.substring(0, 47) + "..." : this.pergunta;
    };
    return Duvidas;
}());
exports.Duvidas = Duvidas;
var duvidaFeita = new Duvidas(0, '');
duvidaFeita.setDuvida();
duvidaFeita.setDuvida();
duvidaFeita.excluirDuvida();
duvidaFeita.resumoDuvida();
