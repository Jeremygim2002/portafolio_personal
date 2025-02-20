(function() {
  "use strict";

  /** Agrega la clase .scrolled al body al hacer scroll */
  function toggleScrolled() {
    const body = document.body, header = document.querySelector('#header');
    if (!['scroll-up-sticky', 'sticky-top', 'fixed-top'].some(cls => header.classList.contains(cls))) return;
    body.classList.toggle('scrolled', window.scrollY > 100);
  }
  window.addEventListener('load', toggleScrolled);
  document.addEventListener('scroll', toggleScrolled);


  /** Toggle menú móvil */
  const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
  function mobileNavToggle() {
    document.body.classList.toggle('mobile-nav-active');
    mobileNavToggleBtn.classList.toggle('bi-list');
    mobileNavToggleBtn.classList.toggle('bi-x');
  }
  mobileNavToggleBtn.addEventListener('click', mobileNavToggle);
  

  /** Cierra menú móvil al hacer click en un enlace */
  document.querySelectorAll('#navmenu a').forEach(nav => nav.addEventListener('click', () => {
    if (document.body.classList.contains('mobile-nav-active')) mobileNavToggle();
  }));


  /** Eliminar preloader al cargar la página */
  window.addEventListener('load', () => document.querySelector('#preloader')?.remove());


  /** Botón de scroll arriba */
  const scrollTop = document.querySelector('.scroll-top');
  function toggleScrollTop() {
    scrollTop?.classList.toggle('active', window.scrollY > 100);
  }
  scrollTop?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);


  /** Inicializar AOS */
  window.addEventListener('load', () => AOS.init({ duration: 600, easing: 'ease-in-out', once: true }));


  /** Inicializar GLightbox */
  const glightbox = GLightbox({ selector: '.glightbox' });


  /** Inicializar Isotope */
  document.querySelectorAll('.isotope-layout').forEach(isotope => {
    let container = isotope.querySelector('.isotope-container');
    let initIsotope;
    imagesLoaded(container, () => {
      initIsotope = new Isotope(container, {
        itemSelector: '.isotope-item',
        layoutMode: isotope.dataset.layout || 'masonry',
        filter: isotope.dataset.defaultFilter || '*',
        sortBy: isotope.dataset.sort || 'original-order'
      });
    });
    isotope.querySelectorAll('.isotope-filters li').forEach(filter => {
      filter.addEventListener('click', () => {
        isotope.querySelector('.filter-active')?.classList.remove('filter-active');
        filter.classList.add('filter-active');
        initIsotope.arrange({ filter: filter.dataset.filter });
        AOS.refresh();
      });
    });
  });


  /** Inicializar Swiper */
  window.addEventListener('load', () => {
    document.querySelectorAll(".init-swiper").forEach(swiperElement => {
      let config = JSON.parse(swiperElement.querySelector(".swiper-config").textContent.trim());
      new Swiper(swiperElement, config);
    });
  });


  /** Corrige la posición de scroll si la URL tiene un hash */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      let section = document.querySelector(window.location.hash);
      if (section) {
        setTimeout(() => {
          window.scrollTo({
            top: section.offsetTop - parseInt(getComputedStyle(section).scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });


  /** Scrollspy: Marca el menú activo al hacer scroll */
  function navmenuScrollspy() {
    document.querySelectorAll('.navmenu a').forEach(link => {
      if (!link.hash) return;
      let section = document.querySelector(link.hash);
      if (!section) return;
      let inView = window.scrollY + 200 >= section.offsetTop && window.scrollY + 200 <= section.offsetTop + section.offsetHeight;
      link.classList.toggle('active', inView);
    });
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();
