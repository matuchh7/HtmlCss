const email = document.querySelector("#email1");
const password = document.querySelector("#password1");
const repeatPassword = document.querySelector("#repeat-password1");
const registrationForm = document.querySelector("#formpage");
const rules = document.querySelector("#rules");
const registrationFormContainer = document.querySelector("#form-container");
const welcomeScreen = document.querySelector("#welcome-screen");

    function createUser(userData) {
        return fetch("http://127.0.0.1:5500/register", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json",
            },
        });
    }

    registrationForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if (password.value.length && password.value === repeatPassword.value) {
            createUser({
                email: email.value,
                password: password.value,
            })
                .then((response) => {
                    if (response.ok) {
                        registrationFormContainer.hidden = true;
                        welcomeScreen.hidden = false;
                    } else {
                        console.log("Back-end error");
                    }
                })
                .catch(() => {
                    console.log("Back-end error");
                });
        }
    });