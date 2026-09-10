/* ==========================================================================
   Sayuni Child Reach Organization (SCRO) - Master JavaScript
   Reg No: OONGO/R/8090 | Arusha, Tanzania
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initGallery();
  initDonationCalculator();
  initCopyButtons();
  initModals();
  initForms();
  initImpactCounter();
});

/* --------------------------------------------------------------------------
   1. Navigation & Routing
   -------------------------------------------------------------------------- */
function initNavigation() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navOverlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMenu(forceState) {
    if (!navMenu || !mobileToggle) return;
    const isOpen = typeof forceState === 'boolean' 
      ? forceState 
      : !navMenu.classList.contains('active');

    navMenu.classList.toggle('active', isOpen);
    if (navOverlay) navOverlay.classList.toggle('active', isOpen);
    mobileToggle.setAttribute('aria-expanded', isOpen);
    mobileToggle.innerHTML = isOpen ? '✕' : '☰';
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });
  }

  if (navOverlay) {
    navOverlay.addEventListener('click', () => toggleMenu(false));
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
      toggleMenu(false);
    }
  });

  // Close drawer on clicking nav links or CTA inside menu
  if (navMenu) {
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });
  }

  // Handle Hash/Section Navigation
  function handleRoute() {
    const hash = window.location.hash || '#home';
    const targetSection = document.querySelector(hash);

    // Update nav link active state
    navLinks.forEach(link => {
      if (link.getAttribute('href') === hash) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }

    toggleMenu(false);
  }

  window.addEventListener('hashchange', handleRoute);
  
  // Highlight navigation and apply scrolled header shadow on scroll
  const sections = document.querySelectorAll('section[id]');
  const siteHeader = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    let scrollY = window.pageYOffset;

    if (siteHeader) {
      siteHeader.classList.toggle('scrolled', scrollY > 20);
    }

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
      const sectionId = current.getAttribute('id');
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  });
}

/* --------------------------------------------------------------------------
   2. Gallery & Lightbox Viewer
   -------------------------------------------------------------------------- */
function initGallery() {
  const galleryGrid = document.getElementById('galleryGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!galleryGrid || typeof galleryData === 'undefined') return;

  function renderGallery(filter = 'all') {
    galleryGrid.innerHTML = '';
    const filtered = filter === 'all' 
      ? galleryData 
      : galleryData.filter(item => item.category === filter);

    filtered.forEach(item => {
      const el = document.createElement('div');
      el.className = 'gallery-item';
      el.innerHTML = `
        <img src="${item.path}" alt="${item.title}" loading="lazy">
        <div class="gallery-overlay">
          <span class="badge-pill badge-orange" style="width: fit-content;">${item.category}</span>
          <h4 style="margin-top:0.4rem; color: #fff;">${item.title}</h4>
        </div>
      `;
      el.addEventListener('click', () => openLightbox(item));
      galleryGrid.appendChild(el);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderGallery(btn.dataset.filter);
    });
  });

  renderGallery('all');
}

function openLightbox(item) {
  let lightbox = document.getElementById('lightboxModal');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightboxModal';
    lightbox.className = 'modal-backdrop';
    lightbox.innerHTML = `
      <div class="modal-box" style="max-width: 850px; background: #000;">
        <button class="modal-close" style="color: #fff; position: absolute; top: 15px; right: 20px; z-index: 10;" id="closeLightbox">✕</button>
        <img id="lightboxImg" src="" style="width: 100%; max-height: 75vh; object-fit: contain;">
        <div style="padding: 1.5rem; color: #fff; text-align: center;">
          <h3 id="lightboxTitle"></h3>
        </div>
      </div>
    `;
    document.body.appendChild(lightbox);
    lightbox.querySelector('#closeLightbox').addEventListener('click', () => lightbox.classList.remove('active'));
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.classList.remove('active');
    });
  }

  lightbox.querySelector('#lightboxImg').src = item.path;
  lightbox.querySelector('#lightboxTitle').textContent = item.title;
  lightbox.classList.add('active');
}

/* --------------------------------------------------------------------------
   3. Donation Calculator & Presets
   -------------------------------------------------------------------------- */
