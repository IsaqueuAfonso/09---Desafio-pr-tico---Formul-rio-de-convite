const input = document.getElementById("cover-photo");
const spans = input.parentElement.querySelectorAll("span");
const placeholder = spans[0];
const fileName = spans[1];

input.addEventListener("change", function () {
  if (input.files.length > 0) {
    placeholder.style.display = "none";
    fileName.style.display = "inline";
    fileName.textContent = input.files[0].name;
  } else {
    placeholder.style.display = "inline";
    fileName.style.display = "none";
    fileName.textContent = "";
  }
});

placeholder.style.display = "inline";
fileName.style.display = "none";
