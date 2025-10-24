(() => {
    const refs = {
        openMobileBtn: document.querySelector('[data-mobile-open]'),
        closeMobileBtn: document.querySelector('[data-mobile-close]'),
        mobile: document.querySelector('[data-mobile]'),
    }
    refs.openMobileBtn.addEventListener('click', toogleMobile)
    refs.closeMobileBtn.addEventListener('click', toogleMobile)

    function toogleMobile(){
        refs.mobile.classList.toggle('is-open')
    }
})();