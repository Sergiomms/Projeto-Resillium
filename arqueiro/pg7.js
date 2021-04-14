var acao6 = prompt('Digite 1 para: aprisionar cada um nas profundezas dos poços de Resillium.\n\nDigite 2 para: o mundo nunca mudará se não houver o perdão.');

rodaOpcao(acao6);

function rodaOpcao(valorDaVar){
    
    if(acao6 == 1){
        
        document.write(
            `
            <div class="topo-container">

                <div class="titulo"> 
        
                    <h1 class="titulo1">FINAL</h1>
        
                </div>   

                <p>
                    É uma boa escolha, Resillium está aos poucos se reerguendo e voltando aos seus mais lindos dias,
                    mas será se foi o suficinte para encerrar com a guerra?
                </p>
                <br></br>
                <br></br>
                <p>
                    Obrigado por ter tido a coragem e a sabedoria para ajudar Resillium em seu pior momento
                    você é um guerreiro arqueiro atípico, sua força e coragem fez com que esta guerra fosse
                    vencida por nós. Viva você e ao espirito de Softus que lhe mostrou a melhor saída.
                </p>
                <br></br>
                <br></br>  
                <p>
                    viva Resillium!
                </p>
                <br></br>
                <br></br>
                <a href="../index.html" class="botao-voltar">| Voltar ao início |</a>

            </div>`

        );
    }else if(acao6 == 2){

        document.write(`
        <div class="topo-container">
        
            <div class="descricao-do-mundo">
                <h1 class="gameOver">Game over</h1>
                <br></br>
                <br></br>
                <p>
                    nunca confie em um genocida, só haverá mortes.
                </p>
                <br></br>
                <br></br>
                <a href="../index.html" class="botao-voltar">| Voltar ao início |</a>
            </div>    

        </div> 
                 
        `);
    }else{
        acao6 = prompt(`Opção invalida, por favor tente novamente\nDigite 1 para: aprisionar cada um nas profundezas dos poços de Resillium.\n\nDigite 2 para: o mundo nunca mudará se não houver o perdão.`);
        rodaOpcao(valorDaVar);
    } 

}
