// Scroll Marquee & Sticky Menu Logic
window.addEventListener('scroll', () => {
  const scrollPos = window.pageYOffset;
  
  // Sticky Menu Logic
  const menuBtn = document.querySelector('.menu-button');
  if (menuBtn) {
    if (scrollPos > 150) {
      menuBtn.classList.add('visible');
    } else {
      menuBtn.classList.remove('visible');
    }
  }

  const row1 = document.getElementById('row-1');
  const row2 = document.getElementById('row-2');
  
  if (row1 && row2) {
    // Sensitivity factor
    const speed = 0.2;
    
    // Calculate transform
    // Row 1: Left to Right
    row1.style.transform = `translateX(${scrollPos * speed}px)`;
    // Row 2: Right to Left (offset negative)
    row2.style.transform = `translateX(-${scrollPos * speed}px)`;
  }
});

// Local Time Logic
function updateTime() {
  const timeElement = document.getElementById('local-time');
  const now = new Date();
  // Emulating the GMT+2 format from the screen
  timeElement.innerText = now.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit', 
    hour12: true 
  }) + " GMT+2";
}
setInterval(updateTime, 60000);
updateTime();

// Scroll Reveal Observer
document.addEventListener('DOMContentLoaded', function() {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optional: unobserve after animating to only animate once
        // observer.unobserve(entry.target);
      } else {
        // Remove the class when scrolled out of view to animate again
        entry.target.classList.remove('active');
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll('.reveal');
  revealElements.forEach((el) => observer.observe(el));
});

// Page Transition Logic
document.addEventListener('DOMContentLoaded', () => {
  const transitionEl = document.getElementById('page-transition');
  const titleEl = document.getElementById('transition-title');

  // Check if we arrived from an internal transition
  const pendingTransitionTitle = sessionStorage.getItem('transition_title');
  if (pendingTransitionTitle && transitionEl && titleEl) {
    titleEl.innerText = pendingTransitionTitle;
    transitionEl.classList.add('slide-out');
    void transitionEl.offsetWidth; // Reflow
    transitionEl.classList.add('slide-out-active');
    sessionStorage.removeItem('transition_title');
  }

  // Intercept navigation links
  const links = document.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetUrl = link.getAttribute('href');
      // Only intercept real page links
      if (targetUrl && !targetUrl.startsWith('#') && !targetUrl.startsWith('mailto') && !targetUrl.startsWith('tel') && targetUrl !== '#') {
        e.preventDefault();
        
        // Grab link text for the overlay title
        let title = link.innerText.trim();
        // Fallback for logo clicks or empty icons
        if (title.includes('Code by') || title === '') {
           title = targetUrl.includes('work') ? 'Work' : 'Home';
        }

        if (transitionEl && titleEl) {
          titleEl.innerText = title;
          sessionStorage.setItem('transition_title', title);
          
          // Reset classes and set to bottom
          transitionEl.className = 'page-transition slide-in';
          void transitionEl.offsetWidth; // Force reflow
          
          // Animate in
          transitionEl.classList.add('slide-in-active');
          
          // Wait for animation to finish before actually routing
          setTimeout(() => {
            window.location.href = targetUrl;
          }, 1000);
        } else {
          window.location.href = targetUrl;
        }
      }
    });
  });
});

// ============================================
// DYNAMIC PROJECT DETAILS ROUTING
// ============================================

const PROJECT_DATA = {
  'twice': {
    title: 'TWICE',
    role: 'Interaction & Development',
    credits: 'Design: Dylan Brouwer',
    locationYear: 'Spain © 2024',
    liveLink: 'https://twice.agency',
    images: [
      'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80'
    ]
  },
  'damai': {
    title: 'The Damai',
    role: 'Design & Development',
    credits: 'Photography: Studio XYZ',
    locationYear: 'Bali, Indonesia © 2024',
    liveLink: 'https://thedamai.com',
    images: [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80'
    ]
  },
  'fabric': {
    title: 'FABRIC™',
    role: 'Design & Development',
    credits: 'Art Direction: Sarah Jenkins',
    locationYear: 'United Kingdom © 2023',
    liveLink: 'https://fabric.com',
    images: [
      'https://images.unsplash.com/photo-1581392723652-3312c4ce0e4b?auto=format&fit=crop&w=2000&q=80'
    ]
  },
  'aanstekelijk': {
    title: 'Aanstekelijk',
    role: 'Design & Development',
    credits: 'Copywriting: Studio Pen',
    locationYear: 'The Netherlands © 2023',
    liveLink: '#',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80'
    ]
  },
  'base-create': {
    title: 'Base Create',
    role: 'Design & Development',
    credits: 'Development: Codebase',
    locationYear: 'Hong Kong © 2023',
    liveLink: '#',
    images: [
      'https://images.unsplash.com/photo-1497215842964-222b330cefa9?auto=format&fit=crop&w=2000&q=80'
    ]
  },
  'avvr': {
    title: 'AVVR',
    role: 'Design & Development',
    credits: '3D Artist: Ben Smith',
    locationYear: 'The Netherlands © 2023',
    liveLink: '#',
    images: [
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=2000&q=80'
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Check if we are on project.html
  if (window.location.pathname.includes('project.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const projectData = PROJECT_DATA[projectId];

    if (projectData) {
      // 1. Set Title
      const titleEl = document.getElementById('project-title');
      if (titleEl) titleEl.innerText = projectData.title;

      // 2. Set Metadata Grid
      const roleEl = document.getElementById('project-role');
      const creditsEl = document.getElementById('project-credits');
      const locationEl = document.getElementById('project-location');
      
      if (roleEl) roleEl.innerText = projectData.role;
      if (creditsEl) creditsEl.innerText = projectData.credits;
      if (locationEl) locationEl.innerText = projectData.locationYear;

      // 3. Set Overlapping Button Link
      const btnEl = document.getElementById('project-live-btn');
      if (btnEl) btnEl.href = projectData.liveLink;

      // 4. Populate Media Gallery
      const galleryEl = document.getElementById('project-gallery');
      if (galleryEl) {
        galleryEl.innerHTML = ''; // Clear placeholders
        projectData.images.forEach(imgSrc => {
          const imgWrapper = document.createElement('div');
          imgWrapper.className = 'w-full mb-12 last:mb-0 reveal'; // Added reveal class for animation
          imgWrapper.innerHTML = `<img src="${imgSrc}" class="w-full h-auto max-h-[80vh] object-cover" alt="${projectData.title} Image">`;
          galleryEl.appendChild(imgWrapper);
        });
      }
    } else {
      // Invalid ID, redirect back to work
      window.location.href = 'work.html';
    }
  }
});
