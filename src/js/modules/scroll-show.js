const scrollShow = () => {
  window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight
    const scrollHeight = window.pageYOffset
    const target = document.querySelectorAll('.js-scrollShow')

    target.forEach((item) => {
      const targetScrollHeight = item.getBoundingClientRect().top + scrollHeight
      const value = 100

      if (scrollHeight > targetScrollHeight - windowHeight + value) {
        item.classList.add('is-show')
      }
    })
  })
}

export default scrollShow
