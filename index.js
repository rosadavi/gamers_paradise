const login1 = document.querySelector('#login1')
const login2 = document.querySelector('#login2')
const logoof1 = document.querySelector('#logoff1')
const logoof2 = document.querySelector('#logoff2')
const loginLocal = localStorage.getItem('Email')
if(loginLocal) {
    login1.style.display = 'none'
    login2.style.display = 'none'
} else {
    logoof1.style.display = 'none'
    logoof2.style.display = 'none'
}

const logofArray = [logoof1, logoof2]
logofArray.forEach((e)=>{
    e.addEventListener('click', ()=>{
        localStorage.clear()
    })
})

function openModal() {
    const closeModal = document.querySelector('.closeModal')
    const events = [closeModal, fade]
    toogleModal()
    events.map((e)=>{
        e.addEventListener('click', toogleModal)
    })
}

function openModalMenu() {
    const closeModalMenu = document.querySelector('.closeModalMenu')
    const events = [closeModalMenu, fadeMenu]
    toogleModalMenu()
    events.map((e)=>{
        e.addEventListener('click', toogleModalMenu)
    })
}

function openModalAviso() {
    const closeModalAviso = document.querySelector('.closeModalAviso')
    const events = [closeModalAviso, fadeAviso]
    toogleModalAviso()
    events.map((e)=>{
        e.addEventListener('click', toogleModalAviso)
    })
}

function openModalQtd() {
    const closeModalQtd = document.querySelector('.closeModalQtd')
    const events = [closeModalQtd, fadeQtd]
    toogleModalQtd()
    events.map((e)=>{
        e.addEventListener('click', toogleModalQtd)
    })
}

function openModalSucss() {
    const closeModalSucss = document.querySelector('.closeModalSucss')
    const events = [closeModalSucss, fadeSucss]
    toogleModalSucss()
    events.map((e)=>{
        e.addEventListener('click', toogleModalSucss)
    })
}

function openModalLog() {
    const closeModalLog = document.querySelector('.closeModalLog')
    const events = [closeModalLog, fadeLog]
    toogleModalLog()
    events.map((e)=>{
        e.addEventListener('click', toogleModalLog)
    })
}

function openModalOk() {
    const closeModalOk = document.querySelector('.closeModalOk')
    const events = [closeModalOk, fadeOk]
    toogleModalOk()
    events.map((e)=>{
        e.addEventListener('click', toogleModalOk)
        e.addEventListener('click', ()=>{
            location.href = './index.html'
        })
    })
}

const navBurger = document.querySelector('#navBurger')
navBurger.addEventListener('click', ()=>{
    openModalMenu()
})

const carrinho = document.querySelector('#carrinho')
carrinho.addEventListener('click', ()=>{
    openModal()
})

const carrinhoMenu = document.querySelector('#carrinhoMenu')
carrinhoMenu.addEventListener('click', ()=>{
    openModal()
})

const controls = document.querySelectorAll('.control')
const items = document.querySelectorAll('.item')
const maxItems = items.length
let currentItem = 0
controls.forEach(control=>{
    control.addEventListener('click', ()=>{
        const isLeft = control.classList.contains('arrow-left')
        if(isLeft) {
            currentItem -= 1
        } else {
            currentItem += 1
        }
        if(currentItem >= maxItems) {
            currentItem = 0
        }
        if(currentItem < 0) {
            currentItem = maxItems - 1
        }
        items.forEach(item=>{
            item.classList.remove('current-item')
            items[currentItem].scrollIntoView({
                inline: "center",
                behavior: "smooth",
                block: "nearest"
            })
            items[currentItem].classList.add("current-item")
        })
    })
})

const controls2 = document.querySelectorAll('.control2')
const items2 = document.querySelectorAll('.item2')
const maxItems2 = items2.length
let currentItem2 = 0
controls2.forEach(control=>{
    control.addEventListener('click', ()=>{
        const isLeft = control.classList.contains('arrow-left')
        if(isLeft) {
            currentItem2 -= 1
        } else {
            currentItem2 += 1
        }
        if(currentItem2 >= maxItems) {
            currentItem2 = 0
        }
        if(currentItem2 < 0) {
            currentItem2 = maxItems - 1
        }
        items2.forEach(item=>{
            item.classList.remove('current-item2')
            items2[currentItem2].scrollIntoView({
                inline: "center",
                behavior: "smooth",
                block: "nearest"
            })
            items2[currentItem2].classList.add("current-item2")
        })
    })
})

