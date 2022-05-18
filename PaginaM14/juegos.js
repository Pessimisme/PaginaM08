window.onload=function(){
    init();
}

async function init () {
    let listaMedia = await fetchServerJson('./Media/media.json')
    let codiHTML = ''
    let refResultat = document.querySelector("#listaMedia")

    for (let cnt=0; cnt < listaMedia.length; cnt = cnt + 1) {
        let media = listaMedia[cnt]
        codiHTML = codiHTML + getHTMLFromTemplate("itemMedia", media)
    }

    refResultat.innerHTML = codiHTML
}