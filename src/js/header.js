document.addEventListener("DOMContentLoaded", function() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-link');

  // Get the current page URL
  const currentUrl = window.location.pathname.split('/').pop();
  console.log(currentUrl);

  // Loop through each link
  navLinks.forEach(link => {
      // If the link's href matches the current URL, add the 'active' class
      if (link.getAttribute('href') === currentUrl) {
          link.classList.add('active');
      }
  });
});