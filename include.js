// include.js — hardcode navbar & footer trực tiếp, không phụ thuộc file ngoài
document.addEventListener('DOMContentLoaded', function () {

  var NAVBAR = '<header class="header"><nav class="navbar container"><div class="order-0"><a href="index.html"><img src="images/logo.svg" height="30" width="147" alt="logo"></a></div><input id="nav-toggle" type="checkbox" class="hidden"><label id="show-button" for="nav-toggle" class="order-1 flex cursor-pointer items-center lg:order-1 lg:hidden"><svg class="h-6 fill-current" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path></svg></label><label id="hide-button" for="nav-toggle" class="order-2 hidden cursor-pointer items-center lg:order-1"><svg class="h-6 fill-current" viewBox="0 0 20 20"><polygon points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2" transform="rotate(45 10 10)"></polygon></svg></label><ul id="nav-menu" class="navbar-nav order-2 hidden w-full flex-[0_0_100%] lg:order-1 lg:flex lg:w-auto lg:flex-auto lg:justify-center lg:space-x-5"><li class="nav-item"><a href="index.html" class="nav-link">Home</a></li><li class="nav-item"><a href="about.html" class="nav-link">About</a></li><li class="nav-item"><a href="blog.html" class="nav-link">Blog</a></li><li class="nav-item"><a href="features.html" class="nav-link">Features</a></li><li class="nav-item"><a href="how-it-works.html" class="nav-link">How It Works</a></li><li class="nav-item nav-dropdown group relative"><span class="nav-link inline-flex items-center">Pages<svg class="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></span><ul class="nav-dropdown-list hidden group-hover:block lg:invisible lg:absolute lg:block lg:opacity-0 lg:group-hover:visible lg:group-hover:opacity-100"><li class="nav-dropdown-item"><a href="career.html" class="nav-dropdown-link">Career</a></li><li class="nav-dropdown-item"><a href="career-single.html" class="nav-dropdown-link">Career Single</a></li><li class="nav-dropdown-item"><a href="integrations.html" class="nav-dropdown-link">Integrations</a></li><li class="nav-dropdown-item"><a href="integration-single.html" class="nav-dropdown-link">Integration Single</a></li><li class="nav-dropdown-item"><a href="pricing.html" class="nav-dropdown-link">Pricing</a></li><li class="nav-dropdown-item"><a href="changelogs.html" class="nav-dropdown-link">Changelogs</a></li><li class="nav-dropdown-item"><a href="terms-conditions.html" class="nav-dropdown-link">Terms &amp; Conditions</a></li></ul></li><li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li></ul><div class="order-1 ml-auto flex items-center md:order-2 lg:ml-0"><a href="signin.html" class="btn btn-primary py-[10px] lg:inline-block">Sing Up Now</a></div></nav></header>';

  var FOOTER = '<footer class="footer bg-theme-light/50"><div class="container"><div class="row gx-5 pb-10 pt-[52px]"><div class="col-12 mt-12 md:col-6 lg:col-3"><a href="index.html"><img src="images/logo.svg" alt="Pinwheel"></a><p class="mt-6">Lorem ipsum dolor sit sed dmi amet, consectetur adipiscing. Cdo tellus, sed condimentum volutpat.</p></div><div class="col-12 mt-12 md:col-6 lg:col-3"><h6>Socials</h6><p>themefisher@gmail.com</p></div><div class="col-12 mt-12 md:col-6 lg:col-3"><h6>Quick Links</h6><ul><li><a href="about.html">About</a></li><li><a href="#">Category</a></li><li><a href="#">Testimonial</a></li><li><a href="contact.html">Contact</a></li></ul></div><div class="col-12 mt-12 md:col-6 lg:col-3"><h6>Location &amp; Contact</h6><p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p><p>(704) 555-0127</p></div></div><div class="footer-copyright mx-auto border-t border-border pb-10 pt-7 text-center"><p>Designed And Developed by <a href="https://themefisher.com" target="_blank">Themefisher</a></p></div></div></footer>';

  // Inject navbar
  var navEl = document.getElementById('navbar-placeholder');
  if (navEl) navEl.outerHTML = NAVBAR;

  // Inject footer
  var footEl = document.getElementById('footer-placeholder');
  if (footEl) footEl.outerHTML = FOOTER;

  // Active link sau khi inject
  setTimeout(function () {
    var page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function (a) {
      var href = a.getAttribute('href');
      a.classList.toggle('active', href === page || (page === 'index.html' && href === ''));
    });
  }, 50);
});