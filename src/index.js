// document.addEventListener('DOMContentLoaded', HogController.init)
document.addEventListener('DOMContentLoaded', loadPigs)

function loadPigs(){
  HogController.init()
  const hogForm = document.querySelector('#hog-form ')
  hogForm.lastElementChild.addEventListener('click', HogController.newHog)
}
