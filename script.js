// Sample movie data (replace with your own data or fetch from an API)
const movies = [
    { id: 1, title: "G.O.A.T Movie", image: "./image/goat.jpg?text=Movie+1" },
    { id: 2, title: "Devara , Full Movie", image: "https://catimages.org/images/2024/09/27/Devara-2024-Hindi-Dubbed-HDTS-Full-Movie-HDHub4u.jpg?text=Movie+2" },
    { id: 3, title: "Maharaja Movie", image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEim0Tcu9mqT0pRPIWJ2W__2SzZNCc38t8pozRazGWcYLlwqvM6TtdVUGW04GLKfulCSG7gQRW-NmQeKdS_wJMdqkmPnywW-KJWBjxw3d7FB_pUeWVOKl2iYVyj1ZLsIsou0DdB7CqQH5DTlCscDngo0nLBRLbW7YIPzI2gz62guepecQW1kX-CeMPgm2kg/s320/Maharaja-2024-Hindi-Dubbed-HDRip-Full-Movie-HDHub4u.jpg?text=Movie+4" },
    { id: 4, title: "The Family Star ", image: "https://image.tmdb.org/t/p/w500/byS7hZTqIC4CvSyo0ePnX4HmH7f.jpg?text=Movie+8" },
    { id: 5, title: "Vicky Vidya Ka Woh Wala Video", image: "https://image.tmdb.org/t/p/w400/77gbFuFUfXx3OWv6pGhOAfHMBpg.jpg?text=Movie+5" },
    { id: 6, title: " Pathaan (Full Movie)", image: "https://catimages.org/images/2023/03/22/Pathaan-2023-Hindi-HDRip-Full-Movie-HDHub4u.jpg?text=Movie+6" },
    { id: 7, title: "Stree 2 (Full Movie)", image: "https://image.tmdb.org/t/p/w500/zgxpT5Q5pe3FtL99F0UOIglPGrQ.jpg?text=Movie+7" },
    { id: 8, title: "Salaar: Part 1 (Hindi Dubbed)", image: "https://image.tmdb.org/t/p/w400/zAug8d6kpBMPyxZvY66q2x8csd.jpg?text=Movie+3" },
    // { id: 9, title: "Stree 2 , Full Movie", image: "https://image.tmdb.org/t/p/w500/zgxpT5Q5pe3FtL99F0UOIglPGrQ.jpg?text=Movie+9" },
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
