// Vanilla JavaScript untuk interaktivitas dasar
document.addEventListener("DOMContentLoaded", function() {
    
    // Fitur 1: Interaksi hover sederhana pada Navigasi
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transition = 'all 0.3s ease';
        });
    });

    // Fitur 2: Hamburger Menu (Buka-Tutup Navigasi Layar HP)
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    // Validasi pengecekan agar tidak terjadi error jika elemen tidak ditemukan di halaman tertentu
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            // Menambah atau menghapus class 'active' pada menu navigasi (.nav-links)
            navMenu.classList.toggle('active');
        });
    }

    // Fitur 3: Buka-Tutup Dropdown (Profil / Tri Dharma) dengan Klik di Layar HP
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            // Logika ini hanya berjalan jika ukuran layar di bawah 768px (Mode Mobile)
            if (window.innerWidth <= 768) {
                // Jika yang diklik adalah link utama menu dropdown (seperti teks PROFIL ▾)
                if (e.target.tagName.toLowerCase() === 'a' && e.target.parentElement.classList.contains('dropdown')) {
                    e.preventDefault(); // Mencegah link langsung melompat/pindah halaman
                    e.stopPropagation(); // Mencegah konflik event klik lainnya
                    
                    // Toggle class 'open' untuk memunculkan/menyembunyikan sub-menu putih
                    this.classList.toggle('open');
                }
            }
        });
    });

    // Fitur Slider dihapus karena kita menggunakan Banner Statis
});
