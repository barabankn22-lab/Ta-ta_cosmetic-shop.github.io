document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitButton = document.querySelector("button[type='submit']");
    const validationMessage = document.createElement("div");
    validationMessage.classList.add("validation-message");
    form.appendChild(validationMessage);

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        validationMessage.textContent = "";

        const name = form.querySelector("input[name='name']").value;
        const email = form.querySelector("input[name='email']").value;

        if (!name || !email) {
            validationMessage.textContent = "Please fill in all required fields.";
            return;
        }

        if (!validateEmail(email)) {
            validationMessage.textContent = "Please enter a valid email address.";
            return;
        }

        submitButton.disabled = true;
        form.submit();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
