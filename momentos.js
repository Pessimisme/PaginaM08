window.onload=function() { init(); }

async function init () {
    let listaMoments = await fetchServerJson('./Momentos/moments.json')
    let codiHTML = ''
    let refResultat = document.querySelector("#listaMoments")

    for (let cnt=0; cnt < listaMoments.length; cnt = cnt + 1) {
      let moment = listaMoments[cnt]
      codiHTML = codiHTML + getHTMLFromTemplate("itemMoment", moment)
    }

    refResultat.innerHTML = codiHTML
}