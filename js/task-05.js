const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener('input', ()=>{
    const name = nameInput.value;

    if (name.trim() === '') {
      nameOutput.textContent = 'Anonymous';
    } else {
      nameOutput.textContent = name;
    }
  });
console.log(nameInput);