window.addEventListener("load",async (evt) => { 
    await init()
    setCarouselDotsInit()

})

function setCarouselDotsInit () {

    let refImages = document.querySelector("#listaPersonatges")
    for (let cnt = 0; cnt < refImages.children.length; cnt = cnt + 1) {
        let img = refImages.children[cnt]
        if (cnt != 0) {
           img.style.filter = "grayscale(100%)"
        } else {
            img.style.filter = "grayscale(0%)"
        }
    }
}

function setCarouselDots (ref) {
    let index = 0
    let selected = -1
    for (let cnt = 0; cnt < ref.parentNode.children.length; cnt = cnt + 1) {
        let dot = ref.parentNode.children[cnt]
        if (ref == dot) {
            index = cnt
            dot.style.backgroundColor = "#FBC230"
            selected = cnt
        } else {
            dot.style.backgroundColor = "initial"
        }
    }
    let obj = ref.parentNode.parentNode
    let refImages = obj.querySelector("#listaPersonatges")
    refImages.style.transform = 'translateX(' + (33 - (index * 33)) + '%)'

    for (let cnt = 0; cnt < refImages.children.length; cnt = cnt + 1) {
        let img = refImages.children[cnt]
        if (cnt != selected) {
           img.style.filter = "grayscale(100%)"
        } else {
            img.style.filter = "grayscale(0%)"
        }
    }
}

async function init () {
    let listaPersonatges = await fetchServerJson('./Personajes/personatges.json')
    let codiHTML = ''
    let codiHTML2 = ''
    let refResultat = document.querySelector("#listaPersonatges")
    let refResultat2 = document.querySelector("#listaPersonatgesPunts")

    for (let cnt=0; cnt < listaPersonatges.length; cnt = cnt + 1) {
        let personatge = listaPersonatges[cnt]
        codiHTML = codiHTML + getHTMLFromTemplate("itemPersonatge", personatge)
        codiHTML2 = codiHTML2 + getHTMLFromTemplate("itemPersonatgePunts", personatge)
    }

    refResultat.innerHTML = codiHTML
    refResultat2.innerHTML = codiHTML2
}