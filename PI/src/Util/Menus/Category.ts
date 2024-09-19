import { Artigos } from "../../Controller/Artigos";
import { Categoria } from "../../Controller/categorias";
import { menuArtigo } from "./MenuArtigos";
import { Financeiro, Pessoal, Profissional } from "./menu";

let rl = require("readline-sync");

export function category() {
  console.log(`
          1- Profissional.
          2- Financeiro.
          3- Pessoal.
          0- Voltar.
          `);
  let escolha3 = rl.questionInt("Resposta: ");
  switch (escolha3) {
    case 1:

     menuArtigo(Profissional);
      break;

    case 2:
      menuArtigo(Financeiro);
      break;

    case 3:
      menuArtigo(Pessoal);
      break;
    case 0:
      console.log("Voltando...");
      break;
    default:
      console.log("Opção não reconhecida.");
  }
}


//MENU DÚVIDAS

function DuvidaMenu() {
  let menuDu = true;
  while (menuDu) {
    console.log(`
  
  
          `);
    let escolha = rl.questionInt("Resposta: ");
  }
}
function crescer(lista: Artigos[]) {
  let dialogo = "";
  lista.forEach((valor, endice) => {
    (dialogo += endice + 1), "- ", valor.titulo;
  });
  console.log(dialogo);
  return dialogo;
}