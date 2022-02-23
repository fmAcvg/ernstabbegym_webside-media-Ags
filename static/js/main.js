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