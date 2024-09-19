import { Duvidas } from "../../Controller/duvidas";
import {  OrganizarDuvidasFalse, OrganizarDuvidasTotal } from "../duvidasOrganizer";
import { listaDuvidas, usuarioAtual } from "./menu";
let rl = require('readline-sync')
let menu = true

export function menuDuvidas(){
while(menu){
    console.log
    (`
        -1 Fazer uma duvida.
        -2 Responder duvidas.
        -3 Ver duvidas.
        -4 Minhas duvidas.
        
        -6 Deletar duvida.
        -0 Voltar.
    `)
    let resposta = rl.questionInt("Resposta: ")
    switch(resposta){
        case 1:
            let novaDuvida = rl.question("Insira a sua duvida: ")
            listaDuvidas.push(new Duvidas(0,novaDuvida))
            usuarioAtual.duvidas.push(listaDuvidas.length - 1)
            break;
        case 2:
            let IndiceDuvida = rl.questionInt("Insira o ID da duvida: ")    
            console.log(OrganizarDuvidasFalse());
           listaDuvidas.forEach((valor) => {
           if(valor.id_duvidas == IndiceDuvida){
                console.log(valor.pergunta)
                 console.log("INSIRA CANCELAR PARA RETORNAR.")
                let NovaResposta = rl.question("Insira sua resposta: ")
                NovaResposta = NovaResposta.toLowerCase()
                if(NovaResposta !== 'cancelar'){
                valor.resposta = NovaResposta;
                valor.respondido = true;}
           }
           });
        break;
        case 3:
            console.log(OrganizarDuvidasTotal())
        break;
        case 4:
         for(let i = 0; i < usuarioAtual.duvidas.length; i++){
                console.log(`${usuarioAtual.duvidas[i].id_duvidas} - ${usuarioAtual.duvidas[i]} `)
            }
            break
        case 6:
            for(let i = 0; i < usuarioAtual.duvidas.length; i++){
                console.log(`${usuarioAtual.duvidas[i].id_duvidas} - ${usuarioAtual.duvidas[i]} `)
            }

            let escolhido = rl.questionInt("Insira o ID: ")
            for(let i = 0; i < usuarioAtual.Duvidas.length - 1; i++){
                if(usuarioAtual.duvidas[i].id_duvidas == escolhido){
                    usuarioAtual.duvidas.splice(i,1);
                }}
            break
        
        case 0:
            console.log("Retornando...")
            menu = false;
            break;

        default:
            console.log("Resposta não encontrada...")
        break;
    }
}}