const controls3 = document.querySelectorAll('.control3')
const items3 = document.querySelectorAll('.item3')
const maxItems3 = items3.length
let currentItem3 = 0
controls3.forEach(control=>{
    control.addEventListener('click', ()=>{
        const isLeft = control.classList.contains('arrow-left')
        if(isLeft) {
            currentItem3 -= 1
        } else {
            currentItem3 += 1
        }
        if(currentItem3 >= maxItems) {
            currentItem3 = 0
        }
        if(currentItem3 < 0) {
            currentItem3 = maxItems - 1
        }
        items3.forEach(item=>{
            item.classList.remove('current-item3')
            items3[currentItem3].scrollIntoView({
                inline: "center",
                behavior: "smooth",
                block: "nearest"
            })
            items3[currentItem3].classList.add("current-item3")
        })
    })
})

const imgs = document.querySelector('#img')
const img = document.querySelectorAll('#img img') // agora o img é um array.
let slideAtual = 0
function carrossel() {
    slideAtual++
    if(slideAtual > img.length -1) {
        slideAtual = 0
    }
    imgs.style.transform = `translateX(${- slideAtual * img[0].offsetWidth}px)` //offSetWidth pega o tamanho da imagem, isso ajuda pra alterações futuras em formatações di imganes.
}
setInterval(carrossel, 5000)

const imgs0 = document.querySelector('#img0')
const img0 = document.querySelectorAll('#img0 img') // agora o img é um array.
let slideAtual0 = 0
function carrossel0() {
    slideAtual0++
    if(slideAtual0 > img0.length -1) {
        slideAtual0 = 0
    }
    imgs0.style.transform = `translateX(${- slideAtual0 * img0[0].offsetWidth}px)` //offSetWidth pega o tamanho da imagem, isso ajuda pra alterações futuras em formatações di imganes.
}
setInterval(carrossel0, 5000)

const modalContainer = document.querySelector('.modal')
const imgItem = document.querySelectorAll('.gallery img')
const nomeItem = document.querySelectorAll('.gallery h1')
const valorItem = document.querySelectorAll('.gallery p')
const infoCard = document.querySelectorAll('.infoCard')
const adicionar = document.querySelectorAll('.adicionar')

var modalLength = 0

