import Swiper, { Autoplay, EffectFade } from 'swiper'

Swiper.use([Autoplay, EffectFade])

const mainVisualSwiper = () => {
  const option = {
    loop: true,
    autoplay: {
      delay: 5000
    },
    effect: 'fade',
    speed: 3000
  }

  const swiper = new Swiper('.swiper-container', option)
}

export default mainVisualSwiper
