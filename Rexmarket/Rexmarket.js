// =====================================
// REXMARKET - FIRE BACKGROUND ANIMATION
// =====================================

const fireGlow = document.querySelector(".fire-glow");
const fireParticles = document.getElementById("fireParticles");

if (fireGlow && fireParticles) {
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    // Buat partikel bara
    if (!reduceMotion) {
        const particleCount = 28;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement("span");

            particle.className = "fire-particle";

            const size = Math.random() * 3 + 2;
            const duration = Math.random() * 7 + 7;
            const delay = Math.random() * 12;

            particle.style.left = `${Math.random() * 100}%`;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.animationDuration = `${duration}s`;
            particle.style.animationDelay = `-${delay}s`;

            fireParticles.appendChild(particle);
        }
    }

    let ticking = false;

    function updateFireBackground() {
        const scrollableHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;

        const progress = scrollableHeight > 0
            ? Math.min(
                1,
                Math.max(0, window.scrollY / scrollableHeight)
            )
            : 0;

        // Semakin ke bawah, cahaya api semakin kuat
        const opacity = 0.25 + progress * 0.65;
        const movement = 25 - progress * 25;

        fireGlow.style.opacity = opacity;
        fireGlow.style.transform = `translateY(${movement}%)`;

        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(updateFireBackground);
            ticking = true;
        }
    }, { passive: true });

    updateFireBackground();
}
