// Inisialisasi carousel project
document.addEventListener('DOMContentLoaded', function() {
  console.log('Initializing Project Swiper...');
  
  setTimeout(function() {
    try {
      // Inisialisasi Swiper untuk Project - mengikuti konfigurasi sertifikat
      var projectSwiper = new Swiper('.projectSwiper', {
        // Konfigurasi dasar
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        grabCursor: true,
        
        // Pagination
        pagination: {
          el: '.project-pagination',
          clickable: true,
        },
        
        // Autoplay
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },

        // Responsive dengan preview gambar - sama seperti sertifikat
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
      
      console.log('Project Swiper initialized successfully');
      
      // Menambahkan event listener untuk tombol kustom navigasi
      document.querySelector('.project-nav-prev').addEventListener('click', function() {
        projectSwiper.slidePrev();
        console.log('Previous button clicked');
      });
      
      document.querySelector('.project-nav-next').addEventListener('click', function() {
        projectSwiper.slideNext();
        console.log('Next button clicked');
      });
      
    } catch (error) {
      console.error('Error initializing Project Swiper:', error);
    }
  }, 100);
});

// Fallback initialization untuk memastikan carousel bekerja
window.addEventListener('load', function() {
  if (document.querySelector('.projectSwiper')) {
    // Periksa apakah swiper sudah terinisialisasi
    var swiperElem = document.querySelector('.projectSwiper');
    
    if (!swiperElem.swiper) {
      console.log('Fallback: Initializing Project Swiper on window load');
      
      try {
        // Inisialisasi Swiper fallback
        var projectSwiper = new Swiper('.projectSwiper', {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: true,
          loop: true,
          grabCursor: true,
          pagination: {
            el: '.project-pagination',
            clickable: true,
          },
          autoplay: {
            delay: 4000,
            disableOnInteraction: false,
          },
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
        
        // Tambahkan event listener untuk tombol navigasi
        document.querySelector('.project-nav-prev').addEventListener('click', function() {
          projectSwiper.slidePrev();
        });
        
        document.querySelector('.project-nav-next').addEventListener('click', function() {
          projectSwiper.slideNext();
        });
        
        console.log('Fallback Project Swiper initialized');
      } catch (error) {
        console.error('Fallback Project Swiper failed:', error);
      }
    }
  }
});
