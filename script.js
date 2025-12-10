// Script de interactividad para el portafolio
// Carlos Monterrosa - 2025

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // 1. Mensaje de bienvenida
  // ============================================
  
  // Mostrar un mensaje de bienvenida cuando carga la página
  console.log('¡Bienvenido a mi portafolio! 🚀');
  
  // Mostrar mensaje después de 2 segundos
  setTimeout(() => {
    // Crear elemento de mensaje
    const welcomeMessage = document.createElement('div');
    welcomeMessage.id = 'welcome-toast';
    welcomeMessage.innerHTML = `
      <i class="fas fa-rocket"></i>
      <span>¡Hola! Gracias por visitar mi portafolio</span>
      <button id="close-toast" aria-label="Cerrar mensaje">&times;</button>
    `;
    welcomeMessage.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: linear-gradient(135deg, #1e40af, #d97706);
      color: white;
      padding: 15px 20px;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      gap: 10px;
      z-index: 9999;
      animation: slideInRight 0.5s ease-out;
      max-width: 350px;
      font-size: 0.95rem;
    `;
    
    document.body.appendChild(welcomeMessage);
    
    // Botón para cerrar el mensaje
    const closeBtn = document.getElementById('close-toast');
    closeBtn.style.cssText = `
      background: rgba(255,255,255,0.2);
      border: none;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.3s ease;
    `;
    
    closeBtn.addEventListener('click', () => {
      welcomeMessage.style.animation = 'slideOutRight 0.3s ease-out';
      setTimeout(() => welcomeMessage.remove(), 300);
    });
    
    // Auto-cerrar después de 6 segundos
    setTimeout(() => {
      if (welcomeMessage && welcomeMessage.parentNode) {
        welcomeMessage.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => welcomeMessage.remove(), 300);
      }
    }, 6000);
    
  }, 2000);
  
  
  // ============================================
  // 2. Cambiar texto de la sección Hero
  // ============================================
  
  // Encontrar el párrafo de descripción en el hero
  const heroDesc = document.querySelector('.hero-desc');
  
  if (heroDesc) {
    // Guardar el texto original
    const originalText = heroDesc.textContent;
    
    // Crear un botón para cambiar el texto
    const changeTextBtn = document.createElement('button');
    changeTextBtn.textContent = '¿Quieres saber más sobre mí?';
    changeTextBtn.className = 'btn btn-outline-light btn-sm mt-3';
    changeTextBtn.id = 'change-text-btn';
    changeTextBtn.style.cssText = `
      margin-top: 1rem;
      animation: pulse 2s infinite;
    `;
    
    // Insertar el botón después del párrafo
    heroDesc.parentNode.insertBefore(changeTextBtn, heroDesc.nextSibling);
    
    let textChanged = false;
    
    changeTextBtn.addEventListener('click', () => {
      if (!textChanged) {
        // Texto alternativo más personal
        heroDesc.innerHTML = `
          Me apasiona resolver problemas complejos con código elegante. 
          Actualmente estoy aprendiendo en Riwi, donde cada día es una nueva oportunidad para crecer.
          Mi objetivo es convertirme en un desarrollador que no solo escribe código, sino que crea soluciones que impactan.
          <br><br>
          <em style="color: var(--secondary);">
            "El código es poesía escrita en lógica" - Esa es mi filosofía
          </em>
        `;
        changeTextBtn.textContent = '← Volver al texto original';
        changeTextBtn.style.animation = 'none';
        textChanged = true;
      } else {
        // Volver al texto original
        heroDesc.textContent = originalText;
        changeTextBtn.textContent = '¿Quieres saber más sobre mí?';
        changeTextBtn.style.animation = 'pulse 2s infinite';
        textChanged = false;
      }
    });
  }
  
  
  // ============================================
  // 3. Contador de proyectos
  // ============================================
  
  // Contar cuántos proyectos hay
  const projectCards = document.querySelectorAll('.project-card');
  const skillCards = document.querySelectorAll('.skill-card');
  
  if (projectCards.length > 0) {
    console.log(`📊 Total de proyectos: ${projectCards.length}`);
    console.log(`💡 Total de habilidades: ${skillCards.length}`);
  }
  
  
  // ============================================
  // 4. Efecto de hover mejorado en tarjetas
  // ============================================
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      // Agregar un efecto sutil al hacer hover
      this.style.transform = 'translateY(-12px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });
  
  
  // ============================================
  // 5. Mostrar/Ocultar contenido extra
  // ============================================
  
  // Buscar la sección de contacto
  const contactSection = document.getElementById('contact');
  
  if (contactSection) {
    // Crear un botón toggle
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = '💬 Ver más formas de contacto';
    toggleBtn.className = 'btn btn-primary btn-sm mt-4';
    toggleBtn.id = 'toggle-contact-btn';
    
    // Crear contenido oculto
    const hiddenContent = document.createElement('div');
    hiddenContent.id = 'extra-contact';
    hiddenContent.style.cssText = `
      display: none;
      margin-top: 20px;
      padding: 20px;
      background: rgba(30, 64, 175, 0.1);
      border-radius: 10px;
      border: 1px solid rgba(30, 64, 175, 0.3);
    `;
    hiddenContent.innerHTML = `
      <h4 style="color: var(--secondary); margin-bottom: 15px;">
        <i class="fas fa-comments"></i> Otras formas de contacto
      </h4>
      <p style="color: var(--text-muted); margin-bottom: 10px;">
        También puedes encontrarme en:
      </p>
      <ul style="color: var(--text-light); list-style: none; padding: 0;">
        <li style="margin-bottom: 8px;">
          <i class="fab fa-linkedin" style="color: var(--accent); width: 25px;"></i>
          LinkedIn: carlos-monterrosa
        </li>
        <li style="margin-bottom: 8px;">
          <i class="fab fa-twitter" style="color: var(--accent); width: 25px;"></i>
          Twitter: @monterrosadev
        </li>
        <li style="margin-bottom: 8px;">
          <i class="fab fa-discord" style="color: var(--accent); width: 25px;"></i>
          Discord: Monterrosa#1234
        </li>
      </ul>
    `;
    
    // Insertar elementos
    const container = contactSection.querySelector('.container-lg');
    container.appendChild(toggleBtn);
    container.appendChild(hiddenContent);
    
    // Función toggle
    let isVisible = false;
    toggleBtn.addEventListener('click', () => {
      if (!isVisible) {
        hiddenContent.style.display = 'block';
        hiddenContent.style.animation = 'fadeInUp 0.5s ease-out';
        toggleBtn.innerHTML = '👆 Ocultar contactos adicionales';
        isVisible = true;
      } else {
        hiddenContent.style.display = 'none';
        toggleBtn.innerHTML = '💬 Ver más formas de contacto';
        isVisible = false;
      }
    });
  }
  
  
  // ============================================
  // 6. Animaciones en scroll
  // ============================================
  
  // Observador de intersección para animar elementos al hacer scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);
  
  // Observar todas las tarjetas
  document.querySelectorAll('.project-card, .skill-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
  
  
  // ============================================
  // 7. Modo oscuro/claro toggle (bonus)
  // ============================================
  
  // Crear botón de modo
  const modeToggle = document.createElement('button');
  modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  modeToggle.id = 'mode-toggle';
  modeToggle.setAttribute('aria-label', 'Cambiar tema');
  modeToggle.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    z-index: 9998;
    transition: transform 0.3s ease;
  `;
  
  document.body.appendChild(modeToggle);
  
  modeToggle.addEventListener('mouseenter', () => {
    modeToggle.style.transform = 'scale(1.1) rotate(15deg)';
  });
  
  modeToggle.addEventListener('mouseleave', () => {
    modeToggle.style.transform = 'scale(1) rotate(0deg)';
  });
  
  // Funcionalidad del modo (simplificada)
  let isDarkMode = true;
  modeToggle.addEventListener('click', () => {
    if (isDarkMode) {
      document.body.style.filter = 'brightness(1.2) contrast(0.95)';
      modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      isDarkMode = false;
    } else {
      document.body.style.filter = '';
      modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      isDarkMode = true;
    }
  });
  
  
  // ============================================
  // 8. Log final
  // ============================================
  
  console.log('✅ Script cargado correctamente');
  console.log('🎨 Portafolio de Carlos Monterrosa');
  console.log('📅 Año: 2025');
  
});

// Agregar animaciones CSS necesarias
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 0 0 0 rgba(30, 64, 175, 0.7);
    }
    50% {
      box-shadow: 0 0 0 10px rgba(30, 64, 175, 0);
    }
  }
  
  #close-toast:hover {
    background: rgba(255,255,255,0.4) !important;
  }
`;
document.head.appendChild(style);
