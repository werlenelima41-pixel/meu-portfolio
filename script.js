const projetos = [
    {
        nome: "Portfólio Web",
        descricao: "Desenvolvimento de um portfólio utilizando HTML, CSS e JavaScript com renderização dinâmica de projetos.",
        link: "https://github.com/werlenelima41-pixel/meu-portfolio"
    },
    {
        nome: "Lista de Projetos Dinâmica",
        descricao: "Implementação de array de objetos em JavaScript para exibição dinâmica de projetos na página.",
        link: "https://github.com/"
    }
];

const lista = document.getElementById("lista-projetos");

lista.innerHTML = "";

projetos.forEach(p => {
    const div = document.createElement("div");
    div.classList.add("projeto");

    div.innerHTML = `
        <h3><a href="${p.link}" target="_blank">${p.nome}</a></h3>
        <p>${p.descricao}</p>
    `;

    lista.appendChild(div);
});