const menuBtn=document.querySelector(".toggler");const menuLinks=document.querySelector(".nav-links");menuBtn.addEventListener("click",()=>{toggle();freeze()});function toggle(){menuBtn.classList.toggle("open");menuLinks.classList.toggle("open")};const body=document.querySelector(".body-setting");function freeze(){body.classList.toggle("freeze")}function clickLink(){body.classList.remove("freeze");menuLinks.classList.remove("open");menuBtn.classList.remove("open");document.getElementById("toggler").checked=false};const gallery=document.querySelectorAll(".imge"),previewBox=document.querySelector(".preview-box"),previewImg=previewBox.querySelector("img"),closeIcon=previewBox.querySelector(".icon"),currentImg=previewBox.querySelector(".current-img"),totalImg=previewBox.querySelector(".total-img"),shadow=document.querySelector(".shadow");window.onload=()=>{for(let i=0;i<gallery.length;i++){totalImg.textContent=gallery.length;let newIndex=i;let clickedImgIndex;gallery[i].onclick=()=>{clickedImgIndex=i;function preview(){currentImg.textContent=newIndex+1;let imageURL=gallery[newIndex].querySelector("img").src;previewImg.src=imageURL}preview();const prevBtn=document.querySelector(".prev");const nextBtn=document.querySelector(".next");if(newIndex==0){prevBtn.style.display="none"}if(newIndex>=gallery.length-1){nextBtn.style.display="none"}prevBtn.onclick=()=>{newIndex--;if(newIndex==0){preview();prevBtn.style.display="none"}else{preview();nextBtn.style.display="block"}};nextBtn.onclick=()=>{newIndex++;if(newIndex>=gallery.length-1){preview();nextBtn.style.display="none"}else{preview();prevBtn.style.display="block"}};body.classList.toggle("freeze");previewBox.classList.add("show");shadow.style.display="block";closeIcon.onclick=()=>{newIndex=clickedImgIndex;prevBtn.style.display="block";nextBtn.style.display="block";previewBox.classList.remove("show");shadow.style.display="none";body.classList.remove("freeze")}}}};

/*LookForHongKong Studio*/