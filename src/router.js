export function router() {
  const routes = {
    '/': () => import('./pages/Home.js').then(m => m.Home()),
    '/students': () => import('./pages/Students.js').then(m => m.Students()),
    '/projects': () => import('./pages/Projects.js').then(m => m.Projects()),
    '/memories': () => import('./pages/Memories.js').then(m => m.Memories()),
    '/about': () => import('./pages/About.js').then(m => m.About())
  };

  async function handleRoute() {
    const path = window.location.pathname;
    const page = routes[path] || routes['/'];
    const content = await page();
    
    const app = document.querySelector('#app');
    const navigation = await import('./components/Navigation.js').then(m => m.Navigation());
    const footer = await import('./components/Footer.js').then(m => m.Footer());
    const themeToggle = await import('./components/ThemeToggle.js').then(m => m.ThemeToggle());
    
    app.innerHTML = `
      <div class="min-h-screen bg-[#FDF6F0] dark:bg-gray-900 geometric-pattern">
        ${navigation}
        ${content}
        ${footer}
        ${themeToggle}
      </div>
    `;

    // Add click event listeners to navigation links
    document.querySelectorAll('a[href^="/"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('/')) {
          e.preventDefault();
          window.history.pushState({}, '', href);
          handleRoute();
        }
      });
    });

    // Theme toggle functionality
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
      });
    }
  }

  // Handle browser back/forward buttons
  window.addEventListener('popstate', handleRoute);
  
  // Handle initial route
  handleRoute();

  // Ensure light theme is default
  if (!('theme' in localStorage)) {
    localStorage.setItem('theme', 'light');
  }
  document.documentElement.classList.remove('dark');
}