// Inisialisasi carousel sertifikat
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing Sertifikat Swiper...');
  
  setTimeout(function() {
    try {
      // Inisialisasi Swiper
      var swiper = new Swiper('.sertifikatSwiper', {
        // Konfigurasi dasar
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        grabCursor: true,
        
        // Pagination
        pagination: {
          el: '.sertifikat-pagination',
          clickable: true,
        },
        
        // Autoplay
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },

        // Responsive dengan preview gambar
        breakpoints: {
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 1.5,
            spaceBetween: 30,
            centeredSlides: true,
          },
          1024: {
            slidesPerView: 1.8,
            spaceBetween: 40,
            centeredSlides: true,
          },
        },
      });
      
      console.log('Sertifikat Swiper initialized successfully');
      
      // Menambahkan event listener untuk tombol kustom navigasi
      document.querySelector('.swiper-nav-prev').addEventListener('click', function() {
        swiper.slidePrev();
        console.log('Previous button clicked');
      });
      
      document.querySelector('.swiper-nav-next').addEventListener('click', function() {
        swiper.slideNext();
        console.log('Next button clicked');
      });
      
    } catch (error) {
      console.error('Error initializing Swiper:', error);
    }
  }, 100);
});

// Fallback initialization untuk memastikan carousel bekerja
window.addEventListener('load', function() {
  if (document.querySelector('.sertifikatSwiper')) {
    // Periksa apakah swiper sudah terinisialisasi
    var swiperElem = document.querySelector('.sertifikatSwiper');
    
    if (!swiperElem.swiper) {
      console.log('Fallback: Initializing Swiper on window load');
      
      try {
        // Inisialisasi Swiper fallback
        var swiper = new Swiper('.sertifikatSwiper', {
          slidesPerView: 1,
          spaceBetween: 20,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          },
        });
        
        // Tambahkan event listener untuk tombol navigasi
        document.querySelector('.swiper-nav-prev').addEventListener('click', function() {
          swiper.slidePrev();
        });
        
        document.querySelector('.swiper-nav-next').addEventListener('click', function() {
          swiper.slideNext();
        });
        
        console.log('Fallback Swiper initialized');
      } catch (error) {
        console.error('Fallback Swiper failed:', error);
      }
    }
  }
});

