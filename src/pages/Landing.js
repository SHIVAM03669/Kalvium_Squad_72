export function Landing() {
  // Initialize scroll handler after content is loaded
  setTimeout(() => {
    const logo = document.querySelector('.logo-container');
    const content = document.querySelector('.content-container');
    const maxScale = 5;
    
    if (logo && content) {
      window.addEventListener('scroll', () => {
        const scrollPercent = window.scrollY / (window.innerHeight * 0.5);
        const scale = 1 + Math.min(scrollPercent * 2, maxScale - 1);
        const opacity = Math.max(1 - scrollPercent, 0);
        
        logo.style.transform = `scale(${scale})`;
        logo.style.opacity = opacity;
        
        if (scrollPercent > 0.5) {
          content.style.opacity = Math.min((scrollPercent - 0.5) * 2, 1);
          content.style.transform = 'translateY(0)';
        } else {
          content.style.opacity = 0;
          content.style.transform = 'translateY(50px)';
        }
      });
    }
  }, 100);

  return `
    <div class="relative min-h-[200vh] bg-gray-900">
      <div class="logo-container fixed top-0 left-0 w-full h-screen flex items-center justify-center z-20 pointer-events-none transition-transform duration-300 ease-out">
        <div class="text-6xl md:text-8xl font-bold text-white text-center">
          SQUAD <span class="text-[#FF3939]">72</span>
        </div>
      </div>
      
      <div class="content-container fixed top-0 left-0 w-full h-screen opacity-0 transition-all duration-500 ease-out z-10">
        <div class="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">Welcome to Squad 72</h1>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl">
            A collective of passionate developers pushing the boundaries of technology and innovation.
          </p>
          <div>
            <a href="/home" class="primary-button">Explore</a>
          </div>
        </div>
      </div>
    </div>
  `;
}