const projetos = [
    {
        nome: "Projeto de Portfólio",
        descricao: "Portfólio desenvolvido com HTML, CSS e JavaScript.",
        link: "https://github.com/werlenelima41-pixel/meu-portfolio"
    },
    {
        nome: "Exemplo de Renderização",
        descricao: "Uso de JavaScript para exibir projetos dinamicamente.",
        link: "https://github.com/"
    }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(p => {
    lista.innerHTML += `
        <div class="projeto">
            <h3><a href="${p.link}" target="_blank">${p.nome}</a></h3>
            <p>${p.descricao}</p>
        </div>
    `;
});