function nextlevel(){
    document.write(`
        <div>
            <h1>SUPER TUNADO ROSSI</h1>
            <h3>Em contato com o número, o “vendedor” diz que vai mandar um código de verificação para o celular do Rossi. Já sabendo dessa tática o Super Tunado diz que não está recebendo número e inverte a situação para pegar os dados do trapaceiro. Ele diz que enviou uma mensagem com o número e pede para o trapaceiro avisar se recebeu, para dessa forma, pegar os dados dele.</h3>
            <h2>Será que eles vão cair nessa????</h2>
        </div>
        <div class="perguntas">
            <h2>Role um dado D20 para saber se o trapaceiro caiu no contra-golpe.<br>(Valor mínimo: 13)</h2>
        </div>
        <div>
            <h2><a href="./end.html">Rolar o dado</a></h2>
        </div>
    `)
}

function gameover(){
    document.write(`
    <div>
        <h1>SUPER TUNADO ROSSI</h1>
        <h3>A polícia diz que não pode fazer nada sem mais provas</h3>
        <h1>GAME OVER</h1>
    </div>
    <div>
        <h2><a href="../../index.html">Voltar para o inicio</a></h2>
    </div>
    `)
}

function decisao(){
    var mensagem = "Digite 1 - Ele denuncia o número para a polícia \nDigite 2 - Ele entra em contato com o número"
    var escolha = prompt(mensagem)
    var certo = "2"

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
