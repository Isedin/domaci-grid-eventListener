document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;

  for (let i = 1; i <= 100; i++) {
    const div = document.createElement("div");
    div.className = "container";
    div.style.backgroundColor = i % 2 === 0 ? "red" : "blue";

    const spanText = document.createElement("span");
    spanText.textContent = i;
    div.appendChild(spanText);

    div.addEventListener("click", () => {
      if (div.style.backgroundColor === "black") {
        div.style.backgroundColor = i % 2 === 0 ? "red" : "blue";
        spanText.textContent = i;
      } else {
        div.style.backgroundColor = "black";
        spanText.innerHTML = i % 2 === 0 ? "parni element" : "neparni element";
      }
    });
    body.appendChild(div);
  }
});
