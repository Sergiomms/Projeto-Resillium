var nome = prompt('Digite abaixo o nome do seu personagem:');

document.write(

`
    <div class="topo-container">

        <div class="titulo"> 

            <h1 class="titulo1">INTRODUÇÃO</h1>

        </div>   

        <div class="descricao-do-mundo">

            <p> 
                 ${nome} você é o melhor arqueiro que Resillium já teve, além de anos de treinamento 
                arduo você também possui um arco forjado pelo ferreiro com os restos da armadura de 
                seu pai que, foi usada em outra grande guerra e flechas tão ponteagudas que perfuram
                elmos e crânios facilmente.
            </p>
            <br></br>
            <p>
                Por muitos anos nossas terras permaneceram em paz, as pessoas não precisavam se 
                preocupar com guerras ou desordens naturais. Infelizmente uma nova espécie de seres
                estava sendo criada. 
                Alquimistas liderados por Izoton, usaram todo o conhecimento que tinham e criaram um 
                exército ZUMBIES para que pudessem dominar Resillium.
            </p>
            <br></br>
            <br></br>
            <div class="botoes">

                <a href="./pg2.html" class="botao-continuar">| Continuar |</a>
                <a href="../index.html" class="botao-voltar">| Voltar ao início |</a>

            </div>

        </div>


    </div>`
);