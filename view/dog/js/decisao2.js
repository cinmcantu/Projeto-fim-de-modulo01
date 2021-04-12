function nextlevel(){
    document.write(`
        <div>
            <h1>DOGUINHO CARAMELO</h1>
            <h3>Várias folhas de notícias voam pelo ar. Uma delas cai na cara do homem. Ele pega a noticia e lê atentamente.</h3>
            <h2>Será que é a notícia certa???</h2>
            <div class="perguntas">
            <h2>Role um dado D20 se deu certo.<br>(Valor mínimo: 15)</h2>
        </div>
        <div>
            <h2><a href="./end.html">Rolar o dado</a></h2>
        </div>
    `)
}

function gameover(){
    document.write(`
    <div>
        <h1>DOGUINHO CARAMELO</h1>
        <h3>O homem acha que o doguinho está bravo e sai correndo com medo!</h3>
        <h1>GAME OVER</h1>
    </div>
    <div>
        <h2><a href="../../index.html">Voltar para o inicio</a></h2>
    </div>
    `)
}

function decisao(){
    var mensagem = "Digite 1 - Ele começa a latir tentando se comunicar. \nDigite 2 - Ele pega o jornal da mão do homem e rasga as noticias irrelevantes."
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
