const menu = document.querySelector('nav.mobile ul')


function abreMenu() {
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
        return
    } else {
        menu.style.display = 'none'
        return
    }
}