export function Navigation() {
  return `
    <nav class="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 py-4 border-b border-gray-800">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center">
          <div class="flex justify-between items-center">
            <a href="/" class="text-2xl font-bold text-primary-500">SQUAD 72</a>
            <button id="mobile-menu-button" class="md:hidden text-white p-2">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path class="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                <path class="close-icon hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          <div id="mobile-menu" class="hidden md:flex flex-col md:flex-row md:items-center md:gap-6 mt-4 md:mt-0">
            ${[
              ['/home', 'Home'],
              ['/mentors', 'Mentors'], 
              ['/students', 'Students'],
              ['/projects', 'Projects'],
              ['/memories', 'Memories'],
              ['/about', 'About']
            ].map(([path, label]) => `
              <a href="${path}" 
                 class="text-gray-200 nav-link relative transition-colors py-2 md:py-0
                 ${path === window.location.pathname ? 'active text-customRed font-semibold' : 'hover:text-customRed'}">
                ${label}
                <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#ef3837] rounded-full transition-all duration-300 ease-in-out transform -translate-x-1/2 ${path === window.location.pathname ? 'w-full' : ''}"></span>
              </a>
            `).join('')}
          </div>
        </div>
      </div>
    </nav>
    <style>
      .nav-link::after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 0;
        height: 2px;
        background-color: #ef3837; 
        transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
        transform: translateX(-50%);
      }
      
      .nav-link:hover::after {
        width: 100%;
        left: 50%;
      }

      /* Style for the active link */
      .nav-link.active::after {
        width: 100%;
        left: 50%;
      }
    </style>
  `;
}