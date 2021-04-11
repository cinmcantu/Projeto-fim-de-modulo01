function nextlevel(resultadoDado){
    document.write(`
        <div>
            <h1>SUPER TUNADO ROSSI</h1>
            <h3>Você tirou: ${resultadoDado}</h3>
            <h3>O trapaceiro caiu e enviou o numero de confirmação do Whasapp dele. Com as provas de que ele estava roubando os dados, Super Tunado Rossi consegue que a policia prenda a quadrilha.</h3>
            <h2>Mais uma vez o dia foi salvo pelo</h2>
            <h1>SUUUUPER TUNADO ROSSI</h1>
        </div>
        <div>
            <h2><a href="../../index.html">Voltar para o inicio</a></h2>
        </div>
    `)
}

function gameover(resultadoDado){
    document.write(`
    <div>
        <h1>SUPER TUNADO ROSSI</h1>
        <h3>Você tirou: ${resultadoDado}</h3>
        <h3>Eles não caem e bloqueiam nosso herói, avisando todas as quadrilhas dos planos dele.</h3>
        <h1>GAME OVER</h1>
    </div>
    <div>
        <h2><a href="../../index.html">Voltar para o inicio</a></h2>
    </div>
    `)
}

function decisaoComDado(){
    var resultadoDado;
    var resultadoMinimo = "13"
    
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
