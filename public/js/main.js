// Script para melhorar a experiência do usuário
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scrolling para links âncora
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 80; // Ajuste para a navbar fixa
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Adicionar classe ativa aos itens do menu durante a rolagem
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  
  window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (pageYOffset >= (sectionTop - 100)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});