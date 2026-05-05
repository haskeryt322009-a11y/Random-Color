
type ColorRGB =  [red: number, green: number, blue: number]

const getRandomColor = (): ColorRGB => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return [r,g,b];
}


const background = document.querySelector(".container__box") as HTMLDivElement;
const button = document.querySelector(".container__button") as HTMLButtonElement;


const showRandomColor = () => {
    let randomColor = getRandomColor();
    console.log(randomColor);
        background.style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`;

};

button.addEventListener("click", (): void => {
    showRandomColor();

});


