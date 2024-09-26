

function pesquisar() {
    let resultados = "";

    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa");

    for (let dado of dados) {
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="">${dado.titulo}</a>
            </h2>
            
            <p class="descricao-meta">
            ${dado.descricao}
            </p>
            <a href="${dado.link}" target="_blank">Ver localização</a>
        </div>
    `
    }

    section.innerHTML = resultados;
}
