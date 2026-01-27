/*Show Menu*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*Menu show*/
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/*Menu Hidden*/
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*Remove Menu Mobile*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));

/*Home Typed JS*/
const typedHome = new Typed('#home-typed', {
  strings: ['Web Developer', 'Freelancer', 'Designer'],
  typeSpeed: 90,
  backSpeed: 50,
  backDelay: 2000,
  loop: true,
  showCursor: true,
  cursorChar: '|'
});


/*Add Shadow Header*/
const shadowHeader = () => {
  const header = document.getElementById('header')
  this.scrollY >= 50 ? header.classList.add('shadow-header')
    : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*Contact Form JS*/
const contactForm = document.getElementById('contact-form'),
  contactMessage = document.getElementById('contact-message')
const sendEmail = (e) => {
  e.preventDefault()

  emailjs.sendForm('service_pws03ts', 'template_cqikzqr', '#contact-form', 'Diy-0BG4pBqWczWt0')
    .then(() => {
      //Show sent message
      contactMessage.textContent = 'Message sent successfully ✅'

      //Remove message after five seconds
      setTimeout(() => {
        contactMessage.textContent = ''
      }, 5000)

      //Clear input
      contactForm.reset()

    }, () => {
      //Show error message
      contactMessage.textContent = 'Message not sent ❌'
    })
}
contactForm.addEventListener('submit', sendEmail)
