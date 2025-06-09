const input = document.getElementById("cover-photo");
const container = input.closest(".container-mm");
const [p, f] = [...container.querySelectorAll("span")].filter((s) =>
  /Nenhum arquivo selecionado|image\.png/.test(s.textContent)
);

p.style.display = "inline";
f.style.display = "none";

input.addEventListener("change", () => {
  const hasFile = input.files.length > 0;
  p.style.display = hasFile ? "none" : "inline";
  f.style.display = hasFile ? "inline" : "none";
});
