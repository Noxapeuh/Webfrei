const imageToZoom = document.querySelector('.image-principal');

window.addEventListener('scroll', () => {
    const rect = imageToZoom.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {
        let scrollProgress = (windowHeight - rect.top) / windowHeight;
        scrollProgress = Math.max(0, Math.min(1, scrollProgress));

        const minZoom = 0.5; // Taille de départ
        const maxZoom = 1.0; // Taille d'arrivée

        const currentZoom = minZoom + (maxZoom - minZoom) * scrollProgress;

        imageToZoom.style.transform = `scale(${currentZoom})`;
    }
});