function nextlevel(resultadoDado){
    document.write(`
        <div>
            <h1>XUXA MARAVILHA</h1>
            <h3>Você tirou: ${resultadoDado}</h3>
            <h3>O vídeo viralizou e muitas crianças e jovens se tornaram mais conscientes de como o que eles postam pode ser usado por pessoas mal intencionadas!</h3>
            <h2>Mais uma vez o dia foi salvo pelo</h2>
            <h1>XUXA MARAVILHAAAAAA</h1>
        </div>
        <div>
            <h2><a href="../../index.html">Voltar para o inicio</a></h2>
        </div>
    `)
}

function gameover(resultadoDado){
    document.write(`
    <div>
        <h1>XUXA MARAVILHA</h1>
        <h3>Você tirou: ${resultadoDado}</h3>
        <h3>O vídeo foi visto por poucas pessoas, a maioria dos jovens ignorou ou fizeram piada.</h3>
        <h1>GAME OVER</h1>
    </div>
    <div>
        <h2><a href="../../index.html">Voltar para o inicio</a></h2>
    </div>
    `)
}

function decisaoComDado(){
    var resultadoDado;
    var resultadoMinimo = "4"
    
    alert("Role o dado!")
    resultadoDado = rolaDado(10)

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
