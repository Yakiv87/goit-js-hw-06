const input = document.querySelector("#validation-input");
input.addEventListener('blur', () => {
const length = parseInt(input.dataset.length);
const value = input.value.trim();

if(value.length === length) {
    input.classList.add("valid");
} else {
    input.classList.add("invalid");
}
});
console.log(input);