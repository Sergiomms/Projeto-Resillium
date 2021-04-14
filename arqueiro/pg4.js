var acao3 = prompt('Digite 1 para: você como um líder começa a falar sobre ter a paz de volta e no futuro de Resillium\n\nDigite 2 para:  você não sabe o que fazer, são muitos zumbies e muitos mortos.');

rodaOpcao(acao3);

function rodaOpcao(valorDaVar){
    
    if(acao3 == 1){
        
        document.write(
            `
            <div class="topo-container">

                <div class="titulo"> 
        
                    <h1 class="titulo1">PARTE 03</h1>
        
                </div>   

                <p>
                    seus companheiros de batalha lhe ouvem e escolhem morrer ajudando.
                </p>
                <br></br>
                <br></br>
                <p>
                    Você entra em contato com o espirito de seu pai que lhe mostra técnicas ancestrais de 
                    arco e flecha, em apenas 2 segundos você teve contato com líderes arqueiros e lhe foi
                    repassado os segredos de flechas infinitas e sobre seu espirito antepassado 'Softus', 
                    o que você faz?
                </p>
                <br></br>
                <br></br>
            
                <a href="./pg5.html" class="botao-continuar">| Continuar |</a>

            </div>`

        );
    }else if(acao3 == 2){

        document.write(`
        <div class="topo-container">
        
            <div class="descricao-do-mundo">
                <h1 class="gameOver">Game over</h1>
                <br></br>
                <br></br>
                <p>
                    você e seu exército se rendem e são devorados por zumbies
                </p>
                <br></br>
                <br></br>

                <a href="../index.html" class="botao-voltar">| Voltar ao início |</a>
            </div>    

        </div> 
                 
        `);
    }else{
        acao3 = prompt(`Opção invalida, por favor tente novamente\nDigite 1 para: você como um líder começa a falar sobre ter a paz de volta e no futuro de Resillium\n\nDigite 2 para:  você não sabe o que fazer, são muitos zumbies e muitos mortos.`);
        rodaOpcao(valorDaVar);
    } 

}
