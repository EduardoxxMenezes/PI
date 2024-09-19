import { Artigos } from "../../Controller/Artigos";
import { category } from "./Category";
import { Historico, usuarioAtual } from "./menu";
import { menuDuvidas } from "./menuDuvidas";

let rl = require('readline-sync')

export function menUser(){

let menuUs = true;
while (menuUs) {
  console.log(`
    ~~~~~~~~~~~~~~~~~~
    1 - Categorias
    2 - Editar Conta.
    3 - Ver Conta.
    4 - Dúvidas.
    5 - Histórico de artigos 
    0 - Log Out.
    ~~~~~~~~~~~~~~~~~~
    `);

  let decisao2 = rl.questionInt("Resposta: ");

  switch (decisao2) {
    case 1:
     category();
      break;
    case 2:
        usuarioAtual.setUser()

      break;
    case 3:
       usuarioAtual.getUsuario()
    
      break;
    case 4:
      menuDuvidas()
      break;
    case 5:
      for(let i = 0; i < Historico.length; i++){
        console.log(`${i++}- ${Historico[i].titulo} \n`)
      }
      break;
    case 0:
      menuUs = false;
      console.log("Fechando...");
      break;
    default:

      console.log(`Erro`);
      break;
  }
}}