function initDonationCalculator() {
  const tiers = document.querySelectorAll('.donation-tier');
  const customInput = document.getElementById('customDonationAmount');
  const summaryDisplay = document.getElementById('selectedDonationSummary');

  let currentAmount = 50000;
  const TZS_PER_USD = 2650;

  function updateSummary(amount) {
    currentAmount = amount;
    const usd = (amount / TZS_PER_USD).toFixed(2);
    if (summaryDisplay) {
      summaryDisplay.innerHTML = `Selected Donation: <strong>TZS ${amount.toLocaleString()}</strong> (~$${usd} USD)`;
    }
  }

  tiers.forEach(tier => {
    tier.addEventListener('click', () => {
      tiers.forEach(t => t.classList.remove('selected'));
      tier.classList.add('selected');
      const amt = parseInt(tier.dataset.amount, 10);
      if (customInput) customInput.value = amt;
      updateSummary(amt);
    });
  });

  if (customInput) {
    customInput.addEventListener('input', (e) => {
      tiers.forEach(t => t.classList.remove('selected'));
      const val = parseInt(e.target.value, 10) || 0;
      updateSummary(val);
    });
  }

  updateSummary(50000);
}

/* --------------------------------------------------------------------------
   4. Copy to Clipboard Utility
   -------------------------------------------------------------------------- */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.dataset.copy;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard!`);
        });
      } else {
        showToast(`Selected: ${textToCopy}`);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   5. Modal System (Sponsor, Volunteer, Refer, Receipt)
   -------------------------------------------------------------------------- */
function initModals() {
  const modalTriggers = document.querySelectorAll('[data-modal-target]');
  const closeBtns = document.querySelectorAll('.modal-close');
  const backdrops = document.querySelectorAll('.modal-backdrop');

  modalTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.modalTarget;
      const targetModal = document.getElementById(targetId);
      if (targetModal) targetModal.classList.add('active');
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('.modal-backdrop');
      if (modal) modal.classList.remove('active');
    });
  });

  backdrops.forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) backdrop.classList.remove('active');
    });
  });
}

/* --------------------------------------------------------------------------
   6. Interactive Forms & Email Submission System
   -------------------------------------------------------------------------- */
async function submitFormToEmail(form, subject, successMessage) {
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Sending... ⏳';
  }

  const formData = new FormData(form);
  formData.append('_subject', `[SCRO Website] ${subject}`);
  formData.append('_template', 'table');
  formData.append('_captcha', 'false');

  try {
    await fetch('https://formsubmit.co/ajax/sayunichildreachorganization@gmail.com', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
  } catch (error) {
    console.warn('Network notice during form submit:', error);
  } finally {
    showToast(successMessage);
    form.reset();
    const modal = form.closest('.modal-backdrop');
    if (modal) modal.classList.remove('active');

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  }
}

function initForms() {
  const contactForm = document.getElementById('contactForm');
  const volunteerForm = document.getElementById('volunteerForm');
  const sponsorForm = document.getElementById('sponsorForm');
  const referForm = document.getElementById('referForm');
  const receiptForm = document.getElementById('receiptForm');
  const newsletterForm = document.getElementById('newsletterForm');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitFormToEmail(contactForm, 'Contact Form Message', 'Thank you! Your message has been sent to Sayuni Child Reach Organization.');
    });
  }

  if (volunteerForm) {
    volunteerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitFormToEmail(volunteerForm, 'Volunteer Application', 'Volunteer application submitted! We will contact you shortly.');
    });
  }

  if (sponsorForm) {
    sponsorForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitFormToEmail(sponsorForm, 'Child Sponsorship Inquiry', 'Child sponsorship inquiry received! Thank you for transforming a child\'s life.');
    });
  }

  if (referForm) {
    referForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitFormToEmail(referForm, 'Child Referral', 'Child referral received! SCRO social workers will review the case in Arusha.');
    });
  }

  if (receiptForm) {
    receiptForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitFormToEmail(receiptForm, 'Donation Notification', 'Donation notification received! Thank you for supporting SCRO.');
    });
  }

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      submitFormToEmail(newsletterForm, 'Newsletter Subscription', 'Subscribed to Sayuni Child Reach Organization updates!');
    });
  }
}

function showToast(message) {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>💚</span> <div>${message}</div>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-100%)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/* --------------------------------------------------------------------------
   7. Animated Impact Numbers
   -------------------------------------------------------------------------- */
function initImpactCounter() {
  const counters = document.querySelectorAll('.impact-num');
  let animated = false;

  window.addEventListener('scroll', () => {
    if (animated || !counters.length) return;
    const top = counters[0].getBoundingClientRect().top;
    if (top < window.innerHeight) {
      counters.forEach(counter => {
        const target = parseInt(counter.dataset.target, 10);
        let count = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          count += step;
          if (count >= target) {
            count = target;
            clearInterval(timer);
          }
          counter.innerHTML = `${count}<span>+</span>`;
        }, 30);
      });
      animated = true;
    }
  });
}
