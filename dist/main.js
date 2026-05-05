const getRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
};
const background = document.querySelector(".main__color");
const button = document.querySelector(".container__button");
const id = document.querySelector(".color-select__result");
const select = document.querySelector(".color-select");
const rgbToHex = (r, g, b) => {
    return "#" + [r, g, b]
        .map(x => x.toString(16).padStart(2, "0"))
        .join("");
};
if (background instanceof HTMLDivElement &&
    button instanceof HTMLButtonElement &&
    id instanceof HTMLDivElement &&
    select instanceof HTMLSelectElement) {
    const showRandomColor = () => {
        const [r, g, b] = getRandomColor();
        const mode = select.value;
        if (mode === "rgb") {
            background.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            id.textContent = `RGB: ${r}, ${g}, ${b}`;
        }
        else {
            const hex = rgbToHex(r, g, b);
            background.style.backgroundColor = hex;
            id.textContent = `HEX: ${hex}`;
        }
    };
    button.addEventListener("click", () => {
        showRandomColor();
    });
}
export {};
//# sourceMappingURL=main.js.map