import { Categoria } from "./categorias"
import { Comentarios } from "./comentarios"

let rl = require('readline-sync')

//Cria a classe "Artigos"
export class Artigos {
    public id_artigo: number
    public titulo: string
    public conteudo: string
    public data_publicacao: Date
    public categoria: string
    public minhaCategoria: Categoria
    public comentario: Comentarios[]
    constructor(titulo: string, conteudo: string, data_publicacao: Date, categoria:
        string) {
        this.titulo = titulo
        this.conteudo = conteudo
        this.data_publicacao = data_publicacao
        this.categoria = categoria
    }

    //Insere os atributos da classe
    setArtigo(): void {
        let novoTitulo = rl.question('Digite o novo titulo do artigo: ') //Inserir título
        let novoConteudo = rl.question('Digite o novo conteudo do artigo: ') //Inserir conteúdo
        let novaDataPublicacao = rl.question('Digite a nova data de publicacao do artigo: ') //Inserir a data de publicação
        let novaCategoria = rl.question('Digite a nova categoria do artigo: ') //Inserir a categoria
        this.titulo = novoTitulo
        this.conteudo = novoConteudo
        this.data_publicacao = novaDataPublicacao
        this.categoria = novaCategoria
    }

    //Mostra os atributos da classe
    getArtigo(): void {
        console.log(`${this.titulo.toUpperCase} \n Sobre: ${this.conteudo} \n Data de Publicação: ${this.data_publicacao} \n Categoria: ${this.categoria}`)
    }
}




