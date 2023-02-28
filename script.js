const laele = () => {};

const btn = document.querySelector('input[type="button"]');

btn.addEventListener("click", () => {
  const article = document.createElement("article");
  article.classList.add("Comentário");

  let boy = document.querySelector("#coment").value;
  article.innerHTML = `<img class="user-icon" src="img/user.png" alt="user-icon"><h2 class="subtitulo">You:</h2><p class="conteúdo">" ${boy} "</p>`;

  const container = document.querySelector(".Comentários");

  container.appendChild(article);
});
