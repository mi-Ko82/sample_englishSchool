const scrollShowSide = () => {
  window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight
    const scrollHeight = window.pageYOffset
    const target = document.querySelector('.js-scrollShowSide')
    const targetScrollHeight = target.getBoundingClientRect().top + scrollHeight
    const value = 200

    if (scrollHeight > targetScrollHeight - windowHeight + value) {
      const targetItems = target.querySelectorAll('.js-scrollShowSide-target')
      targetItems.forEach((item) => {
        item.classList.add('is-show')
      })
    }
  })
}

export default scrollShowSide
