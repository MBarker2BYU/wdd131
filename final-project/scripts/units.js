let currentSlide = 0;
let slides = [];
let dots = [];

const slider = document.querySelector('#slider');
const dotsContainer = document.querySelector('#dots-container');

// Dynamically create cards from fetched data
function loadCards(cardData) 
{
    cardData.forEach((card, index) => {
        const cardWrapper = document.createElement('div');
        cardWrapper.classList.add('card-wrapper');

        const unitCard = document.createElement('div');
        unitCard.classList.add('unit-card');

        const cardHeading = document.createElement('div');
        cardHeading.classList.add('card-heading');
    
        const h2 = document.createElement('h2');
        h2.textContent = card.title;
        cardHeading.appendChild(h2);

        const cardInfo = document.createElement('p');
        cardInfo.classList.add('unit-card-info');
    
        const img = document.createElement('img');
        img.src = card.image;
        img.alt = card.title;
        img.setAttribute('loading', 'lazy'); // Lazy load images for better performance

        cardInfo.appendChild(img);
        cardInfo.innerHTML += card.description;

        unitCard.appendChild(cardHeading);
        unitCard.appendChild(cardInfo);
        cardWrapper.appendChild(unitCard);
        slider.appendChild(cardWrapper);
    });
}

// Dynamically create dots
function createDots(cardData) {
    cardData.forEach((_, index) => 
    {
        const dot = document.createElement('span');
        dot.classList.add('dot');
    
        if (index === 0) dot.classList.add('active');
    
        dot.addEventListener('click', () => showSlide(index));
        dotsContainer.appendChild(dot);
    });
}

function showSlide(index) 
{
    if (slides.length === 0) return; // Prevent errors if slides aren't loaded

    if (index >= slides.length) 
    {
        currentSlide = 0;
    } 
    else if (index < 0) 
    {
        currentSlide = slides.length - 1;
    } 
    else 
    {
        currentSlide = index;
    }
    
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Update active dot
    dots.forEach((dot, i) => 
    {
        dot.classList.toggle('active', i === currentSlide);
    });

    localStorage.setItem('currentSlide', currentSlide); // Save the current slide index to localStorage
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Fetch data from JSON file
fetch('data/elite-units.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to load cards.json');
        }
        return response.json();
    })
    .then(cardData => {
        // Load cards and dots
        loadCards(cardData);
        createDots(cardData);

        // Initialize slides and dots after loading
        slides = document.querySelectorAll('.card-wrapper');
        dots = document.querySelectorAll('.dot');

        localStorage.getItem('currentSlide') !== null ? currentSlide = parseInt(localStorage.getItem('currentSlide')) : currentSlide = 0; // Retrieve the current slide index from localStorage

        // Show the first slide
        showSlide(currentSlide);
    })
    .catch(error => {
        console.error('Error loading JSON:', error);

        const errorMessage = document.createElement('div');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = 'Failed to load card data. Please try again later.';
        
        document.querySelector('.slider-container').appendChild(errorMessage);
    });