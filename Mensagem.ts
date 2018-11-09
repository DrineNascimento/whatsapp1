import { Usuario } from "./Usuario";

export class Mensagem{
    public idUsuMsg: string;
    public mensagem: string;


    constructor(idUsuMsg: string, mensagem: string){
        this.idUsuMsg = idUsuMsg;
        this.mensagem = mensagem;

    }
    public enviarMensagem(): string{
        return "[ " + this.idUsuMsg + ": " + this.mensagem + " ]"; 
    }


}
