// Inisialisasi carousel project
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM fully loaded, initializing Project Swiper');
  
  setTimeout(function() {
    try {
      // Inisialisasi Swiper untuk Project
      var projectSwiper = new Swiper('.projectSwiper', {
        // Konfigurasi dasar
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        
        // Konfigurasi tampilan
        centerInsufficientSlides: true,
        centerSlides: true,
        speed: 500,
        
        // Autoplay settings
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        
        // Pagination
        pagination: {
          el: '.project-pagination',
          clickable: true,
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
      
      console.log('Project Swiper initialized successfully');
      
      // Menambahkan event listener untuk tombol kustom navigasi
      document.querySelector('.project-nav-prev').addEventListener('click', function() {
        projectSwiper.slidePrev();
        console.log('Project Previous button clicked');
      });
      
      document.querySelector('.project-nav-next').addEventListener('click', function() {
        projectSwiper.slideNext();
        console.log('Project Next button clicked');
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
          loop: true,
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          pagination: {
            el: '.project-pagination',
            clickable: true,
          },
          breakpoints: {
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
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
