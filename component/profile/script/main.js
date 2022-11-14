// javasrcipt 

const menuBtn = document.querySelector(".toggler");
const menuLink = document.querySelector(".navbar-navlinks");
const body = document.querySelector(".body-setting");

menuBtn.addEventListener("click", () => {
    toggle();

    /* freeze screen */
    freeze();
});


function toggle() {
    menuBtn.classList.toggle("open");
    menuLink.classList.toggle("open");
}

function freeze() {
    body.classList.toggle("freeze");
}

document.querySelectorAll(".activeLink").forEach(item => {
    item.addEventListener("click", event => {
        activeLink();
    })
})

function activeLink() {
    menuBtn.classList.remove("open")
    menuLink.classList.remove("open");
    document.getElementById("toggler").checked = false;
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    diration: 2000,
    reset: false
});

sr.reveal('.home-caption', {
    delay: 100
});

sr.reveal('.home-content', {
    delay: 200
});

sr.reveal('.hero-btn', {
    delay: 240
});

sr.reveal('.main-founder', {
    delay: 100
});

sr.reveal('.main-skills', {
    delay: 100
});

sr.reveal('.main-portfolio', {
    delay: 100
});

sr.reveal('.project-card-col', {
    interval: 50,
    reset: true
});

sr.reveal('.main-contact', {
    delay: 100
});