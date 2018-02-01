(function() {
    var openSideBarTrigger = document.getElementsByClassName('navbar__menu-btn')[0]
    var closeSideBarTrigger = document.getElementsByClassName('sidebar__menu-btn')[0]
    var sideBarWrapper = document.getElementsByClassName('sidebar__wrapper')[0]
    var sideBar = document.getElementsByClassName('sidebar')

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
        sideBarWrapper.classList.add('sidebar__wrapper--open')
    }

    function closeSideBar() {
        sideBarWrapper.classList.remove('sidebar__wrapper--open')
    }
})()