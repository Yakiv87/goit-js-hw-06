const feedbackForm = document.querySelector(".login-form");
feedbackForm.addEventListener("submit", handelSubmit);
function handelSubmit(event) {
    event.preventDefault();
    const email = feedbackForm.elements.email.value;
    const password = feedbackForm.elements.password.value;
  
    if (email === '' || password === '') {
      alert('Всі поля повинні бути заповнені');
    } else {
      const formData = {
        email: email,
        password: password
      };
        console.log(formData);
        feedbackForm.reset();
};
}
