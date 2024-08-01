var mainContainer = document.getElementById("myData");
var button = document.getElementById("button");

function getData() {
  const proxyUrl = 'https://api.allorigins.win/get?url=';
  const targetUrl = encodeURIComponent('https://bored-api.appbrewery.com/random');
  const uniqueUrl = `${proxyUrl}${targetUrl}&timestamp=${new Date().getTime()}`;
  
  fetch(uniqueUrl)
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok ' + res.statusText);
      }
      return res.json();
    })
    .then(data => {
      const parsedData = JSON.parse(data.contents);
      console.log(parsedData);
      mainContainer.innerText = parsedData.activity;
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

button.addEventListener("click", buttonClick);

function buttonClick() {
  getData();
}
