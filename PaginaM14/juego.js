window.onload=function() { init(); }
  
  async function init () {
      let property = 'idM'
      let value = (new URLSearchParams(window.location.search)).getAll(property)[0]
      let llistaDades = await fetchServerJson('./Media/media.json')
      let codiHTML = ''
      let refResultat = document.querySelector("#listaMedia2")

      if (value != undefined) {
        let cotxe = getElementByPropertyValue(llistaDades, property, value)
        if (cotxe) {
          codiHTML = getHTMLFromTemplate("itemMedia2", cotxe)
        }
      }
      
      refResultat.innerHTML = codiHTML      
}