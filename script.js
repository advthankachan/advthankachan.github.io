
document.querySelectorAll('.description-btn').forEach(button => {
  button.addEventListener('click', function() {
    const bookDescription = this.nextElementSibling;
  
    if (bookDescription.style.display === "block") {
      bookDescription.style.display = "none";
      this.textContent = "Show Description";
    } else {
      bookDescription.style.display = "block";
      this.textContent = "Hide Description";
    }
  });
});

document.querySelectorAll('.show-more').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: 'smooth'
    });
  });
});

