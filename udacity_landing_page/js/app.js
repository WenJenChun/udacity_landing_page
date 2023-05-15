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

// build the nav
const allSections = [
    {title: 'Section1', },
    {title: 'Section2', },
    {title: 'Section3', },
    {title: 'Section4', },
  ];

const navBar = document.querySelector('#navbar__list');

allSections.forEach(section => {
  const li = document.createElement('li');
  li.innerHTML = `<a href="#${section.title}">${section.title}</a>`;
  li.setAttribute('class', 'nav-item');
  navBar.appendChild(li);
});

// add section 4
const main = document.querySelector('main');
const sectionNo4 = document.createElement('section');
sectionNo4.innerHTML = 
`<div class="landing__container">
  <h2>Section 4</h2>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
  <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
</div>`; 
sectionNo4.setAttribute('id','Section4');
sectionNo4.setAttribute('data-nav','Section4');
main.appendChild(sectionNo4);


// add up arrow icon
const upIcon = document.createElement('button');
upIcon.textContent='⬆︎';
upIcon.setAttribute('class', 'upIcon');
upIcon.setAttribute('onclick','backToTop()');
main.appendChild(upIcon);

function backToTop(){
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
}

// add class 'active' to section when near top of viewport

sections = document.querySelectorAll('section');
window.addEventListener("scroll", function(){
  sections.forEach(sec =>{
    if(sec.getBoundingClientRect().top >= -500 && sec.getBoundingClientRect().top <= 115){
      sec.setAttribute('class', 'active');
    } else {
      sec.classList.remove('active')
    }
  });
});


// add class 'on' to nav item when near top of viewport

function setActiveNavItem() {
  const navLinks = document.querySelectorAll('.nav-item a');
  sections.forEach(section => {
    const sectionTitle = section.getAttribute('data-nav');
    if (section.getBoundingClientRect().top >= -500 && section.getBoundingClientRect().top <= 115) {
      navLinks.forEach(navLink => {
        if (navLink.innerText === sectionTitle) {
          navLink.classList.add('on');
        } else {
          navLink.classList.remove('on');
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveNavItem);


// scroll to anchor ID using scrollTO event

const navLinks = document.querySelectorAll('.nav-item a');

for (const link of navLinks) {
  link.addEventListener('click', scrollToSection);
}

function scrollToSection(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  const targetPosition = targetElement.offsetTop - 100;
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth' 
  });

  setActiveNavItem(targetElement);

}


/**
 * End Main Functions
 * Begin Events
 * 
*/



