window.addEventListener("scroll", (evt) => { 
    scrollShot(evt) 
})

window.onload=function(){
    init();
}

function scrollShot (evt) {
    if (evt && evt.type == "scroll") {
        let refs = document.querySelectorAll('[data-scroll-shot="true"]')
        for (let cnt = 0; cnt < refs.length; cnt = cnt + 1) {
            let ref = refs[cnt]
            let refBounds = ref.getBoundingClientRect()
            let position = (!ref.hasAttribute("data-scroll-position")) ? 50 : parseFloat(ref.getAttribute("data-scroll-position"))
            let limitY = refBounds.y + refBounds.height
            let actionHeight = document.documentElement.clientHeight + refBounds.height
            let percentage = 0
    
            if (limitY < 0) {
                percentage = 99.9
            } else if (limitY > actionHeight) {
                percentage = 0
            } else {
                percentage = 100 - (limitY * 100 / actionHeight)
            }

            if (percentage > position) {
                ref.style.animationPlayState = "running"
                ref.style.animationFillMode = "forwards"
            }
            // TODO: Play backwards otherwise
        }
    }
}

function setCarouselArrows(ref, direction) {
  let num = 0
  let obj = ref.parentNode.parentNode
  let refImages = obj.querySelector('*[data-carousel="images"]')
  let numImages = (refImages.children.length - 1)

  if (refImages.style.transform != '') {
      num = -1 * (parseInt((refImages.style.transform.replace('translateX(', '')).replace('%)', '')) / 100)
  }
  
  if (direction == 'left') { num = num - 1; } else { num = num + 1; }
  
  if (num <= 0) { 
    obj.querySelector('*[data-carousel="leftArrow"]').style.opacity = '0'
    obj.querySelector('*[data-carousel="leftArrow"]').style.transform = 'scale3d(0, 0, 0)'
    obj.querySelector('*[data-carousel="leftArrow"]').style.pointerEvents = 'none'
  } else {
    obj.querySelector('*[data-carousel="leftArrow"]').style.opacity = '1'
    obj.querySelector('*[data-carousel="leftArrow"]').style.transform = 'scale3d(1, 1, 1)'
    obj.querySelector('*[data-carousel="leftArrow"]').style.pointerEvents = 'initial'
  }
  if (num >= numImages) { 
    obj.querySelector('*[data-carousel="rightArrow"]').style.opacity = '0'
    obj.querySelector('*[data-carousel="rightArrow"]').style.transform = 'scale3d(0, 0, 0)'
    obj.querySelector('*[data-carousel="rightArrow"]').style.pointerEvents = 'none'
  } else {
    obj.querySelector('*[data-carousel="rightArrow"]').style.opacity = '1'
    obj.querySelector('*[data-carousel="rightArrow"]').style.transform = 'scale3d(1, 1, 1)'
    obj.querySelector('*[data-carousel="rightArrow"]').style.pointerEvents = 'initial'
  }

  refImages.style.transform = 'translateX(-' + (num * 100) + '%)'
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 150) {
    document.getElementById("myBtn").style.display = "block";
    document.getElementById("divBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
    document.getElementById("divBtn").style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

async function init () {
    let listaMoments = await fetchServerJson('./Momentos/moments.json')
    let listaPersonatges = await fetchServerJson('./Personajes/personatges.json')
    let listaMedia = await fetchServerJson('./Media/media.json')
    let listaProductes = await fetchServerJson('./Productos/productes.json')
    let codiHTML = ''
    let codiHTML2 = ''
    let codiHTML3 = ''
    let codiHTML4 = ''
    let refResultat = document.querySelector("#listaCarrousel")
    let refResultat2 = document.querySelector("#listaPersonatges")
    let refResultat3 = document.querySelector("#listaMedia")
    let refResultat4 = document.querySelector("#listaProductes")

    for (let cnt=0; cnt < listaMoments.length; cnt = cnt + 1) {
      let moment = listaMoments[cnt]
      codiHTML = codiHTML + getHTMLFromTemplate("itemCarrousel", moment)
    }
    
    for (let cnt=0; cnt < 4; cnt = cnt + 1) {
      let personatge = listaPersonatges[cnt]
      codiHTML2 = codiHTML2 + getHTMLFromTemplate("itemPersonatge", personatge)
    }

    for (let cnt=0; cnt < 4; cnt = cnt + 1) {
      let media = listaMedia[cnt]
      codiHTML3 = codiHTML3 + getHTMLFromTemplate("itemMedia", media)
    }

    for (let cnt=0; cnt < 4; cnt = cnt + 1) {
      let producte = listaProductes[cnt]
      codiHTML4 = codiHTML4 + getHTMLFromTemplate("itemProducte", producte)
    }

    refResultat.innerHTML = codiHTML
    refResultat2.innerHTML = codiHTML2
    refResultat3.innerHTML = codiHTML3
    refResultat4.innerHTML = codiHTML4
}