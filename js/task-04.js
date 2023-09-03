const counterValue = document.querySelector("#value");
let currentValue = 0;

const decrement = document.querySelector("[data-action = 'decrement']");
const increment = document.querySelector("[data-action = 'increment']");

decrement.addEventListener(
    "click", () => {
        currentValue -= 1;
        counterValue.textContent = currentValue;
    }
);
increment.addEventListener(
    "click", () => {
        currentValue += 1;
        counterValue.textContent = currentValue;
    }
);
console.dir(decrement);
console.dir(increment);