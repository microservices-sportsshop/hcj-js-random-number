document.addEventListener("DOMContentLoaded", () => {
    const number = document.querySelector(".number");
    const btn = document.querySelector(".generate");

    const generateNumber = () => {
        const randomNumber = Math.floor(Math.random() * 1001 ); // Generate number btn 1 and 10
        number.innerHTML = randomNumber;
    };

    btn.addEventListener("click", generateNumber);

    generateNumber();
});
