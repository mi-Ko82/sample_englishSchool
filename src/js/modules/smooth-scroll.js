const removeIsOpen = (el) => {
  el.classList.remove('is-open')
}

const smoothScroll = () => {
  const trigger = document.querySelectorAll('a[href^="#"]')

  trigger.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      const href = item.getAttribute('href')
      const target = document.getElementById(href.replace('#', ''))
      const rect = target.getBoundingClientRect().top
      const offset = window.pageYOffset
      const targetHeight = rect + offset

      const bodyElement = document.body
      removeIsOpen(bodyElement)
      const header = document.getElementById('header')
      removeIsOpen(header)
      const headerMenu = document.getElementById('headerMenu')
      removeIsOpen(headerMenu)

      window.scrollTo({
        top: targetHeight,
        behavior: 'smooth'
      })
    })
  })
}

export default smoothScroll
