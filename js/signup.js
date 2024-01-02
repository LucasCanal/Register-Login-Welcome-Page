const isValidEmail = (email) => {
    const regex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(String(email).toLowerCase());
};

const isValidPassword = (password) => {
    return password.length >= 7;
};

const isPasswordConfirmed = (password, confirmPassword) => {
    return confirmPassword === password && password !== '';
};

const form = document.querySelector("#form");

const inputName = document.querySelector('input[name="name"]');
const inputEmail = document.querySelector('input[name="email"]');
const inputPassword = document.querySelector('input[name="password"]');
const inputConfirmPassword = document.querySelector('input[name="confirmPassword"]');
const msgSucess = document.querySelector('#msgSucess');

const msgInput = () => {
    isValidForm = true;
}

let isValidForm = false;

const resetInput = (element) => {
    element.classList.remove('invalid');
    element.nextElementSibling.classList.add('error-hidden');
};

const invalidateElement = (element) => {
    element.classList.add('invalid');
    element.nextElementSibling.classList.remove('error-hidden');
    isValidForm = false;
};

const validateInput = () => {
    isValidForm = true;

    if (!inputName.value) {
        invalidateElement(inputName);
    }

    if (!isValidEmail(inputEmail.value)) {
        invalidateElement(inputEmail);
    }

    if (!isValidPassword(inputPassword.value)) {
        invalidateElement(inputPassword);
    }

    if (!isPasswordConfirmed(inputPassword.value, inputConfirmPassword.value)) {
        invalidateElement(inputConfirmPassword);
    }

    if (isValidForm) {
        msgSucess.style.display = 'block';
    } else {
        msgSucess.style.display = 'none';
    }
};

const resetForm = () => {
    inputName.value = '';
    inputEmail.value = '';
    inputPassword.value = '';
    inputConfirmPassword.value = '';
};
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    validateInput();
    if (isValidForm) {
       console.log('validated and sent');

        let listUser =JSON.parse(localStorage.getItem('listUser') || '[]')
        listUser.push(
            {
                nameCad: inputName.value,
                emailCad: inputEmail.value,
                passwordCad: inputPassword.value
            }
        )

        localStorage.setItem('listUser', JSON.stringify(listUser))
        
        setTimeout(()=>{
            window.location.href = 'http://127.0.0.1:5500/signin.html'
        }, 3000)
        resetForm();

        msgInput()
        msgSucess.innerText = 'Registration completed ✔️';
        msgSucess.style.display = 'block';
    }
});

inputName.addEventListener("input", () => {
    resetInput(inputName);
});

inputEmail.addEventListener("input", () => {
    resetInput(inputEmail);
});

inputPassword.addEventListener("input", () => {
    resetInput(inputPassword);
});

inputConfirmPassword.addEventListener("input", () => {
    resetInput(inputConfirmPassword);
});