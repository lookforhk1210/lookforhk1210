const menuBtn = document.querySelector(".toggler");
const menuLink = document.querySelector(".navbar-navlinks");
const body = document.querySelector(".body-setting");
menuBtn.addEventListener("click", () => {
    toggle();
    freeze()
});

function toggle() {
    menuBtn.classList.toggle("open");
    menuLink.classList.toggle("open")
};

function freeze() {
    body.classList.toggle("freeze")
};
document.querySelectorAll(".activeLink").forEach(item => {
    item.addEventListener("click", event => {
        activeLink()
    })
});

function activeLink() {
    menuBtn.classList.remove("open");
    menuLink.classList.remove("open");
    document.getElementById("toggler").checked = false
};
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
    interval: 80,
    reset: false
});
sr.reveal('.main-contact', {
    delay: 100
});
sr.reveal('.course-col', {
    interval: 50,
});
window.addEventListener('scroll', function () {
    if (window.location.hash) {
        history.replaceState(null, null, window.location.href.split('#')[0])
    }
});
sr.reveal('.skills-row', {
    interval: 140,
    origin: 'left'
});
var targetPercentages = {
    html: 80,
    css: 80,
    javascript: 60,
    reactjs: 50,
    swiftui: 30,
    ai: 80,
    ps: 70,
    lightroom: 80,
    pr: 70,
    figma: 80
};
var duration = 6800;
var framesPerSecond = 30;

function updatePercentage(elementId, targetPercentage) {
    var element = document.getElementById(elementId);
    var currentPercentage = parseInt(element.textContent);
    var increment = (targetPercentage - currentPercentage) / (duration / 1000) / framesPerSecond;
    var counter = currentPercentage;

    function update() {
        if (counter < targetPercentage) {
            counter += increment;
            element.textContent = Math.round(counter) + "%";
            requestAnimationFrame(update)
        } else {
            element.textContent = targetPercentage + "%"
        }
    }
    update()
}

function handleScroll() {
    var skillsSection = document.getElementById('skills');
    if (isElementInViewport(skillsSection)) {
        window.removeEventListener('scroll', handleScroll);
        updatePercentage("html-skill-row", targetPercentages.html);
        updatePercentage("css-skill-row", targetPercentages.css);
        updatePercentage("javascript-skill-row", targetPercentages.javascript);
        updatePercentage("reactjs-skill-row", targetPercentages.reactjs);
        updatePercentage("swiftui-skill-row", targetPercentages.swiftui);
        updatePercentage("ai-skill-row", targetPercentages.ai);
        updatePercentage("ps-skill-row", targetPercentages.ps);
        updatePercentage("lightroom-skill-row", targetPercentages.lightroom);
        updatePercentage("pr-skill-row", targetPercentages.pr);
        updatePercentage("figma-skill-row", targetPercentages.figma)
    }
}
window.addEventListener('scroll', handleScroll);

function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth))
};

/*LookForHongKong Studio*/