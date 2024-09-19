import { Categoria } from "../Controller/categorias";
import { Usuario   } from "../Controller/Usuario";
import { ano, date, dia, mes } from "./Menus/menu";

export function OrganizarComentarios(lista: Categoria){
    lista.artigos1.forEach((valorAtual) =>{
       valorAtual.comentario.forEach((valorAtual2) => {
         console.log(valorAtual2.meuUsuario)
         console.log("------------------")
         console.log(valorAtual2.conteudo)
         console.log("------------------")
         console.log(valorAtual2.data_comentario)
       });
    })
}