document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Hamburger Menu (Buka-Tutup Navigasi Layar HP)
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function(e) {
            e.stopPropagation(); // Mencegah konflik klik dengan elemen lain
            navMenu.classList.toggle('active');
        });
    }

    // 2. Dropdown (Akordion) Layar HP - PERBAIKAN LOGIKA KLIK
    // Kita hanya menargetkan tag <a> pertama yang menjadi induk dropdown (misal: "PROFIL ▾")
    const dropdownToggles = document.querySelectorAll('.dropdown > a');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            // Hanya aktifkan logika akordion jika diakses via HP (lebar <= 768px)
            if (window.innerWidth <= 768) {
                // Cegah scroll ke atas HANYA jika link menggunakan '#'
                if (this.getAttribute('href').startsWith('#')) {
                    e.preventDefault(); 
                }
                
                const parentLi = this.parentElement;
                
                // UX Enhancement: Tutup dropdown lain jika ada yang sedang terbuka agar rapi
                document.querySelectorAll('.dropdown').forEach(drop => {
                    if (drop !== parentLi) {
                        drop.classList.remove('open');
                    }
                });

                // Buka/Tutup menu dropdown spesifik yang diklik
                parentLi.classList.toggle('open');
            }
        });
    });

    // 3. UX Tambahan: Tutup navigasi mobile jika pengguna mengklik area di luar menu
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && navMenu && navMenu.classList.contains('active')) {
            // Jika area yang diklik BUKAN menu navigasi dan BUKAN ikon hamburger
            if (!navMenu.contains(e.target) && !mobileMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        }
    });

    // 4. Logika POP-UP PENGUMUMAN (Berita & Informasi)
    const popup = document.getElementById('newsPopup');
    const closePopup = document.getElementById('closePopup');

    if (popup && closePopup) {
        // Tampilkan pop-up secara halus 1 detik setelah halaman termuat
        setTimeout(() => {
            popup.classList.add('show');
        }, 1000);

        // Tutup saat tombol silang (X) diklik
        closePopup.addEventListener('click', () => {
            popup.classList.remove('show');
        });

        // Tutup saat pengguna mengklik area overlay gelap di sekeliling pop-up
        window.addEventListener('click', (e) => {
            if (e.target === popup) {
                popup.classList.remove('show');
            }
        });
    }
});
