document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const items = document.querySelectorAll('.slider li');
    let itemsPerSlide = window.innerWidth > 850 ? 2 : 1;
    let maxIndex = Math.ceil(items.length / itemsPerSlide) - 1;
    let currentIndex = 0;

    function updateSettings() {
        itemsPerSlide = window.innerWidth > 768 ? 2 : 1;
        maxIndex = Math.ceil(items.length / itemsPerSlide) - 1;
        currentIndex = 0; 
        moveSlider(currentIndex);
    }

    window.addEventListener('resize', updateSettings);

    function moveSlider(index) {
        const itemWidth = items[0].offsetWidth;
        sliderContainer.style.transform = `translateX(${-index * itemWidth * itemsPerSlide}px)`;

        prevBtn.style.display = index === 0 ? 'none' : 'block';
        nextBtn.style.display = index === maxIndex ? 'none' : 'block';
    }
  
    // 이전
    prevBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            moveSlider(currentIndex);
        }
    });
  
    // 다음
    nextBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (currentIndex < maxIndex) {
            currentIndex++;
            moveSlider(currentIndex);
        }
    });

    moveSlider(currentIndex);
});