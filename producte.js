window.onload=function() { init(); }
  
  async function init () {
      let property = 'id'
      let value = (new URLSearchParams(window.location.search)).getAll(property)[0]
      let llistaDades = await fetchServerJson('./Productos/productes.json')
      let codiHTML = ''
      let refResultat = document.querySelector("#listaProductes2")

      if (value != undefined) {
        let cotxe = getElementByPropertyValue(llistaDades, property, value)
        if (cotxe) {
          codiHTML = getHTMLFromTemplate("itemProducte3", cotxe)
        }
      }
      
      refResultat.innerHTML = codiHTML      
}
  
  
function prueba(valor) {
  
  let ref3 = document.querySelector('.pruebaimg1')
  let ref4 = document.querySelector('.pruebaimg2')
  
  if (valor == 'prueba3') {
      ref3.style.display = 'block'
  } else {
      ref3.style.display = 'none'
  }
  
  if (valor == 'prueba2') {
    ref4.style.display = 'block'
  } else {
    ref4.style.display = 'none'
  }
}