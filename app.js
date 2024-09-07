fuction pesquisar() {
    let section = document.getElementById("resultados-pesquisa")
    console.log(section) ;

    let campoPesquisa = document.getElementById("campo-pesquisa")

    let resultados = ""
    
    for (let dado of dados) {
        resultados += `
    
        <div class="item-resultado">
             <h2>
             <a href="#" target="_blank">${dado.titulo} </a>
             </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Informações sobre o Gemini</a><br>
                <a href=${dado.link} target="_blank">Como escrever um bom comando para a IA</a><br>
                <a href=${dado.link} target="_blank">Novidades no Gemini: Gems personalizados e geração de imagens aprimorada com Imagen 3</a><br>
                <a href=${dado.link} target="_blank">Respostas mais rápidas com Gemini Flash 1.5</a><br>
                <a href=${dado.link} target="_blank">Gemini transforma seu celular em um poderoso assistente de IA</a><br>
        </div>
    `
    }
    
    section.innerHTML = resultados

}
