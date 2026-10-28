// --- БУРГЕР-МЕНЮ ---
const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav__menu');

burger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    burger.classList.toggle('active');
});

// --- ПЛАВНЫЙ СКРОЛЛ ---
const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach(link => {
    link.addEventListener('click', (e) => { 
        
        // Здесь используем link, а не this
        if (link.getAttribute('href') === '#') return;

        e.preventDefault();

        const id = link.getAttribute('href');
        const targetBlock = document.querySelector(id);

        if (targetBlock) {
            const yOffset = -80;
            const y = targetBlock.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    });
});

// ВАЛИДАЦИЯ ФОРМЫ 

const form = document.getElementById('contact__form');

form.addEventListener('submit', function(event) {

    event.preventDefault();

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('tel');

    if(nameInput.value.trim() === '' || phoneInput.value.trim() === '') {
        alert("Пожалуйста, заполните имя и номер телефона!")
    } else {
        alert("Спасибо, " + nameInput.value + "! Ожидайте звонка.")
        form.reset();
    }
    
});