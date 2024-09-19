import { testeMenuArtigo, testeMenuArtigo2 } from "../../../Tests/TesteArtigo";
import { Categoria } from "../../Controller/categorias";

let rl = require('readline-sync')



export function menuArtigo(categoria1: Categoria) {
    let menuPr = true;
    while (menuPr) {
      console.log(`
      ----------------
     MENU ${categoria1.nomeCategoria}
      ---------------
      -1 publicar Artigo.
      -0 Sair.
      ${testeMenuArtigo(categoria1)}
        `);
      let escolha = rl.questionInt("Resposta: ");
      testeMenuArtigo2(categoria1);
    }
  }