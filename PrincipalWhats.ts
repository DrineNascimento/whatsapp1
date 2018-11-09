import {Mensagem} from "./Mensagem";
import {Chat} from "./Chat";
import {Usuario} from "./Usuario";
import { WhatsApp } from "./WhatsApp";

declare function require(name:string);
var readline = require('readline-sync');

let login = null;

if(login == null){
    let inicio: string = readline.question("*******Bem vindo ao Whats App ******* \n ESCOLHA UMA OPÇÃO \n 1- Acessar conta \n 2- Cadastre-se \n 3- Sair "); //Identificando usuario logado
    
    if(inicio == "1"){ // ACESSAR CONTA
        let login: string = readline.question("Digite o seu id de usuário: ");
            if(this.buscarUsu(login)!= undefined){   // Se o idUsu existir é apresentado as opções disponiveis do usuario
                let opc: string = readline.question("Escolha uma opção: \n 1- Buscar chats \n 2- Adicionar novo chat \n 3- Adicionar usuario ao chat \n 4- Enviar mensagem \n 5- Buscar novas mensagens \n 6- Mostrar usuarios de um chat \n 7- Sair");
                
                if(opc == "1"){ // BUSCAR CHATS
                console.log(this.chats); //Mostra os chats existentes
                }

                else if(opc == "2"){ // ADICIONAR NOVO CHAT
                   this.chats.addChat();//Mostrar método addChat
                }

                else if(opc == "3"){ // ADICIONAR USUARIO A UM CHAT
                   this.chats.addUsuChat(); // Mostrar método addUsuChat        
                }

                else if(opc == "4"){ // ENVIAR MENSAGEM
                    this.chats.enviarMensagem();// Mostrar método enviarMensagem
                }

                else if(opc == "5"){ // BUSCAR NOVAS MENSAGENS
                   this.chats.buscarNovasMsg(); // Mostrar método buscarNovasMsg
                }

                else if(opc == "6"){ // MOSTRAR USUARIOS DE UM CHAT
                    this.chats.mostrarUsusChat();// Mostrar método mostrarUsusChat
                }

                else if(opc == "7"){
                    console.log("Bye Bye");
                }

            }else{
                console.log("Opção invalida");
                let opc: string = readline.question("Escolha uma opção novamente: \n 1- Buscar chats \n 2- Adicionar novo chat \n 3- Adicionar usuario ao chat \n 4- Enviar mensagem \n 5- Buscar novas mensagens \n 6- Mostrar usuarios de um chat \n 7- Sair"); // Se o id não existir é apresentado as opções novamente 
            }
        }

        else if(inicio == "2"){ // CADASTRAR CONTA
            let cadUsu : string = readline.question("Digite o id de usuario (ex: MariaJose): ");
            let novoUsu: Usuario = new Usuario(cadUsu,[]); //Criando novo usuario passandp o idUsu e uma Array<Chat> vazia
        }

        else if(inicio == "3"){ // SAIR
            console.log("Você saiu do Whats App, até a próxima");
        }
        else{
            return undefined;
        }
    }
}