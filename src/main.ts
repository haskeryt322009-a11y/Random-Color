
type ColorRGB = [red: number, green: number, blue: number]

const getRandomColor = (): ColorRGB => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}


const background = document.querySelector(".main__color") as HTMLDivElement;
const button = document.querySelector(".container__button") as HTMLButtonElement;
const id = document.querySelector(".color-select__result") as HTMLDivElement;
const select = document.querySelector(".color-select") as HTMLSelectElement;

const rgbToHex = (r: number, g: number, b: number): string => {
    return "#" + [r, g, b]
        .map(x => x.toString(16).padStart(2, "0"))
        .join("");
};


if (
    background instanceof HTMLDivElement &&
    button instanceof HTMLButtonElement &&
    id instanceof HTMLDivElement &&
    select instanceof HTMLSelectElement
) {
    const showRandomColor = (): void => {
        const [r, g, b] = getRandomColor();
        const mode = select.value;
        
        if (mode === "rgb") {
            background.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            id.textContent = `${r}, ${g}, ${b}`;
        }
        else {
            const hex = rgbToHex(r, g, b);
            background.style.backgroundColor = hex;
            id.textContent = `${hex}`;
        }
    };

        button.addEventListener("click", (): void => {
            showRandomColor();
        });}

