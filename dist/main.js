let currentColor = [0, 0, 0];
const getRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
};
const background = document.querySelector(".main__color");
const button = document.querySelector(".container__button");
const result = document.querySelector(".color-select__result");
const select = document.querySelector(".color-select");
const rgbToHex = (r, g, b) => {
    return "#" + [r, g, b]
        .map(x => x.toString(16).padStart(2, "0"))
        .join("");
};
const renderColor = () => {
    const [r, g, b] = currentColor;
    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hex = rgbToHex(r, g, b);
    background.style.backgroundColor = rgb;
    if (select.value === "rgb") {
        result.textContent = rgb;
    }
    else {
        result.textContent = hex;
    }
};
const showRandomColor = () => {
    currentColor = getRandomColor();
    renderColor();
};
button.addEventListener("click", showRandomColor);
select.addEventListener("change", renderColor);
renderColor();
export {};
//# sourceMappingURL=main.js.map