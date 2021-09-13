import './scss/styles.scss'
import clickHeader from './js/modules/header'
import mainVisualSwiper from './js/modules/mv'
import scrollShow from './js/modules/scroll-show'

document.addEventListener('DOMContentLoaded', () => {
  clickHeader()

  if (document.body.classList.contains('top')) {
    mainVisualSwiper()
    scrollShow()
  }
})
