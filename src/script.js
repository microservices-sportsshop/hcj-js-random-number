document.addEventListener("DOMContentLoaded", () => {
    const number = document.querySelector(".number");
    const btn = document.querySelector(".generate");

    const generateNumber = () => {
        const randomNumber = Math.floor(Math.random() * 1001); // Generate number between 0 and 1000
        number.textContent = randomNumber;
    };

    btn.addEventListener("click", generateNumber);

    generateNumber(); // Initial call to set the number on load
});
