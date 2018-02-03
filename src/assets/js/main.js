(function() {
    var openSideBarTrigger = document.getElementsByClassName('navbar__menu-btn')[0]
    var closeSideBarTrigger = document.getElementsByClassName('side-nav__menu-btn')[0]
    var sideBarWrapper = document.getElementsByClassName('side-nav__wrapper')[0]
    var sideBar = document.getElementsByClassName('side-nav')

    openSideBarTrigger.addEventListener('click', function() {
        openSideBar()
    })

    closeSideBarTrigger.addEventListener('click', function() {
        closeSideBar()
    })

    sideBarWrapper.addEventListener('click', function() {
        closeSideBar()
    })

    function openSideBar() {
        sideBarWrapper.classList.add('side-nav__wrapper--open')
    }

    function closeSideBar() {
        sideBarWrapper.classList.remove('side-nav__wrapper--open')
    }
})()