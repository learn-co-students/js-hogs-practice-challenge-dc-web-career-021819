document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/hogs")
    .then(d => d.json())
    .then(hogs => {
      hogs.forEach(hog => {
        hogDetails = { ...hog };
        new Hog(hogDetails);
      });
    });

  const hogForm = document.getElementById("hog-form");
  hogForm.addEventListener("submit", e => {
    e.preventDefault();
    const f = e.target;
    const obj = {};
    obj.name = f.elements.name.value;
    obj.greased = f.elements.greased.value;
    obj.specialty = f.elements.specialty.value;
    obj["weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"] = f.elements.weight.value;
    obj["highest medal achieved"] = f.elements.medal.value;
    obj.image = f.elements.img.value;
    fetch("http://localhost:3000/hogs", {
      method: "POST",
      headers: { "Content-type": "Application/json" },
      body: JSON.stringify(obj)
    })
      .then(e => e.json())
      .then(e => new Hog(e));
  });
});
