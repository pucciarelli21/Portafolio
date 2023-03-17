const scrollNav = () => {
  const divNav = document.querySelector(".navTop")
  let windowsScroll = window.scrollY > 250
  divNav.classList.toggle("active", windowsScroll)
}
window.addEventListener("scroll", scrollNav)