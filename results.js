// API 

const apiKey = '45a5a9143967dd1807e727450f180279';
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-ES&page=1`;

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.results); 
  })
  .catch(function(error) {
    console.error('Error al obtener datos:', error);
  });
