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
  static greasedHandler(event){
    // const updateObj = {}
    const id = event.target.parentNode.dataset.id
    Adapter.getHog(id)
    .then(function(hogObj){
    Adapter.updateHog( {id: hogObj.id, greased: HogController.changeStatus(hogObj.greased)}
  )
    }
    )
  }
}
