import { ano, date, dia, mes } from "../Util/Menus/menu";
import { Artigos } from "./Artigos";
import { Usuario } from "./Usuario";
let rl = require("readline-sync");

//Cria a classe "Comentários"
export class Comentarios {
  public id_comentario: number;
  public conteudo: string;
  public data_comentario: Date;
  public meuUsuario: Usuario;
  public historicoComentarios: Array<string> = [];

  constructor(
    id_comentario: number,
    conteudo: string,
    data_comentario: Date,
    meuUsuario: Usuario,
    meuArtigo: Artigos
  ) {
    this.id_comentario = id_comentario;
    this.conteudo = conteudo;
    this.data_comentario = data_comentario;
    this.meuUsuario = meuUsuario;
    this.data_comentario = date;
  }

  //Insere os atributos
  setComentarios(): void {
    let novoConteudo = rl.question("Digite o novo conteudo do comentario: "); //Inserir o conteúdo
    this.conteudo = novoConteudo;
  }

  //Mostra os atributos da classe
  getComentarios(artigo: Artigos): void {
    console.log(
      `ID: ${this.id_comentario}\nConteúdo: ${this.conteudo}\nData: ${this.data_comentario}\nUsuário: ${this.meuUsuario.nome}\nArtigo: ${artigo.titulo} `);
  }

  //Faz um comentário
  adicionarComentario(): void {
    let addComentario = rl.question("Adicione seu comentario: ");
    this.historicoComentarios.push(addComentario); //Puxa os comentários de "addComentários" para a array "historicoComentarios"
  }
  //Remove um comentário
  removerComentario(comment: string): void {
    this.historicoComentarios.splice(
      this.historicoComentarios.indexOf(comment),
      1
    );
  }
}


