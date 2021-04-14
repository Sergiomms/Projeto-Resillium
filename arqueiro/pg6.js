var acao5 = prompt('Digite 1 para: você se sente um Deus e sem pensar deixa que seus atuais poderes te dominem\n\nDigite 2 para: você respeita o tempo da força e a usa de forma madura');

rodaOpcao(acao5);

function rodaOpcao(valorDaVar){
    
    if(acao5 == 2){
        
        document.write(
            `
            <div class="topo-container">

                <div class="titulo"> 
        
                    <h1 class="titulo1">PARTE 05</h1>
        
                </div>   

                <p>
                    você está invencível e consegue matar seus inimigos, agora se juntará aos outros
                    guerreiros.
                </p>
                <br></br>
                <br></br>
                <p>
                    Após 3 anos em uma guerra que parecia nao ter fim, os maiores guerreiros de Resillium
                    conseguiram capturar o alquimista Izoton e interceptam seus planos e sócios, vocês tem a chance de 
                    fazer algo com eles. Entre as escolhas estão:
                </p>
                <br></br>
                <br></br>            
                <a href="./pg7.html" class="botao-continuar">| Continuar |</a>

            </div>`

        );
    }else if(acao5 == 1){

        document.write(`
        <div class="topo-container">
        
            <div class="descricao-do-mundo">
                <h1 class="gameOver">Game over</h1>
                <br></br>
                <br></br>
                <p>
                    você acabou matando seus companheiros e perderam a guerra.
                </p>
                <br></br>
                <br></br>
                <a href="../index.html" class="botao-voltar">| Voltar ao início |</a>
            </div>    

        </div> 
                 
        `);
    }else{
        acao5 = prompt(`Opção invalida, por favor tente novamente\nDigite 1 para: você se sente um Deus e sem pensar deixa que seus atuais poderem te dominem\n\nDigite 2 para: você respeita o tempo da força e a usa de forma madura`);
        rodaOpcao(valorDaVar);
    } 

}
