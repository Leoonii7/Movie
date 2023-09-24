// Sample movie data
const movies = [
    { title: 'Movie 1', poster: 'movie1.jpg', description: 'Description of Movie 1' },
    { title: 'Movie 2', poster: 'movie2.jpg', description: 'Description of Movie 2' },
    // Add more movie objects as needed
];

// Function to create movie cards
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('movie-card');

    const poster = document.createElement('img');
    poster.src = movie.poster;
    poster.alt = movie.title;

    const title = document.createElement('h3');
    title.textContent = movie.title;

    const description = document.createElement('p');
    description.textContent = movie.description;

    card.appendChild(poster);
    card.appendChild(title);
    card.appendChild(description);

    return card;
}

// Function to populate movie list
function populateMovieList() {
    const movieContainer = document.getElementById('movie-container');

    movies.forEach((movie) => {
        const card = createMovieCard(movie);
        movieContainer.appendChild(card);
    });
}

// Handle movie suggestion form submission
const suggestionForm = document.getElementById('movie-suggestion-form');
suggestionForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const movieTitleInput = document.getElementById('movie-title');
    const suggestionsContainer = document.getElementById('suggestions-container');

    const movieTitle = movieTitleInput.value.trim();
    if (movieTitle) {
        const suggestion = document.createElement('div');
        suggestion.classList.add('suggestion');
        suggestion.textContent = `Suggested Movie: ${movieTitle}`;

        suggestionsContainer.appendChild(suggestion);

        // Clear the input field
        movieTitleInput.value = '';
    }
});

// Initialize the movie list
populateMovieList();

    // Function to validate the card number format (16 digits, grouped in sets of 4)
    function validateCardNumber(cardNumber) {
        const cardNumberPattern = /^\d{4} \d{4} \d{4} \d{4}$/;
        return cardNumberPattern.test(cardNumber);
    }

    // Function to validate the expiry date format (MM/YY)
    function validateExpiryDate(expiryDate) {
        const expiryDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
        return expiryDatePattern.test(expiryDate);
    }

    // Function to validate the CVV length (3 digits)
    function validateCVV(cvv) {
        const cvvPattern = /^\d{3}$/;
        return cvvPattern.test(cvv);
    }

    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get form inputs
        const cardNumber = document.getElementById("cardNumber").value;
        const expiryDate = document.getElementById("expiryDate").value;
        const cvv = document.getElementById("cvv").value;
        const name = document.getElementById("name").value;

        // Validate card number, expiry date, and CVV
        if (!validateCardNumber(cardNumber)) {
            alert("Invalid card number format. Please enter a valid 16-digit card number.");
        } else if (!validateExpiryDate(expiryDate)) {
            alert("Invalid expiry date format. Please enter a valid MM/YY format.");
        } else if (!validateCVV(cvv)) {
            alert("Invalid CVV length. Please enter a valid 3-digit CVV.");
        } else {
            // Form is valid; show success message and clear form inputs
            const form = document.getElementById("yourFormId"); // Replace "yourFormId" with your form's actual ID
            form.reset();
            


        }
    }


