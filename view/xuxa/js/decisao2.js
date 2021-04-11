function nextlevel(){
    document.write(`
        <div>
            <h1>XUXA MARAVILHA</h1>
            <h3>Xuxa Maravilha reescreve sua música <em>"Ilariê"</em> ensinando os jovens a não se exporem nas redes sociais. Usando memes e bom humor!</h3>
            <h2>Será que vai funcionar???</h2>
            <div class="perguntas">
            <h2>Role um dado D10 se deu certo.<br>(Valor mínimo: 4)</h2>
        </div>
        <div>
            <h2><a href="./end.html">Rolar o dado</a></h2>
        </div>
    `)
}

function gameover(){
    document.write(`
    <div>
        <h1>XUXA MARAVILHA</h1>
        <h3>O fandom da cantora original odeia a ideia e xinga muito no Twitter! #foicancelada</h3>
        <h1>GAME OVER</h1>
    </div>
    <div>
        <h2><a href="../../index.html">Voltar para o inicio</a></h2>
    </div>
    `)
}

function decisao(){
    var mensagem = "Digite 1 - Reescrever uma das suas músicas de sucesso. \nDigite 2 - Fazer uma paródia da música mais popular do momento."
    var escolha = prompt(mensagem)
    var certo = "1"

    if(escolha ==1 || escolha == 2){
        if(certo == escolha){
            nextlevel()
        }
        else
            gameover()
    }else{
        alert("Digite 1 ou 2 para escolher!")
        decisao()
    }
}

function rolaDado(numMax){
    return Math.floor(Math.random()*(numMax-1)+1)
}

decisao()
