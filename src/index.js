const HOGS_URL = "http://localhost:3000/hogs";
document.addEventListener("DOMContentLoaded", runner());

function runner(e){
  let hogContainer = document.getElementById("hog-container");
  fetch(HOGS_URL)
  .then(res => res.json())
  .then(data => {
    data.forEach(item => {
      let hog = new Hog(item);
      hogContainer.appendChild(hog.createHogCard());
    })
  })

  let newHogForm = document.getElementById("hog-form");
  newHogForm.addEventListener("submit", newHogFormEventHandler);
}

function newHogFormEventHandler(event){
  let hogContainer = document.getElementById("hog-container");
  event.preventDefault();
  let inputFields = Array.from(event.target.querySelectorAll("input"));
  let hogData = {}
  hogData[`${inputFields[0].name}`] =  inputFields[0].value;
  hogData[`${inputFields[1].name}`] =  inputFields[1].value;
  hogData[`${inputFields[2].name}`] =  inputFields[2].value;
  hogData[`${inputFields[3].name}`] =  inputFields[3].value;
  hogData[`${inputFields[4].name}`] =  inputFields[4].value;
  hogData[`${inputFields[5].name}`] =  inputFields[5].checked;

  fetch(HOGS_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(hogData)
  })
  .then(res => console.log(res.json()))
  let hog = new Hog(hogData);
  hogContainer.appendChild(hog.createHogCard());
}

function greaseCheckboxEventHandler(event){
  let hogCard = event.target.parentNode;
  hogId = parseInt(hogCard.dataset.id.replace(/\D/g, ""));
  let hog = Hog.all.find(hog => hog.id === hogId)
  hog.greased = !hog.greased;
  fetch(HOGS_URL + `/${hogId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(hog.toJsonObj())
  })
  .then(res => res.json())
}

function deleteButtonHandler(event){
  let hogCard = event.target.parentNode;
  hogId = parseInt(hogCard.dataset.id.replace(/\D/g, ""));
  let hog = Hog.all.find(hog => hog.id === hogId)
  fetch(HOGS_URL + `/${hogId}`, {
    method: "DELETE"
  })
  hogCard.remove();
}
