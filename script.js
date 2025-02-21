document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");

    form.addEventListener("submit", function (event) {
        let valid = true;

        // Reset errors
        usernameError.textContent = "";
        passwordError.textContent = "";

        // Validate username
        if (username.value.trim() === "") {
            usernameError.textContent = "Username is required";
            valid = false;
        }

        // Validate password
        if (password.value.trim() === "") {
            passwordError.textContent = "Password is required";
            valid = false;
        }

        // Prevent form submission if not valid
        if (!valid) {
            event.preventDefault();
        }
    });

    // Clear error when user starts typing
    username.addEventListener("input", () => (usernameError.textContent = ""));
    password.addEventListener("input", () => (passwordError.textContent = ""));
});
