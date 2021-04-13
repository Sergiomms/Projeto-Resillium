var acao2 = prompt('Digite 1 para: Pegar seu martelo e atacar o senhor\nDigite 2 para: Usar o martelo para tentar afastar o senhor e fugir');

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
                    Com sua força extrema de ferreiro, você acerta um golpe na cabeça do senhor o matando na hora.
                </p>
                <br></br>
                <br></br>
                <p>
                    Ao olhar em volta, percebe que todo vilarejo de Resillium está um verdadeiro caos, casas pegando fogo,
                    pessoas correndo desesperadas, e pessoas com uma aparencia estranha, cheias de sangue em suas bocas, 
                    algumas até sem membros do corpo e mesmo assim andando por todo lado, um grupo delas estava agachado no
                    chão, em volta de um corpo caído e aparentemente comendo aquele corpo, abrindo sua barriga, retirando
                    as visceras e colocando diretamente na boca.
                </p>
                <br></br>
                <br></br>
                <p>
                    Sem entender porque aquelas pessoas aparentemente machucadas e cheias de sangue estavam comendo outras
                    pessoas, o que você fará a seguir?
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
                Ao tentar empurrar o senhor para trás, você se preocupa em tentar não machucá-lo, abaixando sua guarda
                dando a oportunidade para ele agarrar seu braço e mordê-lo, arrancando um pedaço sigficante de seu membro.
                Desesperado você perde o controle e o senhor acaba te derrubando no chão, arrancando mais pedaços de seu
                corpo com a boca, fazendo com que você morra.
                </p>
                <br></br>
                <br></br>
                <a href="../index.html" class="botao-voltar">| Voltar ao início |</a>
            </div>    

        </div> 
                 
        `);
    }else{
        acao2 = prompt(`Opção invalida, por favor tente novamente\nDigite 1 para: Pegar seu martelo e atacar o senhor\nDigite 2 para: Usar o martelo para tentar afastar o senhor e fugir`);
        rodaOpcao(valorDaVar);
    } 

}
