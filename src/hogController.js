class HogController {
  static init(){
    Adapter.getHogs().then(HogController.renderHogs)
  }

  static renderHog(hog){
    const container = document.querySelector("#hog-container")
    const newHog = new Hog(hog)
    container.append(newHog.element())
  }

  static renderHogs(hogs){
    const container = document.querySelector("#hog-container")
    container.innerHTML = ""
    hogs.forEach(hog => HogController.renderHog(hog))
  }

  static changeStatus(status){
    return !status
  }

  static deleteHog(event){
    const id = event.target.parentNode.dataset.id
    Adapter.destroyHog(id)
    .then(HogController.init)
  }

  static newHog(event){
    event.preventDefault()
    const hogForm = event.target.parentNode
    const hogObj = {}
    hogObj.name = hogForm.name.value
    hogObj.specialty = hogForm.specialty.value
    hogObj["highest medal achieved"] = hogForm.medal.value
    hogObj["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] = hogForm.weight.value
    hogObj.image = hogForm.img.value
    hogObj.greased = hogForm.greased.checked

    Adapter.createHog(hogObj)
    .then(HogController.renderHog)
    hogForm.reset()
  }

  static greasedHandler(event){
    const id = event.target.parentNode.dataset.id
    Adapter.getHog(id)
    .then(function(hogObj){
    Adapter.updateHog( {id: hogObj.id, greased: HogController.changeStatus(hogObj.greased)}
  )
    }
    )
  }
}
