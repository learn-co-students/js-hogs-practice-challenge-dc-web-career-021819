class Hog {
  constructor(details) {
    this.id = details.id;
    this.details = details;
    this.card = document.createElement("div");
    this.card.className = "hog-card";
    this.displayCard();
  }
  update() {
    fetch(`http://localhost:3000/hogs/${this.id}`, {
      method: "PATCH",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(this.details)
    });
  }
  delete() {
    fetch(`http://localhost:3000/hogs/${this.id}`, {
      method: "DELETE"
    }).then(() => this.removeCard());
  }
  displayCard() {
    const container = document.getElementById("hog-container");
    container.appendChild(this.card);
    this.card.innerHTML = `<h1>${this.details.name}</h1>
                            <p><strong>Specialty: </strong>${this.details.specialty}</p>
                            <p><strong>Weight: </strong>${this.details["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</p>
                            <p><strong>Highest Medal: </strong>${this.details["highest medal achieved"]}</p>
                            <image style = "height: 40%; max-width: 100%" src = ${this.details.image}>
                            <br>
                            <span><strong>Greased?</strong></span>`;
    const greaseBox = document.createElement("input");
    greaseBox.type = "checkbox";
    greaseBox.checked = this.details.greased;
    greaseBox.addEventListener("click", () => {
      this.details.greased = !this.details.greased;
      this.checked = this.details.greased;
      this.update();
    });
    this.card.appendChild(greaseBox);

    const br = document.createElement("p");
    br.innerHTML = `<br>`;
    this.card.appendChild(br);

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Send to Slaughterhouse";
    deleteButton.addEventListener("click", () => {
      this.delete();
    });
    this.card.appendChild(deleteButton);
  }
  removeCard() {
    this.card.remove();
  }
}
