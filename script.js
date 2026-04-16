const projetos = [
  { nome: "Projeto 1", descricao: "Meu primeiro projeto" },
  { nome: "Projeto 2", descricao: "Outro projeto legal" }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach(p => {
  lista.innerHTML += `
    <div class="projeto">
      <h3>${p.nome}</h3>
      <p>${p.descricao}</p>
    </div>
  `;
});