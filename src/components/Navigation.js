export function Navigation() {
  return `
    <nav class="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 py-4 border-b border-gray-200 dark:border-gray-700">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <a href="/" class="text-2xl font-bold text-[#FF3939] dark:text-[#FF5959]">Kalvium Students</a>
        <div class="flex items-center gap-6">
          ${[
            ['/', 'Home'],
            ['/students', 'Students'],
            ['/projects', 'Projects'],
            ['/memories', 'Memories'],
            ['/about', 'About']
          ].map(([path, label]) => `
            <a href="${path}" 
               class="nav-link relative hover:text-[#FF3939] dark:hover:text-[#FF5959] transition-colors ${
                 path === window.location.pathname ? 'active font-semibold text-[#FF3939] dark:text-[#FF5959]' : ''
               }">
              ${label}
              ${path === window.location.pathname ? 
                `<span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#FF3939] dark:bg-[#FF5959] rounded-full"></span>` 
                : ''
              }
            </a>
          `).join('')}
        </div>
      </div>
    </nav>
  `;
}