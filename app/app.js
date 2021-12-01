// scroll navbar

const navbar = document.querySelector("#navbar");
const navbarLinks = document.querySelectorAll(".link1");

let navToggler = false;

// window.onscroll = () => {
//   if (window.pageYOffset > 50) {
//     if (navToggler === false) {
//       navbar.style.background = "#f4f4f4";
//       navbar.style.boxShadow = `0px 2.8px 2.2px rgba(0, 0, 0, 0.012),
//     0px 6.7px 5.3px rgba(0, 0, 0, 0.011), 0px 12.5px 10px rgba(0, 0, 0, 0.011),
//     0px 22.3px 17.9px rgba(0, 0, 0, 0.014),
//     0px 41.8px 33.4px rgba(0, 0, 0, 0.025), 0px 100px 80px rgba(0, 0, 0, 0.07)`;
//       for (let i = 0; i < navbarLinks.length; i++) {
//         navbarLinks[i].style.color = "#000";
//       }
//       navToggler = true;
//     }
//   } else if (window.pageYOffset <= 50) {
//     if (navToggler === true) {
//       navbar.style.background = "none";
//       navbar.style.boxShadow = "none";

//       for (let i = 0; i < navbarLinks.length; i++) {
//         navbarLinks[i].style.color = "#f4f4f4";
//       }
//       navToggler = false;
//     }
//   }
// };

// // scroll arrow

const arrow = document.querySelector("#arrow");

let arrowToggler = false;

// window.onscroll = function () {
//   if (window.pageYOffset > 50) {
//     if (arrowToggler === false) {
//       arrow.style.transform = "rotate(180deg)";
//       arrowToggler = true;
//     }
//   } else if (window.pageYOffset <= 50) {
//     if (arrowToggler === true) {
//       arrow.style.transform = "rotate(0deg)";
//       arrowToggler = false;
//     }
//   }
// };

window.onscroll = () => {
  offset = window.pageYOffset;
  if (offset > 50 && navToggler === false) {
    navbar.style.background = "#f4f4f4";
    navbar.style.boxShadow = `0px 2.8px 2.2px rgba(0, 0, 0, 0.012),
        0px 6.7px 5.3px rgba(0, 0, 0, 0.011), 0px 12.5px 10px rgba(0, 0, 0, 0.011),
        0px 22.3px 17.9px rgba(0, 0, 0, 0.014),
        0px 41.8px 33.4px rgba(0, 0, 0, 0.025), 0px 100px 80px rgba(0, 0, 0, 0.07)`;
    for (let i = 0; i < navbarLinks.length; i++) {
      navbarLinks[i].style.color = "#000";
    }
    navToggler = true;
  }
  if (offset <= 50 && navToggler === true) {
    navbar.style.background = "none";
    navbar.style.boxShadow = "none";

    for (let i = 0; i < navbarLinks.length; i++) {
      navbarLinks[i].style.color = "#f4f4f4";
    }
    navToggler = false;
  }
  if (offset > 300 && arrowToggler === false) {
    arrow.style.transform = "rotate(180deg)";
    arrow.setAttribute("href", "#hero");
    arrowToggler = true;
  }
  if (offset <= 300 && arrowToggler === true) {
    arrow.style.transform = "rotate(0deg)";
    arrow.setAttribute("href", "#about");
    arrowToggler = false;
  }
};
