var acao2 = prompt('Digite 1 para: Pegue a faca e use suas habilidades de ladino para ir para cima do senhor\nDigite 2 para: Corra para a janela, e pule por ela para tentar escapar');

rodaOpcao(acao2);

function rodaOpcao(valorDaVar){
    
    if(acao2 == 1){
        
        document.write(
            `
            <div class="topo-container">

                <div class="titulo"> 
        
                    <h1 class="titulo1">PARTE 02</h1>
        
                </div>   

                <p>
                    Ao ir para cima do senhor, você consegue derrubá-lo, acertando com a faca o peito dele.
                </p>
                <br></br>
                <br></br>
                <p>
                    -Desculpe, senhor, você veio para cima de mim!
                </p>
                <br></br>    
                <p>
                    Porém o senhor começa a levantar e voltar a ficar de pé, como se nada tivesse acontecido.
                    Você então decide fugir pela porta, conseguindo desviar de uma senhora que tentou lhe agarrar ao lado da janela.
                    Ao fugir da sua casa, você avista um cavalo parado, porém assustado, haviam 4 pessoas tentando agarrá-lo
                </p>
                <br></br>
                <br></br>
                <a href="./pg4.html" class="botao-continuar">| Continuar |</a>

            </div>`

        );
    }else if(acao2 == 2){

        document.write(`
        <div class="topo-container">
        
            <div class="descricao-do-mundo">
                <h1 class="gameOver">Game over</h1>
                <br></br>
                <br></br>
                <p>
                    Ao pular a janela, você dá de cara com uma senhora com os olhos brancos que estava na frente da janela.
                    A senhora consegue agarrar seu braço e morder com toda a força sua mão.
                    A vista começa a escurecer, você sente muita dor e percebe que está desmaiando.
                </p>
                <br></br>
                <br></br>
                <a href="../index.html" class="botao-voltar">| Voltar ao início |</a>
            </div>    

        </div> 
                 
        `);
    }else{
        acao2 = prompt(`Opção invalida, por favor tente novamente\nDigite 1 para: Pegue a faca e use suas habilidades de ladino para ir para cima do senhor\nDigite 2 para: Corra para a janela, e pule por ela para tentar escapar`);
        rodaOpcao(valorDaVar);
    } 

}
