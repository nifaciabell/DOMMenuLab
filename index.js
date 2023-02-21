const mainEL = document.querySelector('main')
console.log(mainEL)

mainEL.style.backgroundColor = 'var(--main-bg)'

mainEL.innerHTML = '<h1>SEI Rocks!</h1>'

mainEL.classList.add('flex-ctr');
const topMenuEl = document.getElementById('top-menu')


topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.classList.add('flex-around');
console.log(topMenuEl)

// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

   // Iterate over menuLinks array
   for (let i = 0; i < menuLinks.length; i++) {
    // Create new anchor element
    const linkEl = document.createElement('a');
  
    // Set href attribute to link object's href property
    linkEl.setAttribute('href', menuLinks[i].href);
  
    // Set the new element's content to the value of the text property of the link object
    linkEl.textContent = menuLinks[i].text;
  
    // Append the new element to the topMenuElelement
    topMenuEl.appendChild(linkEl);
  }