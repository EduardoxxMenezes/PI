import { listaDuvidas } from "./Menus/menu";

export function OrganizarDuvidasTotal(): string{  
    let dialogo = ''
    listaDuvidas.forEach((valorAtual) => {
        if(valorAtual.respondido == true){
        dialogo +=  valorAtual.id_duvidas, ': ', valorAtual.pergunta, ' respondido!'}
        else{
            dialogo +=  valorAtual.id_duvidas, ': ', valorAtual.pergunta, ' Não respondido.'}
    })
    return dialogo;
}

export function OrganizarDuvidasFalse(): string{  
    let dialogo = ''
    listaDuvidas.forEach((valorAtual) => {
        if(valorAtual.respondido == false){
        dialogo +=  valorAtual.id_duvidas, ': ', valorAtual.pergunta, ' não respondido.'}
        })
    return dialogo;
}