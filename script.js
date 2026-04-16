const projetos = [
    {
        nome: "Projeto 1",
        descricao: "Meu primeiro projeto",
        link: "https://werlenelima41-pixel.github.io/meu-portfolio/"
    },
    {
        nome: "Projeto 2",
        descricao: "Outro projeto legal",
        link: "https://werlenelima41-pixel.github.io/meu-portfolio/"
    }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(p => {
    lista.innerHTML += `
    <div class="projeto">
        <a href="${p.link}" target="_blank">
            <h3>${p.nome}</h3>
        </a>
        <p>${p.descricao}</p>
    </div>
    `;
});