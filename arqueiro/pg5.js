var acao4 = prompt('Digite 1 para: segue seu instinto e acredita que ainda é possível vencer usando estas técnicas.\n\nDigite 2 para: Não entende o que aconteceu, achou que foi um delírio.');

rodaOpcao(acao4);

function rodaOpcao(valorDaVar){
    
    if(acao4 == 1){
        
        document.write(
            `
            <div class="topo-container">

                <div class="titulo"> 
        
                    <h1 class="titulo1">PARTE 04</h1>
        
                </div>   

                <p>
                    você ganha uma vitalidade maior, mas tenha cuidado, você ainda não controla essa força.
                </p>
                <br></br>
                <br></br>
                <p>
                    Após você sentir a presença de seu pai, você se sente muito forte e entende que o espirito
                    do Arqueiro Sécular - Softus se funde ao seu. Agora você está muito poderoso. Porém isso exige
                    cautela de você, pois ainda não conhecia seus atuais poderes.
                </p>
                <br></br>
                <br></br>            
                <a href="./pg6.html" class="botao-continuar">| Continuar |</a>

            </div>`

        );
    }else if(acao4 == 2){

        document.write(`
        <div class="topo-container">
        
            <div class="descricao-do-mundo">
                <h1 class="gameOver">Game over</h1>
                <br></br>
                <br></br>
                <p>
                    após a sua visão , você perdeu a atenção e foi devorado por zumbies.
                </p>
                <br></br>
                <br></br>
                <a href="../index.html" class="botao-voltar">| Voltar ao início |</a>
            </div>    

        </div> 
                 
        `);
    }else{
        acao4 = prompt(`Opção invalida, por favor tente novamente\nDigite 1 para: segue seu instinto e acredita que ainda é possível vencer usando estas técnicas.\n\nDigite 2 para: Não entende o que aconteceu, achou que foi um delírio.`);
        rodaOpcao(valorDaVar);
    } 

}
