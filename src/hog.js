class Hog {
  static all = [];
  constructor(hogObj){
    this.id = hogObj.id;
    this.name = hogObj.name;
    this.specialty = hogObj.specialty;
    this.greased = hogObj.greased;
    this.weight = hogObj["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"];
    this.highestMedal = hogObj["highest medal achieved"];
    this.image = hogObj.image;
    Hog.all.push(this);
  }

  toJsonObj(){
    let obj = {};
    obj.id = this.id;
    obj.name = this.name;
    obj.specialty = this.specialty;
    obj.greased = this.greased;
    obj["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] = this.weight;
    obj["highest medal achieved"] = this.highestMedal;
    obj.image = this.image;
    return obj;
  }

  createHogCard(){
    this.card = document.createElement("div");
    this.card.classList.add("hog-card");
    this.card.dataset.id = `hog-card-${this.id}`;

    let nameHeader = document.createElement("h2");
    nameHeader.innerText = this.name;
    let specialtyHeader = document.createElement("h4");
    specialtyHeader.innerText = `Specialty: ${this.specialty}`;

    let greaseCheckbox = document.createElement("input")
    greaseCheckbox.type = "checkbox";
    greaseCheckbox.checked = this.greased;
    greaseCheckbox.addEventListener("click", greaseCheckboxEventHandler)

    let weightDiv = document.createElement("div");
    weightDiv.innerText = `weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: ${this.weight}`;
    let medalDiv = document.createElement("div");
    medalDiv.innerText = `highest medal achieved: ${this.highestMedal}`;
    let img = document.createElement("img")
    img.src = this.image;
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", deleteButtonHandler);

    this.card.appendChild(nameHeader);
    this.card.appendChild(specialtyHeader);
    this.card.appendChild(greaseCheckbox);
    this.card.appendChild(weightDiv);
    this.card.appendChild(medalDiv);
    this.card.appendChild(img);
    this.card.appendChild(deleteButton);

    return this.card;
  }
}
