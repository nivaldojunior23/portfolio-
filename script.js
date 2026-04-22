document.addEventListener('DOMContentLoaded', () => {
  const revealLayer = document.getElementById('reveal-layer');
  const echoesContainer = document.getElementById('echoes-container');
  const parallaxElements = document.querySelectorAll('.parallax');
  const cursorTarget = document.getElementById('cursor-target');
  
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;
  
  let lastEchoTime = 0;
  let targetRadius = 150;
  let currentRadius = 150;

  const baseNavLinks = document.querySelectorAll('.base-layer .nav-link');
  const revealNavLinks = document.querySelectorAll('.reveal-layer .nav-link');
  const baseSocialIcons = document.querySelectorAll('.base-layer .social-icon');
  const revealSocialIcons = document.querySelectorAll('.reveal-layer .social-icon');

  function syncHover(baseEls, revealEls) {
    baseEls.forEach((el, index) => {
      el.addEventListener('mouseenter', () => {
        if(revealEls[index]) revealEls[index].classList.add('is-hovered');
        el.classList.add('is-hovered');
        cursorTarget.classList.add('active');
        targetRadius = 250;
      });
      el.addEventListener('mouseleave', () => {
        if(revealEls[index]) revealEls[index].classList.remove('is-hovered');
        el.classList.remove('is-hovered');
        cursorTarget.classList.remove('active');
        targetRadius = 150;
      });
    });
  }

  syncHover(baseNavLinks, revealNavLinks);
  syncHover(baseSocialIcons, revealSocialIcons);

  
  const randomCharElements = document.querySelectorAll('.random-chars');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*X/';
  
  setInterval(() => {
    randomCharElements.forEach(el => {
      let result = '';
      for(let i=0; i<4; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      el.innerText = result;
    });
  }, 80);

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    
    cursorTarget.style.left = `${mouseX}px`;
    cursorTarget.style.top = `${mouseY}px`;
    
    createEcho(mouseX, mouseY);
  });

  function createEcho(x, y) {
    const now = Date.now();
    
    if (now - lastEchoTime > 50) {
      const echo = document.createElement('div');
      echo.classList.add('cursor-echo');
      echo.style.left = `${x}px`;
      echo.style.top = `${y}px`;
      echoesContainer.appendChild(echo);
      
      setTimeout(() => {
        if (echo.parentNode) echo.remove();
      }, 400);
      
      lastEchoTime = now;
    }
  }

  function animate() {
  
    currentX += (mouseX - currentX) * 0.25;
    currentY += (mouseY - currentY) * 0.25;
    currentRadius += (targetRadius - currentRadius) * 0.2;

    const r = currentRadius;
    const cx = currentX;
    const cy = currentY;
    
    
    const p1 = `${cx - r*0.41}px ${cy - r}px`;
    const p2 = `${cx + r*0.41}px ${cy - r}px`;
    const p3 = `${cx + r}px ${cy - r*0.41}px`;
    const p4 = `${cx + r}px ${cy + r*0.41}px`;
    const p5 = `${cx + r*0.41}px ${cy + r}px`;
    const p6 = `${cx - r*0.41}px ${cy + r}px`;
    const p7 = `${cx - r}px ${cy + r*0.41}px`;
    const p8 = `${cx - r}px ${cy - r*0.41}px`;

    revealLayer.style.clipPath = `polygon(${p1}, ${p2}, ${p3}, ${p4}, ${p5}, ${p6}, ${p7}, ${p8})`;

  
    const normalizedX = (currentX / window.innerWidth) * 2 - 1;
    const normalizedY = (currentY / window.innerHeight) * 2 - 1;

    const xOffset = -normalizedX * 40; 
    const yOffset = -normalizedY * 40;

    parallaxElements.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed')) || 1;
      el.style.transform = `translate(${xOffset * speed}px, ${yOffset * speed}px)`;
    });

    requestAnimationFrame(animate);
  }

  animate();
});
