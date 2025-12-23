// Efeitos de Entrada (Scroll Reveal)
const elementsToAnimate = document.querySelectorAll('.hero-card, .polaroid, .dashed-box, .tv-frame');

const observerOptions = {
    threshold: 0.1, // Começa a animar quando 10% do item estiver visível
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            // Mantém a rotação original (definida no CSS) se houver, ou zera
            const currentStyle = window.getComputedStyle(entry.target);
            const transform = currentStyle.getPropertyValue('transform');
            
            // Simplesmente restaura a opacidade e posição
            entry.target.style.transform = entry.target.classList.contains('rotate-right') ? 'rotate(3deg)' : 
                                           entry.target.classList.contains('hero-card') ? 'rotate(-2deg)' : 
                                           entry.target.classList.contains('polaroid') ? 'rotate(-3deg)' : 'translateY(0)';
            
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Configuração Inicial
elementsToAnimate.forEach(el => {
    el.style.opacity = "0";
    el.style.transition = "all 0.8s ease-out";
    // Força um pequeno deslocamento para animar
    if(!el.classList.contains('polaroid')) {
         el.style.transform = "translateY(50px)";
    }
    observer.observe(el);
});

// Efeito Pulsar Botão WhatsApp
const whatsappBtn = document.querySelector('.cta-whatsapp');
if (whatsappBtn) {
    setInterval(() => {
        whatsappBtn.style.transform = "scale(1.1)";
        setTimeout(() => {
            whatsappBtn.style.transform = "scale(1)";
        }, 300);
    }, 4000);
}