(function() {
  var navbarWrapper = document.getElementsByClassName('navbar__wrapper')[0]
  var navbar = document.getElementsByClassName('navbar')[0]
  var navs = document.getElementsByClassName('navbar__nav')
  var logo = document.getElementsByClassName('navbar__logo-txt')[0]
  var menu = document.getElementsByClassName('navbar__btn-menu')[0]
  var close = document.getElementsByClassName('navbar__btn-close')[0]
  var dropdown = document.getElementsByClassName('dropdown')[0]
  var dropdownNavs = document.getElementsByClassName('dropdown__nav')
  var header = document.getElementsByClassName('header')[0]
  var headerHeight = header.scrollHeight

  window.addEventListener('scroll', function(e) {
    if (window.scrollY) {
      isScrolled()
    } else {
      isNotScrolled()
    }
  })

  menu.addEventListener('click', function(e) {
    openDropdown()
  })

  close.addEventListener('click', function(e) {
   closeDropdown()
  })

  for (nav of dropdownNavs) {
    nav.addEventListener('click', function(e) {
      closeDropdown()
    })
  }

  function openDropdown() {
    navbarWrapper.classList.add('navbar__wrapper--no-shadow')
    menu.classList.add('navbar__btn-menu--not-visible')
    dropdown.classList.add('dropdown--visible')
    close.classList.add('navbar__btn-close--visible')
  }

  function closeDropdown() {
    navbarWrapper.classList.remove('navbar__wrapper--no-shadow')
    menu.classList.remove('navbar__btn-menu--not-visible')
    dropdown.classList.remove('dropdown--visible')
    close.classList.remove('navbar__btn-close--visible')
  }

  function isScrolled() {
    navbar.classList.add('navbar--scrolled')
    navbarWrapper.classList.add('navbar__wrapper--scrolled')
    logo.classList.add('navbar__logo-txt--scrolled')
    menu.classList.add('navbar__btn-menu--scrolled')
    close.classList.add('navbar__btn-close--scrolled')
    dropdown.classList.add('dropdown--scrolled')

    for (nav of dropdownNavs) {
      nav.classList.add('dropdown__nav--scrolled')
    }

    for (nav of navs) {
      nav.classList.add('navbar__nav--scrolled')
    }
  }

  function isNotScrolled() {
    navbar.classList.remove('navbar--scrolled')
    navbarWrapper.classList.remove('navbar__wrapper--scrolled')
    logo.classList.remove('navbar__logo-txt--scrolled')
    menu.classList.remove('navbar__btn-menu--scrolled')
    close.classList.remove('navbar__btn-close--scrolled')
    dropdown.classList.remove('dropdown--scrolled')

    for (nav of dropdownNavs) {
      nav.classList.remove('dropdown__nav--scrolled')
    }

    for (nav of navs) {
      nav.classList.remove('navbar__nav--scrolled')
    }
  }
})();