function fase01(){
    document.write(`
        <div>
            <h1>SUPER TUNADO ROSSI</h1>
            <h3>No grupo de senhorinhas da paróquia ele recebe uma mensagem cheia de emojis e caixa alta dizendo que ISSO AQUELA EMISSORA NÃO FALA!!! A mensagem tinha um contato para vender o "segredo" o segredo da recuperação do Super Tunado Rossi com um número de telefone para contato.</h3>
            <h2>Nosso herói tem que decidir o que fazer.</h2>
            <div class="perguntas">
                <h2>1 - Ele entra em contato com o número</h2>
                <h2>2 - Ele denuncia o número para a polícia</h2>
            </div>      
        </div>
        <div>
            <h2><a href="./second.html">Continuar</a></h2>
        </div>
    `)
}

function gameover(){
    document.write(`
        <div>
            <h3>A polícia diz que não pode fazer nada sem mais provas</h3>
            <h1>GAME OVER</h1>
        </div>
        <div>
            <h2><a href="../../index.html">Voltar para o inicio</a></h2>
        </div>
    `)
}

function lvlone(){
    var mensagem = "Digite 1 \nDigite 2"
    var escolha = prompt(mensagem)
    var certo = "1"

    if(certo == escolha){
        fase01()
    }
    else
        gameover()
}

function rolaDado(numMax){
    return Math.floor(Math.random()*(numMax-1)+1)
}

lvlone()
