const input = document.getElementById("cover-photo");
const [p, f] = [...input.parentElement.querySelectorAll("span")].filter((s) =>
  /Nenhum arquivo selecionado|image\.png/.test(s.textContent)
);
input.onchange = () => {
  [p, f].forEach(
    (el, i) => (el.style.display = input.files.length == i ? "inline" : "none")
  );
};
input.onchange();
