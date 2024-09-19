import { Categoria } from "./categorias";
import { Duvidas } from "./duvidas";
import { Artigos } from "./Artigos";

let rl = require("readline-sync");


//Cria a classe "Usuário"
export class Usuario {
  public id_usuario: Number;
  public nome: string;
  public idade: Number;
  private senha: string;
  public eMail: string;
  public duvidas: Duvidas[];
  public comentarDuvidas: string[] = [];
  constructor(nome: string, idade: Number, senha: string, eMail: string) {
    this.nome = nome;
    this.idade = idade;
    this.senha = senha;
    this.eMail = eMail;
  }

  //Mostra os atributos
  getUsuario(): void {
    console.log(
      `Nome do usuario: ${this.nome}\nEmail do usuário: ${this.eMail}`
    );
  }

  //Insere os atributos da classe
  setUsuario(): void {
    let novoNome = rl.question("Insira o nome do Novo usuario: "); //Inserir Nome
    let novaIdade = rl.questions("Insira a idade do Novo usuario: "); //Inserir Idade
    let novaSenha = rl.question("Insira a senha do Novo usuario: "); //Inserir Senha
    let novoEmail = rl.question("Insira o email do Novo usuario: ");//Inserir Email
    this.nome = novoNome;
    this.idade = novaIdade;
    this.senha = novaSenha;
    this.eMail = novoEmail;
  }

  //Fazer uma dúvida
  postarDuvida(duvidas: string): void {
    let duvida = rl.question("Insira sua duvida: ");
    console.log(duvida); //Mostra a dúvida
    this.comentarDuvidas.push(duvidas); //Puxa as dúvidas para a array "comentarDuvidas"
  }

  //MENU USUÁRIO
  userMenu(): void {}
}

let novoUser = new Usuario("", 0, "", "");


