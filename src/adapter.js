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
    const url = `http://localhost:3000/hogs/${hogObj.id}`
    delete hogObj.id
    const options = {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(hogObj)
    }
      return fetch(url, options).then(resp => resp.json())
    }

    static destroyHog(id){
      const url = `http://localhost:3000/hogs/${id}`
      const options = {
        method: "DELETE",
        headers: {"Content-Type": "application/json"}
      }
      return fetch(url, options).then(resp => resp.json())
    }
  }
