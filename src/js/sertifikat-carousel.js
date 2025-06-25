// Inisialisasi carousel sertifikat
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded, initializing Swiper');
  
  setTimeout(function() {
    try {
      // Inisialisasi Swiper
      var swiper = new Swiper('.sertifikatSwiper', {
        // Konfigurasi dasar
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        
        // Konfigurasi tampilan
        centerInsufficientSlides: true,
        centerSlides: true,
        speed: 500,
        
        // Pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        
        // Tambahkan autoplay
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },

        // Responsive
        breakpoints: {
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      });
      
      console.log('Swiper initialized successfully');
      
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

