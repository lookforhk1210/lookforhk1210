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