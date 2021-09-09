import './scss/styles.scss'
import clickHeader from './js/modules/header'
import mainVisualSwiper from './js/modules/mv'

document.addEventListener('DOMContentLoaded', () => {
  clickHeader()

  if (document.body.classList.contains('top')) {
    mainVisualSwiper()
  }
})
