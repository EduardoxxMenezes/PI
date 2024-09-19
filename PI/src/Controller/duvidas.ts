let rl = require("readline-sync");


//Cria a classe "Dúvidas"
export class Duvidas {
  public id_duvidas: Number;
  public pergunta: string;
  public resposta: string;
  public respondido: boolean;

  constructor(id_duvidas: number, pergunta: string) {
    this.id_duvidas = id_duvidas;
    this.pergunta = pergunta;
    this.respondido = false;
  }

  //Mostrar os atributos
  getDuvida(): void {

    //Caso a pergunta ainda não tenha sido respondida, aparecerá uma mensagem avisando
    if (this.respondido == false) {
      console.log(
        `Pergunta: ${this.pergunta}\nResposta: ${this.resposta}\na pergunta não foi respondida ainda...`
      );

      //Caso a pergunta tenha sido respondida, aparecerá a seguinte mensagem:
    } else {
      console.log(
        `Pergunta: ${this.pergunta}\nResposta: ${this.resposta}\nA pergunta já foi respondida.`
      );
    }
  }

  //Inserir os atributos da classe
  setDuvida(): void {
    let novaPergunta = rl.question("Digite a nova pergunta: ");
  }

  //Método para responder as dúvidas feitas
  respostas(): void {
    let resposta2 = rl.question("Sua resposta: "); //Inserir resposta
    this.resposta == resposta2;
    this.respondido = true;

    //Ao responder, avisará que a pergunta já foi respondida:
    console.log("A pergunta foi respondida.");
  }
}
let duvidaFeita = new Duvidas(0, "");


