function openyt() {
    window.open("https://youtu.be/c52kX7VtIsM?si=ng3dOtJYUko7hkNt", "_blank");
}

function openform() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLScqtbzqa6E84UunYI9gHjfHZkaWDOO3Cjngp-Pb9fzlLCXSIQ/viewform", "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelectorAll(".font-2, .font-3").forEach((el) => {
            el.classList.add("show-up");
        });
    }, 500); // Delay sebelum mulai animasi
});
