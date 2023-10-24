 const initApp = () =>{
    const menuBtn = document.getElementById('menu-btn')
    const mobileMenu = document.getElementById('mobile-menu')

    const toggleBtn = () =>{
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
    }

    menuBtn.addEventListener('click', toggleBtn)
    mobileMenu.addEventListener('click', toggleBtn)
 } 

 document.addEventListener('DOMContentLoaded', initApp)


//  const initApp = () =>{
//     const hamburgerBtn = document.getElementById ('hamburger-button')
//     const mobileMenu = document.getElementById('mobile-menu')


// const toggleMenu = () =>{
//     mobileMenu.classList.toggle('hidden')
//     mobileMenu.classList.toggle('flex')
//     hamburgerBtn.classList.toggle('toggle-btn')
// }

// hamburgerBtn.addEventListener('click', toggleMenu)
// mobileMenu.addEventListener('click', toggleMenu)
// }

// document.addEventListener('DOMContentLoaded', initApp)