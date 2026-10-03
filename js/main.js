// Small progressive enhancements — the site works without this file.
(function () {
  document.documentElement.classList.add("js");

  document.addEventListener("DOMContentLoaded", function () {
    // Mobile nav toggle
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (toggle && links) {
      toggle.addEventListener("click", function () {
        var open = links.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
    }

    // Footer year
    var year = document.getElementById("year");
    if (year) year.textContent = new Date().getFullYear();

    // Fade sections in as they scroll into view
    var items = document.querySelectorAll(".reveal");
    var show = function (el) { el.classList.add("visible"); };
    if (!("IntersectionObserver" in window)) {
      items.forEach(show);
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          show(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -40px 0px" });
    items.forEach(function (el) {
      // Anything already on screen (or targeted by a #link) shows right away
      if (el.getBoundingClientRect().top < window.innerHeight || ("#" + el.id) === location.hash) {
        show(el);
      } else {
        observer.observe(el);
      }
    });
  });
})();
