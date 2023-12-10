const nomeTxt = document.querySelector('#nome')
const sobreNomeTxt = document.querySelector('#sobreNome')
const emailTxt = document.querySelector('#email')
const senhaTxt = document.querySelector('#senha')
const confirmeSenhaTxt = document.querySelector('#confirmeSenha')
const cadastrar = document.querySelector('#cadastrar')

const span1 = document.querySelector('.span1')
const span2 = document.querySelector('.span2')
const span3 = document.querySelector('.span3')
const span4 = document.querySelector('.span4')
const span5 = document.querySelector('.span5')

function confirmLength() {
    if(nomeTxt.value.length == 0) {
        span1.textContent = 'Campo obrigatório'
    } else {
        span1.textContent = ''
    }
    if(sobreNomeTxt.value.length == 0) {
        span2.textContent = 'Campo obrigatório'
    } else {
        span2.textContent = ''
    }
    if(emailTxt.value.length == 0) {
        span3.textContent = 'Campo obrigatório'
    } else {
        span3.textContent = ''
    }
    if(senhaTxt.value.length == 0) {
        span4.textContent = 'Campo obrigatório'
    } else {
        span4.textContent = ''
    }
    if(confirmeSenhaTxt.value.length == 0) {
        span5.textContent = 'Campo obrigatório'
    } else {
        span5.textContent = ''
    }
}

function confirmEmail() {
    if(localStorage.getItem('Email') == emailTxt.value) {
        span3.textContent = 'Email já cadastrado!'
    } else {
        span3.textContent = ''
    }
}

function confirmeSenhas() {
    if(senhaTxt.value != confirmeSenhaTxt.value) {
        span5.textContent = 'As senhas não coincidem.'
    } else {
        span5.textContent = ''
    }
}

function setItems() {
    const nome = nomeTxt.value
    const sobreNome = sobreNomeTxt.value
    const email = emailTxt.value
    const senha = senhaTxt.value
    localStorage.setItem('Nome', nome)
    localStorage.setItem('Sobrenome', sobreNome)
    localStorage.setItem('Email', email)
    localStorage.setItem('Senha', senha)
    openModal()
}

function openModal() {
    const closeModal = document.querySelector('#closeModal')
    const events = [closeModal, fade]
    toogleModal()
    events.map((e)=>{
        e.addEventListener('click', ()=>{
            toogleModal()
            location.href = '../login/login.html'
        })
    })
}

cadastrar.addEventListener('click', (e)=>{
    e.preventDefault()
    if(nomeTxt.value.length == 0 || sobreNomeTxt.value.length == 0 || emailTxt.value.length == 0 || senhaTxt.value.length == 0 || confirmeSenhaTxt.value.length == 0) {
        confirmLength()
    } else if(localStorage.getItem('Email') == emailTxt.value) {
        confirmLength()
        confirmEmail()
    } else if(senhaTxt.value != confirmeSenhaTxt.value) {
        confirmLength()
        confirmEmail()
        confirmeSenhas()
    } else {
        confirmLength(), confirmeSenhas(), confirmEmail(), setItems()
    }
})