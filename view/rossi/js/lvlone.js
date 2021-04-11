function gameover(mensagem){
    document.write(`
        <h3>${mensagem}</h3>
        <h1>GAME OVER</h1>
    `)
}

function fase01(){
    document.write(`
        <h1>Fase 01</h1>
    `)
}

function lvlone(){
    var mensagem = "Digite 1 \n Digite 2"
    var escolha = prompt(mensagem)
    var certo = "1"

    if(certo == escolha){
        fase01()
    }
    else
        gameover("Voce perdeu!")
}

function rolaDado(numMax){
    return Math.floor(Math.random()*(numMax-1)+1)
}

lvlone()
