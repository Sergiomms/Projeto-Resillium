var acao2 = prompt('Digite 1 para: Aceita, pois treinou a vida toda para isso.\nDigite 2 para: Não aceita, pois não quer enfrentar zumbie.');

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
                    você ganhas novas armaduras e está pronto para a guerra.
                </p>
                <br></br>
                <br></br>
                <p>
                    você precisa tomar uma decisão muito difícil. Os zumbies parecem estar dominando Resillium
                    ou você se rende ou levanta a esperança de seu exército e lhes dá motivos para continuar, Os
                    faz lembrar de como eram os vales e como as crianças eram felizes por morarem neste lugar.
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
                    Você acaba sendo atacado naquela noite e suas armaduras 
                    não eram fortes o suficiente para defende-lo, você foi mordido por zumbies, e morreu.
                </p>
                <br></br>
                <br></br>
                <a href="../index.html" class="botao-voltar">| Voltar ao início |</a>
            </div>    

        </div> 
                 
        `);
    }else{
        acao2 = prompt(`Opção invalida, por favor tente novamente\nDigite 1 para: Aceita, pois treinou a vida toda para isso.\nDigite 2 para: Não aceita, pois não quer enfrentar zumbie.`);
        rodaOpcao(valorDaVar);
    } 

}
