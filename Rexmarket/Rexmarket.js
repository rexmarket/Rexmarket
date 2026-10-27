
/* =================================
   REXMARKET AUTO BANNER
================================= */

(() => {
    const slider = document.getElementById("bannerSlider");
    const track = document.getElementById("bannerTrack");
    const dots = document.querySelectorAll(".banner-dot");

    if (!slider || !track || dots.length === 0) return;

    const total = dots.length;
    let current = 0;
    let autoSlide;

    function showBanner(index) {
        current = (index + total) % total;

        track.style.transform = `translateX(-${current * 100}%)`;

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === current);
        });
    }

    function startAutoSlide() {
        clearInterval(autoSlide);

        autoSlide = setInterval(() => {
            showBanner(current + 1);
        }, 4000);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showBanner(index);
            startAutoSlide();
        });
    });

    /* Geser banner dengan jari */
    let startX = 0;
    let startY = 0;

    slider.addEventListener("touchstart", (event) => {
        startX = event.touches[0].clientX;
        startY = event.touches[0].clientY;
    }, { passive: true });

    slider.addEventListener("touchend", (event) => {
        const endX = event.changedTouches[0].clientX;
        const endY = event.changedTouches[0].clientY;
        const diffX = endX - startX;
        const diffY = endY - startY;

        if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
            showBanner(current + (diffX < 0 ? 1 : -1));
            startAutoSlide();
        }
    }, { passive: true });

    showBanner(0);
    startAutoSlide();
})();
              
