window.onload=function() { init(); }
  
async function init () {
    let property = 'id'
    let value = (new URLSearchParams(window.location.search)).getAll(property)[0]
    let listaPersonatges = await fetchServerJson('./Personajes/personatges.json')
    let codiHTML = ''
    let refResultat = document.querySelector("#listaPersonatges4")

    if (value != undefined) {
        let cotxe = getElementByPropertyValue(listaPersonatges, property, value)
        if (cotxe) {
          codiHTML = getHTMLFromTemplate("itemPersonatge4", cotxe)

          let fondo = cotxe.Fondo2
          document.querySelector("body").style.background = `center / cover no-repeat  url('${fondo}')`;
        }
      }
    
    refResultat.innerHTML = codiHTML
}