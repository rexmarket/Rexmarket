
/* =====================================
   HEADER GLOWING PARTICLES
===================================== */

const headerParticles = document.getElementById("headerParticles");

if (
    headerParticles &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement("span");

        particle.className = "header-particle";

        const size = Math.random() * 4 + 2;
        const duration = Math.random() * 4 + 4;
        const delay = Math.random() * 8;

        particle.style.left = `${Math.random() * 100}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `-${delay}s`;

        headerParticles.appendChild(particle);
    }
}

