export function router() {
  const routes = {
    '/': () => import('./pages/Home.js').then(m => m.Home()),
    '/mentors': () => import('./pages/Mentors.js').then(m => m.Mentors()),
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
    
    app.innerHTML = `
      <div class="min-h-screen bg-gray-900 geometric-pattern">
        ${navigation}
        ${content}
        ${footer}
      </div>
    `;

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
  }

  window.addEventListener('popstate', handleRoute);
  handleRoute();

  // Force dark theme
  document.documentElement.classList.add('dark');
}