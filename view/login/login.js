const emailTxt = document.querySelector('#email')
const senhaTxt = document.querySelector('#senha')
const entrar = document.querySelector('#entrar')

const span0 = document.querySelector('.span0')
const span1 = document.querySelector('.span1')
const span2 = document.querySelector('.span2')

function openModal() {
    const modalBemVindo = document.querySelector('#modalBemVindo')
    modalBemVindo.textContent = `Bem Vindo ${localStorage.getItem('Nome')}`
    const closeModal = document.querySelector('#closeModal')
    const events = [fade, closeModal]
    toogleModal()
    events.map((e)=>{
        e.addEventListener('click', ()=>{
            toogleModal()
            location.href = '../../index.html'
        })
    })
}

function modalLogin() {
    const nome = localStorage.getItem('Nome')
    const modalBemVindo = document.querySelector('#modalBemVindo')
    modalBemVindo.textContent = `Bem Vindo ${nome}`
}

function confirmLength() {
    if(emailTxt.value.length == 0) {
        span1.textContent = 'Campo obrigatório'
    } else {
        span1.textContent = ''
    }
    if(senhaTxt.value.length == 0) {
        span2.textContent = 'Campo obrigatório'
    } else {
        span2.textContent = ''
    }
}

function confirmEmail() {
    if(localStorage.getItem('Email') == null) {
        span1.innerHTML = 'Email não registrado, clique <a href="../register/register.html" style="color: var(--colorW);">aqui</a> para registrar.'
    } else {
        span1.innerHTML = ''
    }
}

function confirmAccount() {
    if(localStorage.getItem('Email') != emailTxt.value || localStorage.getItem('Senha') != senhaTxt.value) {
        span0.textContent = 'Email ou senha inválida. tente novamente.'
    } else {
        span0.textContent = ''
    }
}

entrar.addEventListener('click', (e)=>{
    e.preventDefault()
    if(emailTxt.value.length == 0 || senhaTxt.value.length == 0 ) {
        confirmLength()
    } else if(localStorage.getItem('Email') == null) {
        confirmLength(), confirmEmail()
    } else if(localStorage.getItem('Email') != emailTxt.value || localStorage.getItem('Senha') != senhaTxt.value) {
        confirmLength(), confirmEmail(), confirmAccount()
    } else {
        confirmLength(), confirmEmail(), confirmAccount(), openModal()
    }
})