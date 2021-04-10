var mainContainer = document.getElementById("myData");
var typeText = document.getElementById("type")
var div = document.createElement("div");
var text = document.getElementById("myData").innerText;
var button = document.getElementById("button")

function getData() {
fetch("https://www.boredapi.com/api/activity/")
    .then(res => {
        return res.json()
    })
    //.then(data =>  console.log(data.activity))
    .then(data => mainContainer.innerText = data.activity)
    .catch(error => console.log("error"))
}

button.addEventListener("click", buttonClick)

function buttonClick() {
    getData()
    
  }   