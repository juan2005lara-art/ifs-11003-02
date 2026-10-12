document.addEventListener("DOMContentLoaded", () => {
    const frame = document.querySelector(".page-frame");
    if (frame) {
        // Trigger the CSS fade-in animation
        frame.classList.add("fade-in");
    }
});