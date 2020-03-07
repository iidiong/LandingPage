/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
let navbarMenu;
let navbarList;
let navSection;
let activeSection;
let navListItem;

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
navSection = document.querySelectorAll("[id^='section']");

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
navbarMenu = document.querySelector(".navbar__menu");
navbarList = document.querySelector("#navbar__list");

// Add class 'active' to section when near top of viewport
let active = document.querySelectorAll("section");
if (active !== 0) {
  for (let i = 0; i < active.length; i++) {
    active[i].classList.add("active");
  }
}

// Scroll to anchor ID using scrollTO event
if (navSection !== 0) {
  function scrollToSection(section) {
    document.querySelector(section).scrollTo();
  }
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
// Scroll to section on link click
if (navSection !== 0) {
  for (let k = 0; k < navSection.length; k++) {
    navListItem = document.createElement("li");
    activeSection = navSection[k].getAttribute("id");
    navListItem.innerHTML = `<a href="#${activeSection}">${navSection[
      k
    ].getAttribute("data-nav")}</a>`;
    navbarList.appendChild(navListItem);
    navListItem.className = "list-item";
  }
} else {
  navbarList.remove();
}

// Set sections as active
navbarList.addEventListener("click", setActive, false);

function setActive(event) {
  for (let i = 0; i < navSection.length; i++) {
    navSection[i].classList.remove("your-active-class");
  }

  if (event.target && event.target.matches("li a")) {
    let sectDataNavAttribute = `[data-nav='${event.target.textContent}']`;
    scrollToSection(sectDataNavAttribute);
    document
      .querySelector(sectDataNavAttribute)
      .classList.toggle("your-active-class");
  }
}
