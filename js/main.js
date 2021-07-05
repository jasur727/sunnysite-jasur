var elSiteHeaderSection = document.querySelector(".header");
var elSiteNavOpen = elSiteHeaderSection.querySelector(".header-button");

elSiteNavOpen.addEventListener('click', function () {
  elSiteHeaderSection.classList.toggle("nav--open");
});