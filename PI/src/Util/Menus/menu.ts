import { Artigos } from "../../Controller/Artigos";
import { Usuario } from "../../Controller/Usuario";
import { Duvidas } from "../../Controller/duvidas";
import { Categoria } from "../../Controller/categorias";
import { Comentarios } from "../../Controller/comentarios";
import { userInfo } from "os";


export let rl = require("readline-sync");
export let date = new Date()
export let dia =  date.getDate()
export let mes = String(date.getMonth() + 1).padStart(2,'0')
export let ano = date.getFullYear()
export let menu = true;
export let User: Usuario[] = [];
export let usuarioAtual;
export let artigo: Artigos = new Artigos('','',date,'')
export let Financeiro: Categoria = new Categoria(1,'Financeiro');
export let Profissional: Categoria = new Categoria(2,'Profissional');
export let Pessoal: Categoria = new Categoria(3,'Pessoal');
export let listaDuvidas: Duvidas[] = []
export let Historico: Artigos[] = []

//MENU DE ACESSO


while (menu) {
  console.log(`
    ~~~~~~~~~~~~~~~~
    1 - Cadastrar-se
    2 - Login
    3 - Fechar Menu
    ~~~~~~~~~~~~~~~~
    `);

  let escolha = rl.questionInt("Resposta: ");
  
  switch (escolha) {
    case 1:
      let NovoNome = rl.question("Insira seu Nome: ");
      let NovaData = rl.question("Insira sua data de Nascimento");
      let NovaIdade = 2024 - NovaData;
      let NovaSenha = rl.question("Insira uma Senha: ");
      let NovoEmail = rl.question("Insira seu E-Mail: ");

      User.push(new Usuario(NovoNome, NovaIdade, NovaSenha, NovoEmail));
      usuarioAtual = User[User.length - 1]
       usuarioAtual.userMenu();
      break;

    case 2:
      let emailInserido = rl.question("Insira seu E-Mail: ")
      let senhaInserida = rl.question("Insira sua senha: ")
    if (emailInserido === NovoEmail && senhaInserida == NovaSenha){
        usuarioAtual = User[User.length - 1];
      usuarioAtual.userMenu()
    }
      break;

    case 0:
      menu = false;
      console.log("Fechando...");
      break;

    default:
      console.log("Insira um número válido");
      break;
  }
}



