window.onload=function() { mostraLlista('Todos') }

async function init () {
    let listaProductes = await fetchServerJson('./Productos/productes.json')
    let codiHTML = ''
    let refResultat = document.querySelector("#listaProductes2")
  
    for (let cnt=0; cnt < listaProductes.length; cnt = cnt + 1) {
      let producte = listaProductes[cnt]
      codiHTML = codiHTML + getHTMLFromTemplate("itemProducte2", producte)
    }
  
    refResultat.innerHTML = codiHTML
}

let expanded = false

function changeExpandible () {
    let ref2 = document.querySelector('.fletxa')
    let ref = document.querySelector('#expandible')
    let height = ref.scrollHeight + "px"

    if (expanded) {
        expanded = false
        ref.style.maxHeight = '0'
        ref.style.minHeight = '0'
        ref2.style.transform = 'rotate3d(0, 0, 1, 45deg)'
    } else {
        expanded = true
        ref.style.maxHeight = height
        ref.style.minHeight = height
        ref2.style.transform = 'rotate3d(0, 0, 1, 135deg)'
    }
}

async function mostraLlista (tipus) {
  let llistaDades = await fetchServerJson('./Productos/productes.json')
  let refResultat = document.querySelector("#listaProductes2")
  let codiHTML = ''

  if (tipus == 'A-Z') {
    llistaDades.sort((a, b) => { return a.Nombre.localeCompare(b.Nombre); })
  }

  if (tipus == 'Precio') {
    llistaDades.sort((a, b) => { return (parseInt(a.Precio) - parseInt(b.Precio)); })
  }

  for (let cnt = 0; cnt < llistaDades.length; cnt = cnt + 1) {
      let consola = llistaDades[cnt]
      let ref1 = document.querySelector('.desplegado')
      let ref2 = document.querySelector('.desplegado2')
      let ref3 = document.querySelector('.desplegado3')
      let ref4 = document.querySelector('.desplegado4')
      let ref5 = document.querySelector('.desplegado5')

      if (tipus == 'Todos') {
        ref1.style.color = '#FBC230'
      } else {
        ref1.style.color = 'white'
      }
    
      if (tipus == 'Novedades') {
        ref2.style.color = '#FBC230'
      } else {
        ref2.style.color = 'white'
      }
  
      if (tipus == 'Destacados') {
        ref3.style.color = '#FBC230'
      } else {
        ref3.style.color = 'white'
      }

      if (tipus == 'A-Z') {
        ref4.style.color = '#FBC230'
      } else {
        ref4.style.color = 'white'
      }

      if (tipus == 'Precio') {
        ref5.style.color = '#FBC230'
      } else {
        ref5.style.color = 'white'
      }
  
      if ((tipus == 'Todos' || tipus == 'A-Z' || tipus == 'Precio')
      || (tipus == 'Novedades' && consola.Novedad == 'Si')
      || (tipus == 'Destacados' && consola.Destacado == 'Si')
      ) {
          codiHTML = codiHTML + getHTMLFromTemplate("itemProducte2", consola)
      }
  }

  refResultat.innerHTML = codiHTML
}