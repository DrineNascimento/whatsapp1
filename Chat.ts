import {Usuario} from "./Usuario";
import { Mensagem } from "./Mensagem";

export class Chat{
    private idChat: string;
    private usuarios: Array<Usuario>;
    private mensagem: Array<Mensagem>;

    public constructor(idChat: string, usuarios: Array<Usuario>, mensagem: Array<Mensagem>){
        this.idChat = idChat;
        this.usuarios = usuarios;
        this.mensagem = mensagem;
    }

    public getIdChat(): string{
        return this.idChat;
    }

    public setIdChat(idChat: string): void{
        this.idChat = idChat;
    }

    public getUsuarios(): Array<Usuario>{
        return this.usuarios;
    }

    public setUsuarios(usuarios: Array<Usuario>): void{
        this.usuarios = usuarios;
    }

    public getMensagem(): Array<Mensagem>{
        return this.mensagem;
    }

    public setMensagem(mensagem: Array<Mensagem>) : void{
        this.mensagem = mensagem;
    }
}
