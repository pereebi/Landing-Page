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


const aTags = document.querySelectorAll('.nav-list');

aTags.forEach((element) => {
    element.addEventListener('click', () =>{
        const sectionData = document.getElementById(element.getAttribute('data-link'));
        sectionData.scrollIntoView({behavior: 'smooth', block: 'center'});
        
         element.classList.add('clicked');
    });
});
















// let element = document.querySelectorAll('.nav-list');

// sections.forEach(function(item){

//     element.addEventListener('click', function(e){
//         e.preventDefault();
        
//         sections.scrollIntoView({behavior: 'smooth', block: 'center'});
//     });
// });
