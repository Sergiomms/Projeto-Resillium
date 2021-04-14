var acao1 = prompt('Digite 1 para dizer: "olá, posso ajudar em alguma coisa?"\nDigite 2 para encostar no Sr. e virá-lo');

rodaOpcao(acao1);

function rodaOpcao(valorDaVar){
    
    if(acao1 == 1){
        
        document.write(
            `
            <div class="topo-container">

                <div class="titulo"> 
        
                    <h1 class="titulo1">PARTE 01</h1>
        
                </div>   

                <p>
                    O senhor vira para você com os olhos brancos, fazendo um sussurro de dor, ele vem em sua direção 
                    mostrando os dentes! Ele parece querer atacá-lo, então você dá 3 passos para trás e encontra em cima da 
                    mesa seu martelo.
                </p>
                <br></br>
                <br></br>
                <a href="./pg3.html" class="botao-continuar">| Continuar |</a>

            </div>`

        );
    }else if(acao1 == 2){

        document.write(`
        <div class="topo-container">
        
            <div class="descricao-do-mundo">
                <h1 class="gameOver">Game over</h1>
                <br></br>
                <br></br>
                <p>
                    Ao encostar no ombro do senhor, ele se vira rapidamente para trás e consegue agarrar seu braço.
                    Ele olha diretamente para você e consegue mordê-lo!
                    Sua visão começa a falhar e você percebe que está desmaiando, sem saber se é pela dor ou algo o 
                    contaminou.
                </p>
                <br></br>
                <br></br>
                <a href="../index.html" class="botao-voltar">| Voltar ao início |</a>
            </div>    

        </div> 
                 
        `);
    }else{
        acao1 = prompt(`Opção invalida, por favor tente novamente\nDigite 1 para dizer: "olá, posso ajudar em alguma coisa?\nDigite 2 para encostar no Sr. e virá-lo:`);
        rodaOpcao(valorDaVar);
    } 

}
