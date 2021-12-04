// get elements
const menu = document.querySelector('#nav-menu'); 

// create the elements for the nav-bar
const about = document.createElement('li');
const aboutLink = document.createElement('a');
const services = document.createElement('li');
const servicesLink = document.createElement('a');
const events = document.createElement('li');
const eventsLink = document.createElement('a');
const gallery = document.createElement('li');
const galleryLink = document.createElement('a');
const meeting = document.createElement('li');
const meetingLink = document.createElement('a');

// setting data and class attributes
aboutLink.setAttribute('data-link', 'about');
aboutLink.setAttribute('class', 'nav-list');
servicesLink.setAttribute('data-link', 'services');
servicesLink.setAttribute('class', 'nav-list');
eventsLink.setAttribute('data-link', 'events');
eventsLink.setAttribute('class', 'nav-list');
galleryLink.setAttribute('data-link', 'gallery');
galleryLink.setAttribute('class', 'nav-list');
meetingLink.setAttribute('data-link', 'footer');
meeting.setAttribute('class', 'nav-list nav-btn');


// add text content to them
aboutLink.textContent = `About`;
servicesLink.textContent = `Services`;
eventsLink.textContent = `Events`;
galleryLink.textContent = `Gallery`;
meetingLink.textContent = `Set up A Meeting`;



// append a tag to the li's
about.appendChild(aboutLink);
services.appendChild(servicesLink);
events.appendChild(eventsLink);
gallery.appendChild(galleryLink);
meeting.appendChild(meetingLink);


// li's to the menu
menu.appendChild(about);
menu.appendChild(services);
menu.appendChild(events);
menu.appendChild(gallery);
menu.appendChild(meeting);


// selecting the aTags by class list
const aTags = document.querySelectorAll('.nav-list');



aTags.forEach((element) => {
    element.addEventListener('click', () =>{

        // removing the active class on click
        const activeclass = document.querySelector('.clicked');
        console.log(activeclass);
        if(activeclass !== null){
            activeclass.classList.remove('clicked');
        }

        // linking the data-link to each section by id to scrollIntoView
        const sectionData = document.getElementById(element.getAttribute('data-link'));
        sectionData.scrollIntoView({behavior: 'smooth', block: 'center'});
        
         element.classList.add('clicked');
    });
});


const btn = document.querySelector('.nav-btn');

btn.addEventListener('click', () =>{

    const btnData = document.getElementById('footer');
    btnData.scrollIntoView({behavior: 'smooth', block: 'center'});
});


// setting the funcionallity for the nav-bar
// getting the items
const mobileMenu = document.querySelector('.mobile-menu');
const menuBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-times');
const menuMenu = document.querySelector('.menu');

function toggleMobileMenu() {
    if(menuMenu.classList.contains('show-menu')){
        menuMenu.classList.remove('show-menu');
        menuBtn.style.display = "block";
        mobileMenu.style.border = "1px solid black";
        closeBtn.style.display = "none";
    }else{
        menuMenu.classList.add('show-menu');
        menuBtn.style.display = "none";
        closeBtn.style.display = "block";
    }
}

mobileMenu.addEventListener('click', toggleMobileMenu);

aTags.forEach( 
    function(aTag) { 
      aTag.addEventListener("click", toggleMobileMenu);
    }
  );