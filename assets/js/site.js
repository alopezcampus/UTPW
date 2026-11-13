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
    }
  });

  // Mailing-list sign-up (Contact page)
  var form = document.querySelector("[data-subscribe]");
  if (form) {
    var msg = form.parentNode.querySelector("[data-subscribe-msg]");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector("input[type=email]");
      if (!input.checkValidity()) { input.reportValidity(); return; }
      var addr = input.value.trim();
      function done(text) { if (msg) { msg.textContent = text; msg.hidden = false; } }
      if (cfg.subscribeAction) {
        var data = new FormData(form);
        fetch(cfg.subscribeAction, { method: "POST", body: data, headers: { Accept: "application/json" } })
          .then(function (r) {
            if (!r.ok) throw new Error();
            form.reset();
            done("Thank you. You are on the mailing list.");
          })
          .catch(function () { done("Something went wrong. Please write to " + cfg.email + "."); });
      } else {
        location.href = "mailto:" + cfg.email + "?subject=" + encodeURIComponent("Subscribe to the mailing list") +
          "&body=" + encodeURIComponent("Please add " + addr + " to the mailing list.");
        done("Your email app should now open with the request. Send it and you are on the list.");
      }
    });
  }
})();

// Coming up next: pinned reminder appears once the banner scrolls out of view
(function () {
  var pin = document.querySelector("[data-pin]");
  var banner = document.querySelector(".promo");
  if (!pin || !banner || !("IntersectionObserver" in window)) return;
  var key = "utpw-pin-closed-" + (pin.querySelector("a") || {}).getAttribute("href");
  var closed = false;
  try { closed = sessionStorage.getItem(key) === "1"; } catch (e) {}
  if (closed) return;
  function show(on) {
    if (on) { pin.hidden = false; requestAnimationFrame(function () { pin.classList.add("show"); }); }
    else { pin.classList.remove("show"); setTimeout(function () { if (!pin.classList.contains("show")) pin.hidden = true; }, 260); }
  }
  var io = new IntersectionObserver(function (entries) {
    if (!closed) show(!entries[0].isIntersecting);
  });
  io.observe(banner);
  var btn = pin.querySelector("[data-pin-close]");
  if (btn) btn.addEventListener("click", function () {
    closed = true; show(false); io.disconnect();
    try { sessionStorage.setItem(key, "1"); } catch (e) {}
  });
})();
