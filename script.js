document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Interaksi hover sederhana pada Navigasi (Desktop)
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transition = 'all 0.3s ease';
        });
    });

    // 2. Hamburger Menu (Buka-Tutup Navigasi Layar HP)
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // 3. Dropdown (Profil / Tri Dharma) dengan Klik di Layar HP
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                if (e.target.tagName.toLowerCase() === 'a' && e.target.parentElement.classList.contains('dropdown')) {
                    e.preventDefault(); 
                    e.stopPropagation(); 
                    this.classList.toggle('open');
                }
            }
        });
    });

    // 4. Logika POP-UP PENGUMUMAN
    const popup = document.getElementById('newsPopup');
    const closePopup = document.getElementById('closePopup');

    if (popup && closePopup) {
        // Tampilkan pop-up otomatis setelah 1 detik halaman terbuka
        setTimeout(() => {
            popup.classList.add('show');
        }, 1000);

        // Tutup saat tombol silang (X) diklik
        closePopup.addEventListener('click', () => {
            popup.classList.remove('show');
        });

        // Tutup saat area gelap di luar kotak putih diklik
        window.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.classList.remove('show');
            }
        });
    }
});
