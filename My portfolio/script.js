document.addEventListener('DOMContentLoaded', () => {
    const circles = document.querySelectorAll('.circle');
  
    circles.forEach((circle) => {
      const progress = circle.getAttribute('data-progress');
      circle.style.setProperty('--progress', `${progress}%`);
    });
  });
  ScrollReveal({ 
    reset: true,
    distance: '30px', 
    duration:2000,
    delay:200
  });
  ScrollReveal().reveal('.content h3,.content h1, .heading',{ origin:'top' });
  ScrollReveal().reveal('.home-content img,.content p,.social-media,.button,.content-1 .btn,.sub',{ origin:'bottom' });
  ScrollReveal().reveal('.content-1 p,.skills,.contact-2 p',{ origin:'left' });
  ScrollReveal().reveal('.content h2,.image-1,#skills-1,.contact',{ origin:'right' });