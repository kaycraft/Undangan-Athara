document.addEventListener("DOMContentLoaded", () => {
    const btnNext = document.getElementById("nextBtn");
    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");

    // Fungsi untuk berpindah halaman
    btnNext.addEventListener("click", () => {
        // Menghilangkan page 1 ke atas
        page1.classList.remove("active");
        page1.classList.add("prev-page");

        // Memunculkan page 2 dari bawah
        page2.classList.remove("next-page");
        page2.classList.add("active");
        
        // Scroll ke paling atas (jika ada sisa scroll)
        document.querySelector('.app-wrapper').scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});