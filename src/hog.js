class Hog {
  static all = []
  constructor(id, name, speciality, greased, weight, medal, image){
    this.id = id
    this.name = name
    this.specialty = specialty
    this.greased = greased
    this.weight = weight
    this.medal = medal
    this.image = image
    all.push(this)
  }
  static initialize(){
    return Adapter.getHogs().then(Hog.renderHogs)
  }


  static renderHogs(hogs){
    hogs.forEach(hog => console.log(hog))

  }
}

class Adapter {
  static getHogs(){
    const url = "http://localhost:3000/hogs"
    return fetch(url).then(resp => resp.json())
  }

  static getHog(id){
    const url = `http://localhost:3000/hogs/${id}`
    return fetch(url).then(resp => resp.json())
  }

  static updateHog(hogObj){
    const url = `http://localhost:3000/hogs/${id}`
    delete hogObj.id
    const options = {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(hogObj)
    }
      return fetch(url, options).then(resp => resp.json())
    }
  }
