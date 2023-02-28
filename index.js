// ========== Day One Lab =============

const mainEL = document.querySelector("main");
console.log(mainEL);

mainEL.style.backgroundColor = "var(--main-bg)";

mainEL.innerHTML = "<h1>SEI Rocks!</h1>";

mainEL.classList.add("flex-ctr");
// or
// mainEL.className = 'flex-ctr'
const topMenuEl = document.getElementById("top-menu");

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");
console.log(topMenuEl);

// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];
menuLinks.forEach((obj) => {
  const a = document.createElement("a");
  a.setAttribute("href", obj.href);
  a.textContent = obj.text;
  topMenuEl.appendChild(a);
  console.log(a);
});

// Iterate over menuLinks array
//  for (let i = 0; i < menuLinks.length; i++) {

// Create new anchor element
//   const linkEl = document.createElement('a');

// Set href attribute to link object's href property
//   linkEl.setAttribute('href', menuLinks[i].href);

// Set the new element's content to the value of the text property of the link object
//   linkEl.textContent = menuLinks[i].text;

// Append the new element to the topMenuEl element
//   topMenuEl.appendChild(linkEl);
// }

// ==========  Day Two Lab ================


const subMenuEl = document.getElementById("sub-menu");
// const topMenuEl = document.getElementById("top-menu");
const mainEl = document.getElementById("main");

subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";
console.log(subMenuEl);

var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

const topMenuLinks = topMenuEl.querySelectorAll("a");
console.log(topMenuLinks);

let showingSubMenu = false;
// console.log(showingSubMenu)

function buildSubMenu(subLinks) {
  subMenuEl.textContent = "";
  subLinks.forEach((link) => {
    const subMenuLinkEl = document.createElement("a");
    subMenuLinkEl.setAttribute("href", link.href);
    subMenuLinkEl.textContent = link.text;
    subMenuEl.appendChild(subMenuLinkEl);
  });
}

topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  // console.log(event.target.tagName.toLowerCase())
  if (event.target.tagName.toLowerCase() !== "a") {
    console.log(event.target.tagName.toLowerCase());
    return;
  }
  const clickedObj = menuLinks.find(
    (link) => link.text === event.target.textContent
  );
  if (clickedObj.subLinks) {
    showingSubMenu = true;
    buildSubMenu(clickedObj.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    showingSubMenu = false;
    subMenuEl.style.top = "0";
  }
  // console.log(topMenuEl)
  topMenuLinks.forEach((link) => link.classList.remove("active"));
  event.target.classList.add("active");
  console.log(event.target.innerHTML);
});

subMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName.toLowerCase() !== "a") {
    return;
  }
  showingSubMenu = false;
  subMenuEl.style.top = "0";
  topMenuLinks.forEach((link) => link.classList.remove("active"));
  event.target.classList.add("active");
  if (event.target.textContent === "about") {
    mainEl.innerHTML = "<h1>about</h1>";
  } else {
    mainEl.innerHTML = "<h1>" + event.target.textContent + "</h1>";
  }
});
