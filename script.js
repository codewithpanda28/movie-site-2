// Sample movie data (replace with your own data or fetch from an API)
const movies = [
    { id: 1, title: "G.O.A.T Movie", image: "./image/goat.jpg?text=Movie+1" },
    { id: 2, title: "Devara , Full Movie", image: "https://catimages.org/images/2024/09/27/Devara-2024-Hindi-Dubbed-HDTS-Full-Movie-HDHub4u.jpg?text=Movie+2" },
    { id: 3, title: "Salaar: Cease Fire – Part 1 (Hindi Dubbed)", image: "https://image.tmdb.org/t/p/w400/zAug8d6kpBMPyxZvY66q2x8csd.jpg?text=Movie+3" },
    { id: 4, title: "Adipurush (Hindi Dubbed)", image: "https://catimages.org/images/2023/08/11/Adipurush-2023-Hindi-Dubbed-HDRip-Full-Movie-HDHub4u.jpg?text=Movie+4" },
    { id: 5, title: "KGF Chapter 2 (Full Movie)", image: "https://myimg.click/images/2022/05/16/KGF-CHAPTER-2-2022-Hindi-ORG-WEBRip-Full-Movie.jpg?text=Movie+5" },
    { id: 6, title: " Radhe Shyam (Full Movie)", image: "https://myimg.click/images/2022/05/04/IMG_20210127_161759.jpg?text=Movie+6" },
    { id: 7, title: "Kalki (Hindi Dubbed)", image: "https://image.tmdb.org/t/p/w500/iNoPQCFktzDBiX5lQGksTZZPISb.jpg?text=Movie+7" },
    { id: 8, title: "The Family Star (Hindi Dubbed)", image: "https://image.tmdb.org/t/p/w500/byS7hZTqIC4CvSyo0ePnX4HmH7f.jpg?text=Movie+8" },
    { id: 9, title: "Stree 2 , Full Movie", image: "https://image.tmdb.org/t/p/w500/zgxpT5Q5pe3FtL99F0UOIglPGrQ.jpg?text=Movie+9" },
    { id: 10, title: "Bad Newz , Full Movie", image: "https://image.tmdb.org/t/p/w400/qDlqxGATpYBWqGciPB4tmQm3bFT.jpg?text=Movie+10" },
];

const movieContainer = document.getElementById('movieContainer');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const darkModeToggle = document.getElementById('darkModeToggle');

// Function to create movie cards
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <div class="buttons">
         <button onclick="watchMovie(${movie.id})">Watch </button> 
            <button onclick="downloadMovie(${movie.id})">Download</button>
        </div>
    `;
    return card;
}

// Function to display movies
function displayMovies(moviesToShow) {
    movieContainer.innerHTML = '';
    moviesToShow.forEach(movie => {
        const card = createMovieCard(movie);
        movieContainer.appendChild(card);
    });
}

// Initial display of all movies
displayMovies(movies);

// Search functionality
searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm)
    );
    displayMovies(filteredMovies);
}

// Watch movie function
function watchMovie(id) {
    window.location.href = `watch.html?id=${id}`;
}

// Download movie function
function downloadMovie(id) {
    window.location.href = `download.html?id=${id}`;
}

// Dark mode toggle
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

// Set dark mode as default
document.body.classList.add('dark-mode');
darkModeToggle.textContent = '☀️';
localStorage.setItem('darkMode', 'true');

// Check for saved dark mode preference (in case user manually set it to light mode)
if (localStorage.getItem('darkMode') === 'false') {
    document.body.classList.remove('dark-mode');
    darkModeToggle.textContent = '🌙';
}


const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
