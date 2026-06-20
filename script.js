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

    // Fitur Slider dihapus karena kita menggunakan Banner Statis
});
