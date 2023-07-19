/**

                                                     __----~~~~~~~~~~~------___
                                    .  .   ~~//====......          __--~ ~~
                    -.            \_|//     |||\\  ~~~~~~::::... /~
                 ___-==_       _-~o~  \/    |||  \\            _/~~-
         __---~~~.==~||\=_    -_--~/_-~|-   |\\   \\        _/~
     _-~~     .=~    |  \\-_    '-~7  /-   /  ||    \      /
   .~       .~       |   \\ -_    /  /-   /   ||      \   /
  /  ____  /         |     \\ ~-_/  /|- _/   .||       \ /
  |~~    ~~|--~~~~--_ \     ~==-/   | \~--===~~        .\
           '         ~-|      /|    |-~\~~       __--~~
                       |-~~-_/ |    |   ~\_   _-~            /\
                            /  \     \__   \/~                \__
                        _--~ _/ | .-~~____--~-/                  ~~==.
                       ((->/~   '.|||' -_|    ~~-/ ,              . _||
                                  -_     ~\      ~~---l__i__i__i--~~_/
                                  _-~-__   ~)  \--______________--~~
                                //.-~~~-~_--~- |-------~~~~~~~~
                                       //.-~~~--\
                                神獸保佑，程式碼沒Bug!
    
*/


// /*************************************************************************************** */
// // Define an array of the product sections
// const productSections = document.querySelectorAll('.product-section');

// // Define the product images
// const productImages = document.querySelectorAll('#image-container img');

// // Set the first product image to active
// productImages[0].classList.add('active');

// // Add an event listener for the scroll event
// window.addEventListener('scroll', () => {
//     // Get the current scroll position
//     const scrollPosition = window.scrollY;

//     // Loop through the product sections
//     productSections.forEach((section, index) => {
//         // Get the top and bottom positions of the section
//         const sectionTop = section.offsetTop;
//         const sectionBottom = sectionTop + section.offsetHeight;

//         // Check if the current scroll position is within the section
//         if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
//             // Set the corresponding product image to active
//             productImages.forEach(image => image.classList.remove('active'));
//             productImages[index].classList.add('active');
//         }
//     });
// });

// /*************************************************************************************** */

// var elements = document.querySelectorAll('.effect');

// window.addEventListener('scroll', function () {
//     elements.forEach(function (element) {
//         var position = element.getBoundingClientRect();

//         if (position.top >= 0 && position.bottom <= window.innerHeight) {
//             element.classList.add('scroll');
//         } else {
//             element.classList.remove('scroll');
//         }
//     });
// });

/*************************************************************************************** */

const productSections = document.querySelectorAll('.product-section');
const productImages = document.querySelectorAll('#image-container img');
const elements = document.querySelectorAll('.effect');

productImages[0].classList.add('active');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    productSections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            productImages.forEach(image => image.classList.remove('active'));
            productImages[index].classList.add('active');
        }
    });

    elements.forEach(element => {
        const position = element.getBoundingClientRect();

        if (position.top >= 0 && position.bottom <= window.innerHeight) {
            element.classList.add('scroll');
        } else {
            element.classList.remove('scroll');
        }
    });
});

/*************************************************************************************** */



/*************************************************************************************** */

// const navMenuBtn = document.getElementById("nav_menu_btn");
// const toggler = document.getElementById("toggler");
// const menuToggle = document.querySelector(".menu-toggle");

// toggler.addEventListener("click", () =>{
//     toggle();
// })