adicionar.forEach((button, indice)=>{
    button.addEventListener('click', ()=>{
    modalLength += 1
        let imagem = imgItem[indice].src
        let nomeProduto = nomeItem[indice].textContent
        let valorProduto = valorItem[indice].textContent
        modalContainer.innerHTML += 
        `   <div class="container">
            <div>
                <img src="${imagem}" alt="">
            </div>
            <span>
                <p>${nomeProduto}</p>
                <p class="precoProduto">${valorProduto}</p>
                <div>
                    <span class="menos">-</span>
                    <span class="qtdN">1</span>
                    <span class="mais">+</span>
                </div>
            </span>
            <div class="removeItem">
                <ion-icon name="trash-outline" class="trash"></ion-icon>
            </div>
            </div>`
            function desaparecerTexto(element){
                var opacity = 1
                var intervalo = 50
            
                let fade = setInterval(()=>{
                    if(opacity > 0){
                        opacity -= 0.1
                        element.style.opacity = opacity
                    } else{
                        clearInterval(fade)
                    }
                },intervalo)
            }
            const spanAdd = document.querySelectorAll('span.add')
            spanAdd[indice].textContent = `${nomeProduto} adicionado ao carrinho`
            setTimeout(()=>{
                desaparecerTexto(spanAdd[indice])
            },2000)
        const container = modalContainer.querySelectorAll('.container')
        const qtdN = document.querySelectorAll('.qtdN')
        const menos = document.querySelectorAll('.menos')
        const mais = document.querySelectorAll('.mais')
        const precoProduto = document.querySelectorAll('.precoProduto')
        let totPreco = 0
        for(let i = 0; i < precoProduto.length; i++) {
            totPreco += Number(precoProduto[i].textContent) * Number(qtdN[i].textContent)
        }
        const subTotal = document.querySelector('#subTotal')
        subTotal.innerHTML = totPreco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        menos.forEach((diminuir, i)=>{
            diminuir.addEventListener('click', ()=>{
                Number(qtdN[i].lastChild.nodeValue--)
                let totPreco = 0
                for(let i = 0; i < precoProduto.length; i++) {
                    totPreco += Number(precoProduto[i].textContent) * Number(qtdN[i].textContent)
                }
                const subTotal = document.querySelector('#subTotal')
                subTotal.innerHTML = totPreco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                if(qtdN[i].lastChild.nodeValue <= 0) {
                    container[i].remove()
                    const qtdProduto = modalContainer.childElementCount - 2
                    let qtdCart = document.querySelectorAll('.qtdCart')
                    qtdCart.forEach((e)=>{
                        e.innerHTML = qtdProduto
                    })
                    modalLength -= 1
                }
            })
        })
        mais.forEach((aumentar, i)=>{
            aumentar.addEventListener('click', ()=>{
                Number(qtdN[i].lastChild.nodeValue++)
                let totPreco = 0
                for(let i = 0; i < precoProduto.length; i++) {
                    totPreco += Number(precoProduto[i].textContent) * Number(qtdN[i].textContent)
                }
                const subTotal = document.querySelector('#subTotal')
                subTotal.innerHTML = totPreco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
            })
        })
        const deletar = document.querySelectorAll('.trash')
        deletar.forEach((delet, i)=>{
            delet.addEventListener('click', ()=>{
                Number(qtdN[i].lastChild.nodeValue = 0)
                let totPreco = 0
                for(let i = 0; i < precoProduto.length; i++) {
                    totPreco += Number(precoProduto[i].textContent) * Number(qtdN[i].textContent)
                }
                const subTotal = document.querySelector('#subTotal')
                subTotal.innerHTML = totPreco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                container[i].remove()
                const qtdProduto = modalContainer.childElementCount - 2
                let qtdCart = document.querySelectorAll('.qtdCart')
                qtdCart.forEach((e)=>{
                    e.innerHTML = qtdProduto
                })
                modalLength -= 1
            })
        })        
        const qtdProduto = modalContainer.childElementCount - 2
        let qtdCart = document.querySelectorAll('.qtdCart')
        qtdCart.forEach((e)=>{
            e.innerHTML = qtdProduto
        })
    })
})
const txtcep = document.querySelector('#txtcep')
const txtlogradouro = document.querySelector('#txtlogradouro')
const txtlocalidade = document.querySelector('#txtlocalidade')
const txtbairro = document.querySelector('#txtbairro')
const txtuf = document.querySelector('#txtuf')

txtcep.addEventListener('focusout', async()=>{
    let url = `https://viacep.com.br/ws/${txtcep.value}/json/` 
    let resposta = await fetch(url)
    let dados = await resposta.json()
    console.log(resposta)
    console.log(dados)
    if(dados.erro) {
        alert('Esse cep nao existe')
        txtlogradouro.value = ''
        txtlocalidade.value = ''
        txtbairro.value = ''
        txtuf.value = ''
    } else {
        txtlogradouro.value = dados.logradouro
        txtlocalidade.value = dados.localidade
        txtbairro.value = dados.bairro
        txtuf.value = dados.uf
    }

})
const finalizar = document.querySelector('#finalizar')
finalizar.addEventListener('click', ()=>{
    if(modalLength == 0) {
        openModalQtd()
    } else if(loginLocal) {
        openModalSucss()
    } else {
        openModalLog()
    }
})

const comprar = document.querySelector('#comprar')
comprar.addEventListener('click', (e)=>{
    e.preventDefault()
    openModalOk()
})