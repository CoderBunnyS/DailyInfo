const url = "https://api.thecatapi.com/v1/images/search"

let headers = {headers: {"x-api-key": "d292f7ac-c042-4358-90b3-6f8684b0955f"}}
let randomCat = document.querySelector(".randomCatImage")
let button = document.querySelector(".randomButton")
let list = document.querySelector(".category-keys")
let listItems = document.querySelectorAll("li")
let form = document.querySelector("form")
let search = document.querySelector(".searchButton")
let searchCat = document.querySelector(".categoryCatImage")

button.addEventListener("click", function(e){
    e.preventDefault();
    fetch(url,headers)
    .then(res => res.json())
    .then(data => randomCat.src = data[0].url)
    
})

form.addEventListener("submit", function(e){
    e.preventDefault();
    let input = document.querySelector(".input")
    let url2 = `https://api.thecatapi.com/v1/images/search?category_ids=${input.value}`
    fetch(url2,headers)
    .then(res => res.json())
    .then(data => searchCat.src = data[0].url)
    
})
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
