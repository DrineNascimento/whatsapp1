import {Usuario} from "./Usuario";
import {Chat} from "./Chat";
import { Mensagem } from "./Mensagem";

export class WhatsApp{
    private chats: Array<Chat>;
    private usus: Array<Usuario>;

    constructor(){
        this.chats = new Array<Chat>();
        this.usus = new Array<Usuario>();
    }

    public buscarUsu(idUsu: string) : Usuario|undefined{ // BUSCAR USUARIO
        for(let i of this.usus){
            if( i.getIdUsu() == idUsu){ // Se achar algum usuario com o mesmo nome passado ele será retornado.
                return i;
            }
        }
        return undefined; // se nao encontrar vai retornar isso
    }

    public buscarChat(idChat: string): Chat | undefined{ // BUSCAR CHAT
        for(let i of this.chats){
            if(i.getIdChat() == idChat){
                return i;
            }
        }
        return undefined;
    }

    public addChat(idChat: string, idUsu: string){   //ADICIONAR NOVO CHAT
        let novoChat : Chat = new Chat(idChat, [], []); //Criar novo chat
        let usu = this.getUsus(idUsu); // Identificando usuario que cria o chat
        this.chats.push(novoChat); // adicionando o chat ao Array<Chat> 
    }

    public addUsuChat(admin: string, idUsu: string, idChat: string): number{ // ADICIONAR NOVO USUARIO ------ TA FALTANDO ADD GRUPO AO USUARIO
        let a : Usuario = this.buscarUsu(admin);
        let i : Usuario = this.buscarUsu(idUsu);
        let g : Chat = this.buscarChat(idChat);

        if(a == undefined){ // ADMIN NAO EXISTE
            return 1; 
        } else if(a == undefined){
            return;
        }

        else if(i == undefined){ // USUARIO NAO EXISTE
            return 2;
        } else if(i == undefined){
            return;
        }

        if(g == undefined){ // GRUPO NAO EXISTE
            return 3; 
        } else if(g == undefined){
            return;
        }
        
        else if(a.buscarUsu(idUsu) == undefined){ // ADMIN NAO ESTÁ NO GRUPO
            return 4;
        } else if( a.buscarUsu(idUsu) != undefined){
            return;
        }

        if(i.buscarUsu(idUsu) == undefined){ // USUARIO JA ESTA NO CHAT
            return 3; 
        } else if(i.buscarUsu(idUsu) != undefined){
            return;
        }
        
        else { // USUARIO INSERIDO COM SUCESSO
            g.getIdChat().push(new Usuario(idUsu, [])); // adicionar usuario a lista do chat
            i.getIdUsu().push(g); // adicionar grupo a lista de chats do usuario
            return 0;
        }
    } 

    public enviarMensagem(idUsu: string, idChat: string): number{ // ENVIAR MENSAGEM NO GRUPO
        let i : Usuario = this.buscarUsu(idUsu);
        let g : Chat = this.buscarChat(idChat);

        if(i == undefined){ // USUARIO NAO EXISTE
            return 2;
        } else if(i == undefined){
            return ;
        }

        if(g == undefined){ // GRUPO NAO EXISTE
            return 3; 
        } else if(g == undefined){
            return;
        }
        
        if(i.buscarUsu(idUsu) == undefined){ // USUARIO JA ESTA NO CHAT
            return 4; 
        } else if(i.buscarUsu(idUsu) != undefined){
            return;
        }

        else { // MENSAGEM ENVIADA COM SUCESSO
            g.getMensagem().push(new Mensagem(idUsu, '')); // mensagem enviada no chat
            return 0; 
        }
    }

    public buscarMsgNovas(idUsu: string, idChat : string){ //  REVISAAAAAAAR ----- Mesmo jeito que as de cimas, descobrir se o usuario e o grupo ja existe. ----- Ao inves de return usaremos console.log com texto explicativo
        let i : Usuario = this.buscarUsu(idUsu);
        let g : Chat = this.buscarChat(idChat);
        let res: Mensagem[] = [];

        if(i == undefined){
            console.log("Pessoa não existe");
        } else if(g == undefined){
            console.log("Grupo não existe");
        } else if(g.buscarUsu(idUsu) == undefined){
            console.log("Esta pessoa não está no grupo");
        }else{
            for(let m of g.getMensagem()){
                if(m.buscarLeitor(idUsu)== undefined){
                    res.push(m);
                    m.getLeitores().push(m);
                }
            }
        }
        return res;

    } 
    
    
    // mostrarMsgUsus()


    public mostrarUsusChat(idUsu: string): Usuario|undefined{ // MOSTRAR USUARIOS DO CHAT
        let resposta: Array<Usuario> = [];// O QUE ESTÁ SENDO MOSTRADO AO USUARIO

        for(let i of this.usus){ // Percorrendo os indices do Array<Usus>
            if(i.buscarUsu(idUsu) != undefined){
                resposta.push(i); //Mostrando os usuarios ao usuario
            }else{
                return undefined;
            }
        }
        console.log(resposta);  //Mostrando ao usuario os chats dele

    }

    public getUsus(idUsu: string): Usuario{
        for(let i of this.usus){
            if( i.getIdUsu() == idUsu){
                return i;
            }
        }

        return undefined;
    }

    public getChats(idChat: string): Chat{
        for(let i of this.chats){
            if( i.getIdChat() == idChat){
                return i;
            }
        }

        return undefined;
    }
}
