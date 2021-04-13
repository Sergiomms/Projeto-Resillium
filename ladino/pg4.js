var acao3 = prompt('Digite 1 para: Esqueça o cava-lo e tente correr para fora da vila.\n\nDigite 2 para: Corra até o cavalo, e tente pega-lo.');

rodaOpcao(acao3);

function rodaOpcao(valorDaVar){
    
    if(acao3 == 2){
        
        document.write(
            `
            <div class="topo-container">

                <div class="titulo"> 
        
                    <h1 class="titulo1">FINAL</h1>
        
                </div>   

                <p>
                    Ao correr até o cavalo, você pula em um feno e consegue montá-lo.
                    Você dá um berro para que ele corra, e vocês dois conseguem desviar das 4 pessoas que estavam tentando pegá-lo.
                    Todos estavam de olhos brancos e fazendo barulhos de dor.
                    Você consegue sair daquela vila o mais rápido possível, deixando tudo para trás.
                    Mesmo se afastando da vila, você escuta vários gritos, e ao olhar para trás, consegue avistar o mesmo senhor em quem você enfiou a faca, mordendo o braço de um homem que aparentava ter uns 20 anos.
                    O que será que está acontecendo?
                </p>
                <br></br>
                <br></br>
                <p>
                    Mas isso é história para o próximo capítulo. 
                </p>
                <br></br>
                <br></br>
                <p>
                    Parabéns por ter terminado RESILLIUM.
                </p>
                <br></br>
                <br></br>
               
                <a href="../index.html" class="botao-voltar">| Voltar ao início |</a>

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
                    Ao correr, os zumbis lhe avistam e vão atrás de você.
                    Quando você olha para trás, e volta a olhar para a frente, 2 pessoas te agarram e começam a morder você.
                    Eles começam a morder toda as partes do seu corpo, você começa a sentir que está perdendo a consciência.
                </p>
                <br></br>
                <br></br>
                <a href="../index.html" class="botao-voltar">| Voltar ao início |</a>
            </div>    

        </div> 
                 
        `);
    }else{
        acao3 = prompt(`Opção invalida, por favor tente novamente\nDigite 1 para: Esqueça o cava-lo e tente correr para fora da vila.\n\nDigite 2 para: Corra até o cavalo, e tente pega-lo.`);
        rodaOpcao(valorDaVar);
    } 

}
