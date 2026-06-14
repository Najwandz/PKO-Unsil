// Vanilla JavaScript untuk interaktivitas dasar
document.addEventListener("DOMContentLoaded", function() {
    
    // Fitur 1: Interaksi hover sederhana pada Navigasi
    const navItems = document.querySelectorAll('.nav-links li a');
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transition = 'all 0.3s ease';
        });
    });

    // Fitur Slider dihapus karena kita menggunakan Banner Statis
});