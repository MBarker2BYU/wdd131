let currentSlide = 0;
        const slides = document.querySelectorAll('.card-wrapper');
        const slider = document.querySelector('.slider');

        function showSlide(index) {
            if (index >= slides.length) {
                currentSlide = 0;
            } else if (index < 0) {
                currentSlide = slides.length - 1;
            } else {
                currentSlide = index;
            }
            
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        function nextSlide() 
        {
            showSlide(currentSlide + 1);
        }

        function prevSlide() 
        {
            showSlide(currentSlide - 1);
        }

        
        showSlide(currentSlide);