(function () {
  var root = document.documentElement;
  root.classList.add("js");

  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  // Contact details come from config.js so they are edited in one place.
  var cfg = window.UTPW_CONFIG || {};
  document.querySelectorAll("[data-contact-link]").forEach(function (a) {
    var kind = a.getAttribute("data-contact-link");
    if (kind === "email" && cfg.email) {
      a.href = "mailto:" + cfg.email;
      a.textContent = cfg.email;
      a.hidden = false;
    } else if (kind === "join" && cfg.joinUrl) {
      a.href = cfg.joinUrl;
      a.hidden = false;
    }
  });
  document.querySelectorAll("[data-contact-fallback]").forEach(function (el) {
    if (cfg.email || cfg.joinUrl) el.hidden = true;
  });
})();
