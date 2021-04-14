var acao1 = prompt('Você estava em mais um dia de treinamento e percebe um movimento estanho na floresta ao seu redor,  o que você faz?\n\nDigite 1 para: Pega seu arco e vai saber o que está acontecendo\nDigite 2 para: Pega seu arco e flecha e se prapara para usa-los.\nDigite 3 para: Pega o rumo de casa, você está com medo.');

rodaOpcao(acao1);

function rodaOpcao(valorDaVar){
    
    if(acao1 == 2){
        
        document.write(
            `
            <div class="topo-container">

                <div class="titulo"> 
        
                    <h1 class="titulo1">PARTE 01</h1>
        
                </div>   

                <p>
                    Você enxerga os zumbies e logo atira contra eles, os matando.
                </p>
                <br></br>
                <br></br>
                <p>
                    você é escolhido para ser o capitão do exército de arqueiros de Resillium, você ganhará
                    novas armaduras impenetráveis, porém você se sente estranho , pois nunca havia 
                    abatido zumbies antes, o que você faz?                
                </p>
                <br></br>
                <br></br>

                <a href="./pg3.html" class="botao-continuar">| Continuar |</a>

            </div>`

        );
    }else if(acao1 == 1){

        document.write(`
        <div class="topo-container">
        
            <div class="descricao-do-mundo">
                <h1 class="gameOver">Game over</h1>
                <br></br>
                <br></br>
                <p>
                    Você esqueceu suas flechas e foi atacado pelos zumbies.
                </p>
                <br></br>
                <br></br>
                <a href="../index.html" class="botao-voltar">| Voltar ao início |</a>
            </div>    

        </div> 
                 
        `);
    }else if(acao1 == 3){

        document.write(`
        <div class="topo-container">
        
            <div class="descricao-do-mundo">
                <h1 class="gameOver">Game over</h1>
                <br></br>
                <br></br>
                <p>
                    Vvocê deveria defender Resillium.
                </p>
                <br></br>
                <br></br>
                <a href="../index.html" class="botao-voltar">| Voltar ao início |</a>
            </div>    

        </div> 
                 
        `);
    }else{
        acao1 = prompt(`Opção invalida, por favor tente novamente\nVocê estava em mais um dia de treinamento e percebe um movimento estanho na floresta ao seu redor,  o que você faz?\n\nDigite 1 para: Pega seu arco e vai saber o que está acontecendo\nDigite 2 para: Pega seu arco e flecha e se prapara para usa-los.\nDigite 3 para: Pega o rumo de casa, você está com medo.`);
        rodaOpcao(valorDaVar);
    } 

}
