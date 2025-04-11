document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cards = document.querySelectorAll('.card');
    const sliderWrapper = document.querySelector('.slider-wrapper');
    let currentIndex = 0;

    // Debugging
    if (!slider) console.error('Slider element not found!');
    if (!prevBtn) console.error('Previous button not found!');
    if (!nextBtn) console.error('Next button not found!');
    if (!sliderWrapper) console.error('Slider wrapper not found!');
    if (cards.length === 0) console.error('No cards found!');

    function updateSlider() 
    {
        if (cards.length === 0) return;

        const cardWidth = cards[0].offsetWidth;
        const gap = 24; // 1.5rem
        const wrapperWidth = sliderWrapper.offsetWidth;
        const totalCardWidth = cardWidth + gap;
        const threeCardsWidth = (cardWidth * 3) + (gap * 2); // Width of 3 cards + 2 gaps
        const padding = 24; // .slider padding: 1.5rem

        // Calculate offset to center three cards
        const offset = (wrapperWidth - threeCardsWidth) / 2 - (currentIndex * totalCardWidth) + padding;

        slider.style.transform = `translateX(${offset}px)`;
        console.log('Offset:', offset, 'CurrentIndex:', currentIndex, 'CardWidth:', cardWidth, 'WrapperWidth:', wrapperWidth, 'ThreeCardsWidth:', threeCardsWidth);
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            console.log('Previous button clicked, currentIndex:', currentIndex);
            if (currentIndex > 0) {
                currentIndex--;
                updateSlider();
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            console.log('Next button clicked, currentIndex:', currentIndex);
            if (currentIndex < cards.length - 3) { // Stop when last 3 cards are in view
                currentIndex++;
                updateSlider();
            }
        });
    }

    window.addEventListener('resize', updateSlider);
    updateSlider();
});