document.addEventListener('DOMContentLoaded', function() {
    // Animación suave al hacer scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mostrar/ocultar botón de WhatsApp al hacer scroll
    window.addEventListener('scroll', function() {
        var whatsappButton = document.querySelector('.whatsapp-button');
        if (window.scrollY > 300) {
            whatsappButton.style.display = 'block';
        } else {
            whatsappButton.style.display = 'none';
        }
    });
});