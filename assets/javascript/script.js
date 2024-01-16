const fade = document.querySelector('#fade')
const modal = document.querySelector('#modal')
const fadeMenu = document.querySelector('#fadeMenu')
const modalMenu = document.querySelector('#modalMenu')
const fadeAviso = document.querySelector('#fadeAviso')
const modalAviso = document.querySelector('#modalAviso')
const fadeQtd = document.querySelector('#fadeQtd')
const modalQtd = document.querySelector('#modalQtd')
const fadeSucss = document.querySelector('#fadeSucss')
const modalSucss = document.querySelector('#modalSucss')
const fadeLog = document.querySelector('#fadeLog')
const modalLog = document.querySelector('#modalLog')
const fadeOk = document.querySelector('#fadeOk')
const modalOk = document.querySelector('#modalOk')
const fadeCep = document.querySelector('#fadeCep')
const modalCep = document.querySelector('#modalCep')

function toogleModal() {
    fade.classList.toggle('hide')
    modal.classList.toggle('hide')
}

function toogleModalMenu() {
    fadeMenu.classList.toggle('hide')
    modalMenu.classList.toggle('hide')
}

function toogleModalAviso() {
    fadeAviso.classList.toggle('hide')
    modalAviso.classList.toggle('hide')
}

function toogleModalQtd() {
    fadeQtd.classList.toggle('hide')
    modalQtd.classList.toggle('hide')
}

function toogleModalSucss() {
    fadeSucss.classList.toggle('hide')
    modalSucss.classList.toggle('hide')
}

function toogleModalLog() {
    fadeLog.classList.toggle('hide')
    modalLog.classList.toggle('hide')
}

function toogleModalOk() {
    fadeOk.classList.toggle('hide')
    modalOk.classList.toggle('hide')
}

function toogleModalCep() {
    fadeCep.classList.toggle('hide')
    modalCep.classList.toggle('hide')
}

const getEmail = localStorage.getItem('email')
const getPassword = localStorage.getItem('password')
const getName = localStorage.getItem('name')

function styleAlert(e) {
    e.style.color = 'red'
    e.style.textAlign = 'justify'
    e.style.fontWeight = 'bolder'
    e.style.marginTop = '-10px'
}