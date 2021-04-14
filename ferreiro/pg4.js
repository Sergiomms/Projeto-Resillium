var acao3 = prompt('Digite 1 para: Você voltar para sua casa, trancar todas as entradas, se esconder em seu quarto e torcer para ninguem aparecer.\n\nDigite 2 para: Fazer uma mala com seu martelo, alguns item de sua forja e um pouco de comida.');

rodaOpcao(acao3);

function rodaOpcao(valorDaVar){
    
    if(acao3 == 2){
        
        document.write(
            `
            <div class="topo-container">

                <div class="titulo"> 
        
                    <h1 class="titulo1">PARTE 03</h1>
        
                </div>   

                <p>
                    Enquanto está arrumando sua mala para sair de casa em busca de um lugar seguro, você ouve de longe
                    um grito de socorro, e você reconhece aquela voz. É a Rainha Taís!
                </p>
                <br></br>
                <br></br>
                <p>
                    Enquanto termina de arrumar suas coisas com pressa, os gritos de socorro vão se intensificando,
                    você sabe que a situação é crítica, a Rainha está em apuros. Você finalmente pega suas coisa 
                    e sai às pressas. No caminho é atacado por essas estranhas pessoas que aparentam estar mortas, 
                    mas seu martelo nunca te abandona e você destrói todas. Chegando no saguão do castelo da Rainha, ensanguentado, você
                    a vê correndo assustada, fugindo de uma figura sombria que está tentando pegá-la, ao se aproximar
                    um pouco mais da situação já com seu martelo em mãos, pronto para a luta, você descobre que a figura
                    sombria é ninguém menos que o velho alquimista Izoton, ele tem a mesma aparência das pessoas que
                    estão atacando todos no vilarejo, mas também possui uma risada maligna, como se estivesse gostando
                    da situação.
                </p>
                <br></br>
                <br></br>
                <p>
                    Enquanto tentava fugir a Rainha conseguiu cegar momentaneamente o terrível Izoton com uma tocha que 
                    estava na parede do saguão do castelo, mas ao fazer isso, acabou caindo e se machucando...
                    O que você fará a seguir?
                </p>
                <br></br>
                <br></br>
            
                <a href="./pg5.html" class="botao-continuar">| Continuar |</a>

            </div>`

        );
    }else if(acao3 == 1){

        document.write(`
        <div class="topo-container">
        
            <div class="descricao-do-mundo">
                <h1 class="gameOver">Game over</h1>
                <br></br>
                <br></br>
                <p>
                    Tentando não pensar no pior, você se tranca em casa e se esconde em seu quarto, desesperado, tentando
                    entender o que está acontecendo com todo mundo.
                </p>
                <br></br>
                <br></br>
                <p>
                    Algumas horas depois o fogo do vilarejo que aparentava estar longe veio se espalhando com o vento,
                    chegando até sua casa, ao tentar conter o fogo com o pouco de água que encontra em casa, você atrai
                    a atenção de pessoas com aquela aparência estranha, que estavam devorando outras pessoas. Elas
                    invadem sua casa e sem falarem nada, apenas com gemidos, aparentemente de dor, te cercam e acabam
                    te devorando vivo...
                </p>
                <br></br>
                <br></br>
                <a href="../index.html" class="botao-voltar">| Voltar ao início |</a>
            </div>    

        </div> 
                 
        `);
    }else{
        acao3 = prompt(`Opção invalida, por favor tente novamente\nDigite 1 para: Você voltar para sua casa, trancar todas as entradas, se esconder em seu quarto e torcer para ninguem aparecer.\nDigite 2 para: Fazer uma mala com seu martelo, alguns item de sua forja e um pouco de comida.`);
        rodaOpcao(valorDaVar);
    } 

}
