
const btnMenuMob = document.querySelector('.mob-btn-menu')
const overlayMenuMob = document.querySelector('.mob-nav-overlay')

btnMenuMob.onclick = toggleMenuMob
overlayMenuMob.onclick = toggleMenuMob

const navMenuMob = document.querySelector('.app-header-nav')
function toggleMenuMob(){
  navMenuMob.classList.toggle('app-header-nav-show')
}