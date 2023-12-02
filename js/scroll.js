let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  // Check if the behavior smooth-scroll is supported
  if ("scrollBehavior" in document.documentElement.style) {
    // Smooth scroll to the top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    // For older browsers that don't support smooth scroll
    window.scrollTo(0, 0);
  }
}
