const image = document.querySelector(".animate");

document.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    image.style.setProperty("--translateX", `-${x / 20}px`);
    image.style.setProperty("--translateY", `-${y / 20}px`);
});

image.addEventListener("click", () => {
    image.classList.toggle("disabled");
});
