document.addEventListener("DOMContentLoaded", (event) => {
  const cards = JSON.parse(localStorage.getItem("cards")) || [];
  const template = document.getElementById("card-template");
  const cardList = document.getElementById("card-list");

  for (let i = 0; i < cards.length; i++) {
    const cardView = template.content.cloneNode(true);

    const titleText = cardView.querySelector(".title-text");
    const subtitleText = cardView.querySelector(".subtitle-text");
    const toText = cardView.querySelector(".to-text");
    const fromText = cardView.querySelector(".from-text");
    const messageText = cardView.querySelector(".message-text");

    const deleteButton = cardView.querySelector(".delete-btn");

    titleText.textContent = cards[i].title;
    subtitleText.textContent = cards[i].subtitle;
    toText.textContent = cards[i].to;
    fromText.textContent = cards[i].from;
    messageText.textContent = cards[i].message;

    deleteButton.addEventListener("click", function () {
      console.log(i);
      cards.splice(i, 1);
      localStorage.setItem("cards", JSON.stringify(cards));
      location.reload();
    });

    cardList.appendChild(cardView);
  }
});
