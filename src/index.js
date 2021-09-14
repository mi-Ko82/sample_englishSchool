import './scss/styles.scss'
import clickHeader from './js/modules/header'
import smoothScroll from './js/modules/smooth-scroll'
import mainVisualSwiper from './js/modules/mv'
import scrollShow from './js/modules/scroll-show'

document.addEventListener('DOMContentLoaded', () => {
  clickHeader()
  smoothScroll()

  if (document.body.classList.contains('top')) {
    mainVisualSwiper()
    scrollShow()
  }
})
