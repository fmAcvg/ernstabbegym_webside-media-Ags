function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

function opennav() {
    document.getElementsByClassName("hidden_nav")[0].style.transform ="rotate(90deg)";
    document.getElementsByClassName("navbar")[0].style.top = "34px";
    document.getElementsByClassName("navbar")[0].style.height = "50px";
    document.getElementsByClassName("hidden_nav")[0].style.display = "none";
    document.getElementsByClassName("nav")[0].style.display ="unset";

}

function closenav() {
    document.getElementsByClassName("hidden_nav")[0].style.transform ="rotate(0deg)";
    document.getElementsByClassName("navbar")[0].style.top = "0px";
    document.getElementsByClassName("navbar")[0].style.height = "0px";
    document.getElementsByClassName("hidden_nav")[0].style.display = "unset";
    document.getElementsByClassName("nav")[0].style.display ="none";
}

//Get the button:
mybutton = document.getElementById("getup");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}