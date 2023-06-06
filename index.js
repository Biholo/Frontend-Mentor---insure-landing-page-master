const toggleMenu = (btnOpen, lstItems, btnClose) => {
    const openMenu = document.getElementById(btnOpen),
    closeMenu = document.getElementById(btnClose),
    menu = document.getElementById(lstItems)

    openMenu.addEventListener('click', () => {
        menu.classList.remove('hide')
        closeMenu.classList.remove('hide')
        openMenu.classList.add('hide')
        console.log('open')
    })

    closeMenu.addEventListener('click', () => {
        menu.classList.add('hide')
        closeMenu.classList.add('hide')
        openMenu.classList.remove('hide')
        console.log('close')
    })
}

toggleMenu('open-menu', 'menu', 'close-menu')