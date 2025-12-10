document.addEventListener("DOMContentLoaded", function () {
  function normalNavigationDesktop() {
    // normal menu desktop script
    const navs = document.querySelectorAll(".nav");
    const navBlocks = document.querySelectorAll(".nav-blocks");
    const subMenus = document.querySelectorAll(".subMenus");
    const iconSubMenuLink = document.querySelectorAll(".icon-subMenu-link");
    const subMenuThree = document.querySelectorAll(".subMenuThree"); // targeting the submenu level 3
    const megaMenus = document.querySelectorAll(".megamenu-container");

    navs.forEach((nav, index) => {
      nav.addEventListener("click", (e) => {
        e.preventDefault();
        let isMegaMenu = nav.getAttribute("has-mega-menu");
        console.log(isMegaMenu);

        if (isMegaMenu === true) {
          console.log("true");

          //Implement mega menu interraction
          if (megaMenus[index].classList.contains("xl:hidden")) {
            megaMenus.forEach((megamenu) =>
              megamenu.classList.add("xl:hidden")
            ); // making sure it all close top-28 opacity-0
            megaMenus[index].classList.replace("xl:hidden", "xl:block");
          } else {
            megaMenus[index].classList.replace("xl:block", "xl:hidden");
          }
        }
        if (isMegaMenu === false) {
          console.log("false");
          // open and close the navBlocks
          if (navBlocks[index].classList.contains("hidden")) {
            // 1. Close all
            navBlocks.forEach((block, nvIndex) => {
              block.classList.add("hidden");
            });
            // 2. Open the one clicked
            navBlocks[index].classList.remove("hidden");
          } else {
            navBlocks[index].classList.add("hidden"); // all navBlocks
          }
        }
      });
    });
    // subMenus
    subMenus.forEach((subMenu, sIndex) => {
      subMenu.addEventListener("click", () => {
        // for the icon rotation
        iconSubMenuLink.forEach((icon) => {
          icon.classList.add("rotate-90");
        });
        // 1. Close all
        subMenuThree.forEach((subMenuLevelThree) => {
          subMenuLevelThree.classList.add("hidden");
        });

        // 2. Open the one clicked
        subMenuThree[sIndex].classList.remove("hidden");
        iconSubMenuLink[sIndex].classList.replace("rotate-90", "-rotate-90"); // for the icon rotation
      });
    });
  }
  normalNavigationDesktop();
});
