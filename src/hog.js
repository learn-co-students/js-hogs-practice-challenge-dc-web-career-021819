class Hog {
  static all = []
  constructor(hogObj){
    this.id = hogObj.id
    this.name = hogObj.name
    this.specialty = hogObj.specialty
    this.greased = hogObj.greased
    this.weight = hogObj["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]
    this.medal = hogObj["highest medal achieved"]
    this.image = hogObj.image
    Hog.all.push(this)
  }

  element(){
    const hogCard = document.createElement('div')
    hogCard.className = "hog-card"
    hogCard.dataset.id = this.id

    let hogName = document.createElement('h2')
    hogName.innerText = this.name
    hogCard.appendChild(hogName)

    let hogImg = document.createElement('img')
    hogImg.src = this.image
    hogCard.appendChild(hogImg)

    let info = document.createElement('span')
    info.innerHTML = `<p>Highest Medal Achieved: ${this.medal}</p><p>Speciality: ${this.specialty}</p><p>Weight: ${this.weight}</p><label for="greased">Greased:</label>
    `
    hogCard.appendChild(info)

    // checkbox "greased"
    let greaseBox = document.createElement('input')
    greaseBox.type = "checkbox"
    greaseBox.checked = this.greased
    greaseBox.name = "greased"

    greaseBox.addEventListener('click', HogController.greasedHandler)
    hogCard.appendChild(greaseBox)

    hogCard.appendChild(document.createElement('br'))
    hogCard.appendChild(document.createElement('br'))
    // delete button
    let dltBtn = document.createElement('button')
    dltBtn.innerText = "Delete"
    dltBtn.addEventListener("click", HogController.deleteHog)
    hogCard.appendChild(dltBtn)

    return hogCard
  }
}
