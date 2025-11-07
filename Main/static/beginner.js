  // Basic navigation for Start buttons
    function startTopic(page) {
      if (!page) return;
      // Replace this navigation with modal or in-app route if needed
      window.location.href = page;
    }

    (function () {
      const container = document.getElementById('carouselContainer');
      const carousel = document.getElementById('carousel');
      const slides = Array.from(carousel.querySelectorAll('.topic-box'));
      const prevBtn = document.getElementById('prevBtn');
      const nextBtn = document.getElementById('nextBtn');

      if (!container || !carousel || slides.length === 0) return;

      let total = slides.length;
      let current = 0;

      // Set widths explicitly in pixels so translateX math is stable
      function setSizes() {
        const w = container.clientWidth;
        slides.forEach(slide => slide.style.width = `${w}px`);
        carousel.style.width = `${w * total}px`;
        // snap without animation
        carousel.style.transition = 'none';
        carousel.style.transform = `translateX(-${current * w}px)`;
        // restore transition for next moves
        requestAnimationFrame(() => { carousel.style.transition = ''; });
      }

      function goTo(index) {
        if (index < 0) index = total - 1;
        if (index >= total) index = 0;
        current = index;
        const w = container.clientWidth;
        carousel.style.transform = `translateX(-${current * w}px)`;
      }

      nextBtn.addEventListener('click', () => goTo(current + 1));
      prevBtn.addEventListener('click', () => goTo(current - 1));

      // keyboard
      window.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevBtn.click();
        if (e.key === 'ArrowRight') nextBtn.click();
      });

      // touch/swipe
      let startX = 0, deltaX = 0, dragging = false;
      carousel.addEventListener('touchstart', (e) => {
        if (e.touches.length !== 1) return;
        dragging = true;
        startX = e.touches[0].clientX;
        carousel.style.transition = 'none';
      }, { passive: true });

      carousel.addEventListener('touchmove', (e) => {
        if (!dragging) return;
        deltaX = e.touches[0].clientX - startX;
        const w = container.clientWidth;
        carousel.style.transform = `translateX(${-current * w + deltaX}px)`;
      }, { passive: true });

      carousel.addEventListener('touchend', () => {
        if (!dragging) return;
        dragging = false;
        const w = container.clientWidth;
        const threshold = w * 0.15;
        if (deltaX < -threshold) goTo(current + 1);
        else if (deltaX > threshold) goTo(current - 1);
        else goTo(current); // snap back
        deltaX = 0;
      });

      window.addEventListener('resize', setSizes);
      // initial
      setSizes();
    })();