(function() {
  var navbarWrapper = document.getElementsByClassName('navbar__wrapper')[0]
  var navbar = document.getElementsByClassName('navbar')[0]
  var navs = document.getElementsByClassName('navbar__nav')
  var logo = document.getElementsByClassName('navbar__logo-txt')[0]
  var menu = document.getElementsByClassName('navbar__btn-menu')[0]
  var dropdown = document.getElementsByClassName('dropdown')[0]
  var header = document.getElementsByClassName('header')[0]
  var headerHeight = header.scrollHeight

  window.addEventListener('scroll', function(e) {
    if (window.scrollY >= (headerHeight - 60)) {
      isScrolled()
    } else {
      isNotScrolled()
    }
  })

  menu.addEventListener('click', function(e) {
    menu.classList.add('navbar__btn-menu--is-active')
    dropdown.classList.add('dropdown--is-active')
  })

  function isScrolled() {
    navbar.classList.add('navbar--scrolled')
    navbarWrapper.classList.add('navbar__wrapper--scrolled')
    logo.classList.add('navbar__logo-txt--scrolled')
    menu.classList.add('navbar__btn-menu--scrolled')
    for (nav of navs) {
      nav.classList.add('navbar__nav--scrolled')
    }
  }

  function isNotScrolled() {
    navbar.classList.remove('navbar--scrolled')
    navbarWrapper.classList.remove('navbar__wrapper--scrolled')
    logo.classList.remove('navbar__logo-txt--scrolled')
    menu.classList.remove('navbar__btn-menu--scrolled')
    for (nav of navs) {
      nav.classList.remove('navbar__nav--scrolled')
    }
  }
})();