function nextlevel(resultadoDado){
    document.write(`
        <div>
            <h1>DOGUINHO CARAMELO</h1>
            <h3>Você tirou: ${resultadoDado}</h3>
            <h3>O homem lê a notícia correta e percebe o perigo de ter senhas iguais. Ele baixa um aplicativo de gerenciamento de senhas e já começa a trocar todas elas.</h3>
            <h2>E mais uma pessoa está segura, graças ao</h2>
            <h1>DOGUINHOOO CARAMELOOO</h1>
        </div>
        <div>
            <h2><a href="../../index.html">Voltar para o inicio</a></h2>
        </div>
    `)
}

function gameover(resultadoDado){
    document.write(`
    <div>
        <h1>DOGUINHO CARAMELO</h1>
        <h3>Você tirou: ${resultadoDado}</h3>
        <h3>Ele leu a notícia que mostra que seu favorito no BBB foi pro paradão. Ele fica tão bravo que salva a senha como <em>abcd1234</em> e segue seu caminho.</h3>
        <h1>GAME OVER</h1>
    </div>
    <div>
        <h2><a href="../../index.html">Voltar para o inicio</a></h2>
    </div>
    `)
}

function decisaoComDado(){
    var resultadoDado;
    var resultadoMinimo = "15"
    
    alert("Role o dado!")
    resultadoDado = rolaDado(20)

    if(resultadoDado >= resultadoMinimo){
        nextlevel(resultadoDado)
    }
    else
        gameover(resultadoDado)
}

function rolaDado(numMax){
    return Math.floor(Math.random()*(numMax-1)+1)
}

decisaoComDado()
