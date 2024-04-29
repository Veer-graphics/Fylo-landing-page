// open navbar
const menuToggle = document.querySelector('.menuToggle');
const body = document.querySelector('body');

menuToggle.addEventListener('click', () => {
    toggleNav();
})

function toggleNav() {
    body.classList.toggle('showMenu');
}
// fetch data
function fetchData() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            showUsps(data);
            showTestimonials(data);
        })
        .catch(error => console.error(error, 'fetch error'));
}

// show usp
function showUsps(data) {
    const usps = data.usps;
    const uspContainer = document.querySelector('.usp-grid');

    uspContainer.innerHTML = usps.map(usp => {
        return `
        <div class="gridbox usp-box">
            <div class="usp-icon-wrapper margin-bottom-medium"><img src="${usp.uspIcon}" alt=""></div>
            <div class="usp-text">
                <h5 class="heading-five margin-bottom-tiny">${usp.uspName}</h5>
                <p class="usp-description">
                    ${usp.uspDescription}
                </p>
            </div>
        </div>
        `;
    }).join('');
}

// show testimonial
function showTestimonials(data) {
    const testimonialContainer = document.querySelector('.testimonial-grid');
    const testimonials = data.testimonials;

    testimonialContainer.innerHTML = testimonials.map(testimonial => {
        return `
        <div class="testimonial">
            <p class="review margin-bottom-medium">
                ${testimonial.review}
            </p>
            <div class="flex align-center gap-tiny">
                <div class="avatar-img-wrapper"><img src="${testimonial.avatar}" alt=""></div>
                <div class="author-content">
                    <h6 class="author-name margin-bottom-tiny">${testimonial.name}</h6>
                    <figure class="function">${testimonial.function}</figure>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

fetchData();

// form function
const form = document.querySelector('.email-form');
const emailField = form.querySelector('.email-field');
const emailInput = emailField.querySelector('.emailInput');
const emailValue = emailInput.value;
const errorMessage = emailField.querySelector('.error');
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkEmail();
})

function checkEmail() {
    if(emailValue === '' || !emailValue.match(emailPattern)) {
        // console.log('show error');
        emailField.classList.add('showError'); 

        if(emailValue === "") {
            errorMessage.innerHTML = "Please enter your email address"
        } else if(!emailValue.match(emailPattern)) {
            errorMessage.innerHTML = 'Please enter a valid email address'
        } else {

        }
    } else {

    }
}