let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', () => {
    let inputPassword = document.querySelector('#passwordBox')

    if (inputPassword.getAttribute('type') == 'password') {
        inputPassword.setAttribute('type', 'text')
    } else {
        inputPassword.setAttribute('type', 'password')
    }
})

function enter() {
    let email = document.querySelector('#emailBox')
    let emailLabel = document.querySelector('#emailLabel')

    let password = document.querySelector('#passwordBox')
    let passwordLabel = document.querySelector('#passwordLabel')

    let msgError = document.querySelector('#msgError')

    let userValidation = JSON.parse(localStorage.getItem('listUser'))
    let listUser = []

    let userValid = {
        name: 'null',
        email: 'null',
        password: 'null'
    }

    listUser = JSON.parse(localStorage.getItem('listUser'))

    if (email.value.trim() === '' && password.value.trim() === '') {
        email.setAttribute('style', 'border-color: #ff0000')
        emailLabel.setAttribute('style', 'color: #ff0000')
        password.setAttribute('style', 'border-color: #ff0000')
        passwordLabel.setAttribute('style', 'color: #ff0000')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Incorrect username or password'
        email.focus()
        return;
    }

    listUser.forEach((item) => {
        if (email.value == item.emailCad && password.value == item.passwordCad){
            
            userValid = {
                name: item.nameCad,
                email: item.emailCad,
                password: item.passwordCad
            }
        }
    })
    if (email.value == userValid.email && password.value == userValid.password){
        window.location.href = 'http://127.0.0.1:5500/index.html'
    
        let mathRandom = Math.random().toString(16).substr(2)
        let token = mathRandom + mathRandom
        
        localStorage.setItem('token', token)
        localStorage.setItem('userLogged', JSON.stringify(userValid))
    } else {
        email.setAttribute('style', 'border-color: #ff0000')
        emailLabel.setAttribute('style', 'color: #ff0000')
        password.setAttribute('style', 'border-color: #ff0000')
        passwordLabel.setAttribute('style', 'color: #ff0000')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Incorrect username or password'
        email.focus()
    }
}