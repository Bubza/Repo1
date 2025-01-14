const API_KEY = ""; // Add your API key

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('search-btn').addEventListener('click', function (ev) {
        ev.preventDefault();
        let title = document.getElementById('search').value;

        if (title.trim()) {
            fetchMovie(title);
            document.getElementById('details-page').style.display = 'block'; // Show the details page
        } else {
            document.getElementById('details-page').style.display = 'none'; // Hide the details page
        }
    });
});

function fetchMovie(title) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}`)
        .then(response => response.json())
        .then(data => {
            let movieData = data.results[0];

            document.getElementById('title').textContent = data.title;
            document.getElementById('release_date').textContent = data.release_date;
            document.getElementById('overview').textContent = data.overview;
            document.getElementById('vote_average').textContent = data.vote_average;
            document.getElementById('original_language').textContent = data.original_language;
            document.getElementById('poster').src = 'https://image.tmdb.org/t/p/w500' + data.poster_path;
        })
        .catch(error => console.error(error));
}