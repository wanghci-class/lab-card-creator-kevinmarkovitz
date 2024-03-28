document.addEventListener("DOMContentLoaded", (event) => {
  const previewBtn = document.getElementById("previewBtn");
  const saveBtn = document.getElementById("saveBtn");

  previewBtn.addEventListener("click", () => {
    document.querySelector(".title-text").textContent =
      document.getElementById("title").value;
    document.querySelector(".subtitle-text").textContent =
      document.getElementById("subtitle").value;
    document.querySelector(".to-text").textContent =
      document.getElementById("to").value;
    document.querySelector(".from-text").textContent =
      document.getElementById("from").value;
    document.querySelector(".message-text").textContent =
      document.getElementById("message").value;
  });

  saveBtn.addEventListener("click", () => {
    let cards = JSON.parse(localStorage.getItem("cards")) || [];

    const card = {
      to: document.getElementById("to").value,
      from: document.getElementById("from").value,
      title: document.getElementById("title").value,
      subtitle: document.getElementById("subtitle").value,
      message: document.getElementById("message").value,
    };

    cards.push(card);

    localStorage.setItem("cards", JSON.stringify(cards));
  });
});
