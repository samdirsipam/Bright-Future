document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

    if (mobileMenuBtn && mobileMenuClose && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        mobileMenuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Form Submission Handling
    const admissionsForm = document.getElementById('admissionsForm');
    const formSuccess = document.getElementById('formSuccess');

    if (admissionsForm && formSuccess) {
        admissionsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            admissionsForm.classList.add('hidden');
            formSuccess.classList.remove('hidden');
            
            setTimeout(() => {
                admissionsForm.reset();
                admissionsForm.classList.remove('hidden');
                formSuccess.classList.add('hidden');
            }, 5000);
        });
    }
});
