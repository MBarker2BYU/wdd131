        
        let currentSlide = 0;

        const slides = document.querySelectorAll('.card-wrapper');
        const slider = document.querySelector('.slider');
        const dotsContainer = document.querySelector('#dots-container'); 

        localStorage.getItem('currentSlide') !== null ? currentSlide = parseInt(localStorage.getItem('currentSlide')) : currentSlide = 0; // Retrieve the current slide index from localStorage

        slides.forEach((_, index) => 
        {
            const dot = document.createElement('span');
        
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => showSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = document.querySelectorAll('.dot');        

        function showSlide(index) 
        {
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


            dots.forEach((dot, i) => 
            {
                dot.classList.toggle('active', i === currentSlide);
            });

            localStorage.setItem('currentSlide', currentSlide); // Save the current slide index to localStorage
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