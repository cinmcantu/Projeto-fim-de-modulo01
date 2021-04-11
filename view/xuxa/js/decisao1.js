function nextlevel(){
    document.write(`
        <div>
            <h1>XUXA MARAVILHA</h1>
            <h3>Xuxa Maravilha cria uma conta no Tik Tok e decide que quer ensinar as crianças com uma música. Ela então lembra que as crianças adoravam quando ela cantava e dançava no palco. Ela pensa em fazer uma nova música!</h3>
            <h2>Mas qual seria a melhor opção???</h2>
            <div class="perguntas">
                <h2>1 - Reescrever uma das suas músicas de sucesso.</h2>
                <h2>2 - Fazer uma paródia da música mais popular do momento.</h2>
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
        <h1>XUXA MARAVILHA</h1>
        <h3>O dono da emissora ri da cara dela e fala que as crinças não gostam mais disso!</h3>
        <h1>GAME OVER</h1>
    </div>
    <div>
        <h2><a href="../../index.html">Voltar para o inicio</a></h2>
    </div>
    `)
}

function decisao(){
    var mensagem = "Digite 1 - Fazer um novo programa de auditório. \nDigite 2 - Criar uma conta no Tik Tok."
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

decisao()
