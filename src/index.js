document.addEventListener("DOMContentLoaded", () => {

  // Constants
  const hogContainer = document.getElementById("hog-container")
  const nameField = document.getElementById("name")
  const specialtyField = document.getElementById("specialty")
  const medalField = document.getElementById("medal")
  const weightField = document.getElementById("weight")
  const imgField = document.getElementById("img")
  const checkField = document.getElementById("checkbox")

  let hogHTML = ""

  displayAllHogs()

  // Listeners
  document.addEventListener("click", clickHandler)
  //Functions
  function clickHandler(event){
    // Submit handler
    if(event.target.id === "submit"){
      event.preventDefault()
      fetch("http://localhost:3000/hogs", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          "name": nameField.value,
          "specialty": specialtyField.value,
          "greased": checkField.checked,
          "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water": weightField.value,
          "highest medal achieved": medalField.value,
          "image": imgField.value
        })
      })
      .then(displayAllHogs)
    }
    // Delete handler
    if(event.target.className === "delete"){
      fetch(`http://localhost:3000/hogs/${event.target.id}`, {
        method: "DELETE"
      }).then(displayAllHogs)
    }
    // Checkbox Handler
    if(event.target.className === "hog-check"){
      fetch(`http://localhost:3000/hogs/${parseInt(event.target.id)}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          "greased": event.target.checked
          })
      })
    }
  }
  function displayAllHogs(){
    hogHTML = ""
    fetch("http://localhost:3000/hogs")
    .then((response) => response.json())
    .then((response) => {response.forEach((hog) => {
        hogHTML = createHogHTML(hog) + hogHTML
      })
      hogContainer.innerHTML = hogHTML
    })
  }
  function createHogHTML(hog){
    return `<div class="hog-card">
    <h2>${hog.name}</h2>
    <div><b>Specialty:</b> ${hog.specialty}</div>
    <div><b>Weight:</b> ${hog[ "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"]}</div>
    <div><b>Highest Medal Earned:</b> ${hog["highest medal achieved"]}</div>
    <img src="${hog.image}" alt="">
    <div class="">
    <span>greased:
      <input id="${hog.id}-check" class="hog-check" type="checkbox" name="greased" value="greased" ${greaseCheck(hog.greased)}>
    </span>
    <span>
    <button id="${hog.id}" class="delete" type="delete" name="delete">
    Delete
    </button>
    </span>
    </div>
    </div>`
  }
  function greaseCheck(boolean){
    if (boolean){
      return "checked"
    }
    else{
      return ""
    }
  }
})
