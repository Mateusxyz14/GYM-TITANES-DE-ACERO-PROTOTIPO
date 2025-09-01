// Toggle menú hamburguesa
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Scroll suave a secciones
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Selección de plan
function selectPlan(planName) {
    const modal = document.getElementById('paymentModal');
    const planText = document.getElementById('selectedPlanText');

    planText.textContent = `Has seleccionado: ${planName}`;
    modal.style.display = 'block';
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('paymentModal');
    modal.style.display = 'none';
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('paymentModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Continuar a WhatsApp
function proceedToWhatsApp() {
    const planText = document.getElementById('selectedPlanText').textContent;
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    let message = `Hola, estoy interesado en inscribirme.\n\n${planText}\nMétodo de pago: ${paymentMethod}`;

    // Número de WhatsApp del gimnasio (ajusta según corresponda)
    const phoneNumber = "593991234567"; // Ecuador sin el +

    // Codificar mensaje
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Redirigir
    window.open(url, "_blank");
}

// Scroll suave desde links de navegación
document.querySelectorAll('.nav-menu a, .footer-section a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('data-section');
        if (sectionId) {
            scrollToSection(sectionId);
            // cerrar menú después de clic en móvil
            document.querySelector('.nav-menu').classList.remove('active');
        }
    });
});
