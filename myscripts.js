var mainContainer = document.getElementById("myData");
var typeText = document.getElementById("type")
var div = document.createElement("div");
var text = document.getElementById("myData").innerText;
var button = document.getElementById("button")

//div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;

function getData() {
fetch("https://www.boredapi.com/api/activity/")
    .then(res => {
        return res.json()
    })
    //.then(data =>  console.log(data.activity))
    .then(data => mainContainer.innerText = data.activity)
    //.then(data => typeText.innerText = data.type)
    .catch(error => console.log("error"))
}

button.addEventListener("click", buttonClick)

function buttonClick() {
    //document.getElementById("button").innerText = Date();
    getData()
    
  }   