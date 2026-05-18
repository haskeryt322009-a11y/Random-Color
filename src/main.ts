
type ColorRGB = [red: number, green: number, blue: number]

let currentColor: ColorRGB = [0, 0, 0];

const getRandomColor = (): ColorRGB => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}


const background = document.querySelector(".main__color") as HTMLDivElement;
const button = document.querySelector(".container__button") as HTMLButtonElement;
const result = document.querySelector(".color-select__result") as HTMLDivElement;
const select = document.querySelector(".color-select") as HTMLSelectElement;

const rgbToHex = (r: number, g: number, b: number): string => {
    return "#" + [r, g, b]
        .map(x => x.toString(16).padStart(2, "0"))
        .join("");
};


const renderColor = (): void => {
    const [r, g, b] = currentColor;

    const rgb = `rgb(${r}, ${g}, ${b})`;
    const hex = rgbToHex(r, g, b);

    background.style.backgroundColor = rgb;

    if (select.value === "rgb") {
        result.textContent = rgb;
    } else {
        result.textContent = hex;
    }
};

const showRandomColor = (): void => {
    currentColor = getRandomColor();
    renderColor();
};

button.addEventListener("click", showRandomColor);
select.addEventListener("change", renderColor);

renderColor();