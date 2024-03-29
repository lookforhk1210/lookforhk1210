//JavaScript


/* menu btn */
const menuBtn = document.querySelector(".toggler");
const menuLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    toggle();

    /* freeze screen */
    freeze();
});

function toggle() {
    menuBtn.classList.toggle("open");
    menuLinks.classList.toggle("open");
};

const body = document.querySelector(".body-setting");

function freeze() {
    body.classList.toggle("freeze");
}

// click menu 
// function clickLink() {
//     body.classList.remove("freeze");

//     menuLinks.classList.remove("open");
//     menuBtn.classList.remove("open");

//     document.getElementById("toggler").checked = false;
// };

document.querySelectorAll(".activeLink").forEach(item => {
    item.addEventListener("click", event => {
        activeLink();
    })
});

function activeLink() {
    body.classList.remove("freeze");
    menuLinks.classList.remove("open");
    menuBtn.classList.remove("open");
    document.getElementById("toggler").checked = false;
};


//img js settings
//getting all required elements
const gallery = document.querySelectorAll(".imge"),
    previewBox = document.querySelector(".preview-box"),
    previewImg = previewBox.querySelector("img"),
    // closeIcon = previewBox.querySelector(".icon"),
    closeIcon = previewBox.querySelector(".prev-close"),
    currentImg = previewBox.querySelector(".current-img"),
    totalImg = previewBox.querySelector(".total-img"),
    shadow = document.querySelector(".shadow");

window.onload = () => {
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length; //passing total img length to totalImg variable
        let newIndex = i; //passing i value to newIndex variable
        let clickedImgIndex; //creating new variable

        gallery[i].onclick = () => {
            clickedImgIndex = i; //passing cliked image index to created variable (clickedImgIndex)
            function preview() {
                currentImg.textContent = newIndex + 1; //passing current img index to currentImg varible with adding +1
                let imageURL = gallery[newIndex].querySelector("img").src; //getting user clicked img url
                previewImg.src = imageURL; //passing user clicked img url in previewImg src
            }
            preview(); //calling above function

            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");
            if (newIndex == 0) { //if index value is equal to 0 then hide prevBtn
                prevBtn.style.display = "none";
            }
            if (newIndex >= gallery.length - 1) { //if index value is greater and equal to gallery length by -1 then hide nextBtn
                nextBtn.style.display = "none";
            }
            prevBtn.onclick = () => {
                newIndex--; //decrement index
                if (newIndex == 0) {
                    preview();
                    prevBtn.style.display = "none";
                } else {
                    preview();
                    nextBtn.style.display = "block";
                }
            }
            nextBtn.onclick = () => {
                newIndex++; //increment index
                if (newIndex >= gallery.length - 1) {
                    preview();
                    nextBtn.style.display = "none";
                } else {
                    preview();
                    prevBtn.style.display = "block";
                }
            }
            // document.querySelector("body").style.overflow = "hidden";
            body.classList.toggle("freeze");
            previewBox.classList.add("show");
            shadow.style.display = "block";
            closeIcon.onclick = () => {
                newIndex = clickedImgIndex; //assigning user first clicked img index to newIndex
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                // document.querySelector("body").style.overflow = "auto";
                body.classList.remove("freeze");
            }
        }

    }
};


function checkScroll() {
    const windowHeight = window.innerHeight;
    gallery.forEach((img) => {
        const imgTop = img.getBoundingClientRect().top;
        const imgBottom = img.getBoundingClientRect().bottom;
        if (imgTop < windowHeight && imgBottom >= 0) {
            img.classList.add("fade-in");
            img.classList.remove("fade-out");
        } else {
            img.classList.add("fade-out");
            img.classList.remove("fade-in");
        }
    });
};

window.addEventListener("scroll", checkScroll);

window.addEventListener('scroll', function () {
    if (window.location.hash) {
        history.replaceState(null, null, window.location.href.split('#')[0]);
    }
});


/*LookForHongKong Studio*/