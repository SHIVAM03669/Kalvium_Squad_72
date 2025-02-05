export function router() {
  const routes = {
    '/': () => import('./pages/Landing.js').then(m => m.Landing()),
    '/home': () => import('./pages/Home.js').then(m => m.Home()),
    '/mentors': () => import('./pages/Mentors.js').then(m => m.Mentors()),
    '/students': () => import('./pages/Students.js').then(m => m.Students()),
    '/projects': () => import('./pages/Projects.js').then(m => m.Projects()),
    '/memories': () => import('./pages/Memories.js').then(m => m.Memories()),
    '/about': () => import('./pages/About.js').then(m => m.About())
  };

  function setupMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

    if (mobileMenuButton && mobileMenu && menuIcon && closeIcon) {
      mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      });

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && 
            !mobileMenuButton.contains(e.target) && 
            !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        }
      });

      // Add click handlers to mobile menu links
      document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          menuIcon.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        });
      });
    }
  }

  async function handleRoute() {
    const path = window.location.pathname;
    const page = routes[path] || routes['/'];
    const content = await page();
    
    const app = document.querySelector('#app');
    const navigation = path === '/' ? '' : await import('./components/Navigation.js').then(m => m.Navigation());
    const footer = path === '/' ? '' : await import('./components/Footer.js').then(m => m.Footer());
    
    app.innerHTML = `
      <div class="min-h-screen bg-gray-900 geometric-pattern">
        ${navigation}
        ${content}
        ${footer}
      </div>
    `;

    // Setup mobile menu after DOM is updated
    setupMobileMenu();

    document.querySelectorAll('a[href^="/"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('/')) {
          e.preventDefault();
          if (href === '/students') {
            // Force a full page reload for the students page
            window.location.href = href;
          } else {
            window.history.pushState({}, '', href);
            handleRoute();
          }
        }
      });
    });
  }

  window.addEventListener('popstate', handleRoute);
  handleRoute();

  // Force dark theme
  document.documentElement.classList.add('dark');
}