function nextlevel(){
    document.write(`
        <div>
            <h1>DOGUINHO CARAMELO</h1>
            <h3>O homem pega o jornal da boca do nosso heroizinho e abre na página da notícia importante. Porém logo embaixo tem uma manchete falando que o técnico do seu time vai ser alterado (de novo). Assim eles nunca vão subir para fase B!!</h3>
            <h2>O Doguinho precisa que o homem volte a atenção para notícia! Mas como?</h2>
            <div class="perguntas">
                <h2>1 - Ele começa a latir tentando se comunicar.</h2>
                <h2>2 - Ele pega o jornal da mão do homem e rasga as noticias irrelevantes.</h2>
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
        <h1>DOGUINHO CARAMELO</h1>
        <h3>O homem acha ele fofo demais e decide trocar todas suas senhas para <em>dog1234</em></h3>
        <h1>GAME OVER</h1>
    </div>
    <div>
        <h2><a href="../../index.html">Voltar para o inicio</a></h2>
    </div>
    `)
}

function decisao(){
    var mensagem = "Digite 1 - Ele brinca com homem pra inspirá-lo a trocar de senha. \nDigite 2 - Ele leva um jornal com uma noticia sobre a importância de senhas seguras."
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
