var acao4 = prompt('Digite 1 para: Para atacar o Terrível Izoton com seu martelo e matá-lo.\n\nDigite 2 para: Para ajudar a Rainha a se levantar e fugir enquanto Izoton está incapacitado');

rodaOpcao(acao4);

function rodaOpcao(valorDaVar){
    
    if(acao4 == 2){
        
        document.write(
            `
            <div class="topo-container">

                <div class="titulo"> 
        
                    <h1 class="titulo1">FINAL</h1>
        
                </div>   

                <p>
                    Enquanto Izoton tentava recuperar sua visão, você rapidamente ajuda a Rainha a se levantar e juntos
                    fogem correndo, sem olhar para trás.
                </p>
                <br></br>
                <br></br>
                <p>
                    Após alguns dias caminhando pela floresta, vocês encontram um acampamento de sobreviventes do vilarejo
                    que reconhecem você e a Rainha e oferecem abrigo, água e pão para ajudar.
                </p>
                <br></br>
                <br></br>
                <p>
                    O plano agora é recuperar todas as energias, e com suas habilidades forjar armas e armaduras para que os 
                    sobreviventes se unam em um ataque surpresa para recuperar o reino, destruir o terrível alquimista Izoton e
                    descobrir porque essas coisas terríveis aconteceram no vilarejo.
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
    }else if(acao4 == 1){

        document.write(`
        <div class="topo-container">
        
            <div class="descricao-do-mundo">
                <h1 class="gameOver">Game over</h1>
                <br></br>
                <br></br>
                <p>
                    Ao tentar tirar proveito da situação e atacar Izoton enquanto ele estava cego, você entrega sua ação
                    fazendo barulho com seus passos pesados, Izoton percebe a aproximação e num ato de desespero se joga
                    na sua direção com suas garras de monstro, cravando-as em seu peito e te matando antes mesmo que você
                    conseguisse atingir o golpe com seu martelo.
                </p>
                <br></br>
                <br></br>
                <a href="../index.html" class="botao-voltar">| Voltar ao início |</a>
            </div>    

        </div> 
                 
        `);
    }else{
        acao4 = prompt(`Opção invalida, por favor tente novamente\nDigite 1 para: Para atacar o Terrível Izoton com seu martelo e matá-lo.\n\nDigite 2 para: Para ajudar a Rainha a se levantar e fugir enquanto Izoton está incapacitado`);
        rodaOpcao(valorDaVar);
    } 

}
