document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".products article");

    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});
    