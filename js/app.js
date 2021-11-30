// get elements
const navbar = document.querySelector('.nav-bar');
const menu = document.querySelector('#nav-menu');
const sections = document.querySelectorAll('section'); 

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
const aboutData = aboutLink.setAttribute('data-type', 'about');
const aboutClass = aboutLink.setAttribute('class', 'nav-list');
const servicesData = servicesLink.setAttribute('data-type', 'services');
const servicesClass = servicesLink.setAttribute('class', 'nav-list');
const eventsData = eventsLink.setAttribute('data-type', 'events');
const eventsClass = eventsLink.setAttribute('class', 'nav-list');
const galleryData = galleryLink.setAttribute('data-type', 'gallery');
const galleryClass = galleryLink.setAttribute('class', 'nav-list');
const meetingBtn = meeting.setAttribute('class', 'nav-list nav-btn');


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

sections.forEach((section) => {
    const liTag = document.createElement('li');
    const aTag = document.createElement('a');
    aTag.innerText = sections.getAttribute('data-nav');
    aTag.setAttribute('class', 'menu__link');

    // scroll to anchor ID using scroll to event
    aTag.addEventListener("click", () => {
        sections.scrollIntoView({behavior: "smooth"});
        });
});


// evemtlistner to load the navbar
document.addEventListener('DOMContentLoaded', function(){
    return menu;


});

// let element = document.querySelectorAll('.nav-list');

// sections.forEach(function(item){

//     element.addEventListener('click', function(e){
//         e.preventDefault();
        
//         sections.scrollIntoView({behavior: 'smooth', block: 'center'});
//     });
// });
