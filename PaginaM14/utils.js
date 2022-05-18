function getElementByPropertyValue(list, property, value) {
    for (let cnt = 0; cnt < list.length; cnt = cnt + 1) {
        let item = list[cnt]
        if (item[property] == value) {
            return item
        }
    }
    return undefined
}

async function fetchServerJson (url) {

    let data = undefined
    try {
        let response = await fetch(url)
        if (response.status = 200) {
            let result = JSON.parse(await response.text())
            data = result
        }
    } catch (err) {
        console.error('Server fetch error: ', err)
    }
    return data
}

function wait (time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve() }, time)
    })
}

function getHTMLFromTemplate(id, replacements) {
    let src = document.querySelector(`#${id}`).innerHTML
    let keys = Object.keys(replacements)

    for (let cnt = 0; cnt < keys.length; cnt = cnt + 1) {
        let key = keys[cnt]
        let value = replacements[key]
        src = src.replaceAll(`{{${key}}}`, value)

    }

    return src
}