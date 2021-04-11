function nextlevel(){
    document.write(`
        <div>
            <h1>SUPER TUNADO ROSSI</h1>
            <h3>No grupo de senhorinhas da paróquia ele recebe uma mensagem cheia de emojis e caixa alta dizendo que ISSO AQUELA EMISSORA NÃO FALA!!! A mensagem tinha um contato para vender o "segredo" da recuperação do Super Tunado Rossi com um número de telefone para contato.</h3>
            <h2>Nosso herói tem que decidir o que fazer.</h2>
            <div class="perguntas">
                <h2>1 - Ele denuncia o número para a polícia</h2>
                <h2>2 - Ele entra em contato com o número</h2>
            </div>
            
        </div>
        <div>
            <h2><a href="./second.html">Faça sua escolha</a></h2>
        </div>
    `)
}

function gameover(){
    document.write(`
    <div>
        <h1>SUPER TUNADO ROSSI</h1>
        <h3>Ele só encontra foto sem camisa pós treino, receita de frango com batata doce e venda suplementos importados</h3>
        <h1>GAME OVER</h1>
    </div>
    <div>
        <h2><a href="../../index.html">Voltar para o inicio</a></h2>
    </div>
    `)
}

function decisao(){
    var mensagem = "Digite 1 - Ele entra no grupo de Zap da paróquia \nDigite 2 - Ele entra no grupo de Zap dos crossfiteiros da região."
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

decisao()
