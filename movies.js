import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {q: 'game of thr'},
  headers: {
    'x-rapidapi-key': '953444efcdmshc2cfa92533986f1p12d3f4jsn47f13797ce78',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});