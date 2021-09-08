const bodyElement = document.body
const header = document.getElementById('header')
const headerBtn = document.getElementById('headerBtn')
const headerBtnLine = document.getElementsByClassName('l-header__button--line')
const headerMenu = document.getElementById('headerMenu')

const addToggleClass = (el) => {
  el.classList.toggle('is-open')
}

const clickHeader = () => {
  headerBtn.addEventListener('click', () => {
    addToggleClass(bodyElement)
    addToggleClass(header)

    for (let i = 0; i < headerBtnLine.length; i++) {
      const item = headerBtnLine[i]
      addToggleClass(item)
    }

    addToggleClass(headerMenu)
  })
}

export default clickHeader
