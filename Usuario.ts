import {Mensagem} from "./Mensagem";
import {WhatsApp} from "./WhatsApp";

export class Usuario{
    private idUsu: string;
    private chat: Array<Mensagem>;

    public constructor(idUsu: string, chat: Array<Mensagem>){
        this.idUsu = idUsu;
        this.chat = chat;
    }

    public getIdUsu(): string{
        return this.idUsu;
    }

    public setIdUsu(idUsu: string): void{
        this.idUsu = idUsu;
    }

    public getChat(): Array<Mensagem>{
        return this.chat;
    }

    public setChat(chat: Array<Mensagem>): void{
        this.chat = chat;
    }

    public buscarUsu(idUsu: string) : Usuario|undefined{ // BUSCAR USUARIO
        for(let i of this.usus){
            if( i.getIdUsu() == idUsu){ // Se achar algum usuario com o mesmo nome passado ele será retornado.
                return i;
            }
        }
        return undefined; // se nao encontrar vai retornar isso
    }
}

