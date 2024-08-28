function scrollToContact(){
    document.getElementById('contact').scrollIntoView({behavior: "smooth"});
}

function openLinkInNewTab(url){
    window.open(url, "_blank").focus();
}

function removeNavbarOnClick(){
    document.querySelector('.navbar-collapse.show').classList.remove('show');
}    

document.addEventListener('DOMContentLoaded', function() {

    const photoURL = 'https://lh3.googleusercontent.com/d/1P3QwQgK5C2akdCGtfNFhjV63rxnO3_tT'; // Update this with the correct path to your photo

    const image = document.createElement('img');
    image.src = photoURL;
    image.alt = 'Fairfield Residence';

    const photoContainer = document.getElementById('photo-container');
    photoContainer.appendChild(image);
});

function myFunction(){
    let goHide = document.querySelector(".photo-container");
    goHide.style.display = "none";
}







