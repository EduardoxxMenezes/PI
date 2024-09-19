import { Artigos } from "./Artigos";
import { Usuario } from "./Usuario";

let rl = require("readline-sync");


//Cria a classe "Categoria"
export class Categoria {
  public id_categoria: number;
  public nomeCategoria: string;
  public artigos1: Artigos[];

  constructor(id_categoria: number, nomeCategoria: string) {
    this.id_categoria = id_categoria;
    this.nomeCategoria = nomeCategoria;
  }

  //Mostra os atributos
  getCategoria(): void {
    console.log(
      `ID: ${this.id_categoria}\nCategoria: ${this.nomeCategoria}\nContém: ${
        this.artigos1.length - 1
      } Artigos.`
    );
  }

  //Insere os atributos da classe
  setCategoria(): void {
    let novaCategoria = rl.question(
      "Digite o nome da categoria que desejas ver: "
    );
    this.nomeCategoria = novaCategoria;
  }

  //Método para adicionar um artigo
  adicionarArtigo(usuarios: Usuario): void {
    let tituloAdicionado = rl.question(`Titulo do artigo: `); //Inserir título
    let conteudoAdicionado = rl.question(`Conteúdo: `); //Inserir conteúdo
    let categoriaAdicionada = rl.question(`Categoria: `); //Inserir categoria
    let data_PublicacaoAdicionada = rl.questionInt(`Data de publicação: `); //Inserir data de publicação

    //Puxa as respostas para a array "artigos1"
    this.artigos1.push(
      new Artigos(
        tituloAdicionado,
        conteudoAdicionado,
        categoriaAdicionada,
        data_PublicacaoAdicionada
      )
    );
  }

  //Remover artigos
  removerArtigo(): void {
    
    let opcao = rl.questionInt("Escolha o indice do artigo: ")
    this.artigos1.splice(opcao,1);
    console.log("Artigo removido.")
    
   }


}



