import { Artigos } from "../src/Controller/Artigos";
import { Categoria } from "../src/Controller/categorias";
import { OrganizarComentarios } from "../src/Util/ComentOrganizer";
import { artigo, Financeiro, Historico, Pessoal, Profissional } from "../src/Util/Menus/menu";
let rl = require('readline-sync');

export function testeMenuArtigo(categoria1: Categoria): string{
    let argumento = ''
    let tipo = categoria1.nomeCategoria
    categoria1.artigos1.forEach((valorAtual) => {        
        argumento += '- ',valorAtual.id_artigo, ' ', valorAtual.titulo, '\n';
    })
    return argumento;
}


    export function testeMenuArtigo2(categoria1:Categoria): void{
    let escolhaP = rl.questionInt("Resposta: ")
    switch(escolhaP){
        case 1:
        break;

        case 0:
            console.log('Retornando...')
        break;
        default:
            console.error("Error")
      }
    categoria1.artigos1.forEach((valorAtual) =>{
        if(escolhaP == valorAtual.id_artigo){
            Historico.push(valorAtual)
            console.log(valorAtual.titulo)
            console.log(valorAtual.conteudo)
            console.log
            (`
                Comentarios:
                ------------
                ${OrganizarComentarios(categoria1)}
            `)
        }
    })
    ;
}
