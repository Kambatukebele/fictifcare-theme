function mobileNavigation() {
  const hamburger = document.querySelector("#hamburger-menu");
  const closeMenu = document.querySelector("#close-menu");
  const navigationMobile = document.querySelector("#navigation-mobile");

  function toggleMobileNav() {
    hamburger.addEventListener("click", () => {
      navigationMobile.classList.replace("-translate-x-96", "translate-x-0");
      navigationMobile.classList.replace("-left-[1200px]", "left-0");
      navigationMobile.classList.replace("opacity-0", "opacity-100");
    });
    closeMenu.addEventListener("click", () => {
      navigationMobile.classList.replace("translate-x-0", "-translate-x-96");
      navigationMobile.classList.replace("left-0", "-left-[1200px]");
      navigationMobile.classList.replace("opacity-100", "opacity-0");
    });
  }
  toggleMobileNav();

  const mobileNav = document.querySelectorAll(".mobile_nav");
  const mobileSubMenu = document.querySelectorAll(".mobile_subMenu");
  const mobileNavIcon = document.querySelectorAll(".mobile_nav_icon");
  const mobileSubMenuLevelThree = document.querySelectorAll(
    ".mobile_subMenu_level_three"
  );
  const mobileSubMenuLevelThreeList = document.querySelectorAll(
    ".mobile_subMenu_level_three_list"
  );
  const mobileSubMenuLevelThreeIcon = document.querySelectorAll(
    ".mobile_subMenu_level_three_icon"
  );
  mobileNav.forEach((nav, mIndex) => {
    nav.addEventListener("click", (m) => {
      m.preventDefault();
      mobileSubMenu.forEach((mSubMenu) => mSubMenu.classList.add("hidden"));
      mobileNavIcon.forEach((mNavIcon) => mNavIcon.classList.add("rotate-90"));
      mobileSubMenu[mIndex].classList.remove("hidden");
      mobileNavIcon[mIndex].classList.replace("rotate-90", "-rotate-90");
    });
  });
  mobileSubMenuLevelThree.forEach((m_level_three, l_index) => {
    m_level_three.addEventListener("click", () => {
      mobileSubMenuLevelThreeIcon.forEach((s_LevelThreeIcon) =>
        s_LevelThreeIcon.classList.add("rotate-90")
      );
      mobileSubMenuLevelThreeIcon[l_index].classList.replace(
        "rotate-90",
        "-rotate-90"
      );
      mobileSubMenuLevelThreeList.forEach((s_ThreeList) => {
        s_ThreeList.classList.add("hidden");
      });
      mobileSubMenuLevelThreeList[l_index].classList.remove("hidden");
    });
  });
}
mobileNavigation();
