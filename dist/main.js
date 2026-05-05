const getRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
};
const background = document.querySelector(".container__box");
const button = document.querySelector(".container__button");
const showRandomColor = () => {
    let randomColor = getRandomColor();
    console.log(randomColor);
    background.style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;
};
if (background instanceof HTMLDivElement && button instanceof HTMLButtonElement) {
    button.addEventListener("click", () => {
        showRandomColor();
    });
}
export {};
//# sourceMappingURL=main.js.map