export function Landing() {
  // Initialize animation after content is loaded
  setTimeout(() => {
    const logo = document.querySelector('.logo-container');
    const content = document.querySelector('.content-container');
    const letter = document.querySelector('.letter-overlay');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const maxLogoScale = 3;
    const maxLetterScale = 5;
    let contentRevealed = false;
    
    if (logo && content && letter && scrollIndicator) {
      window.addEventListener('scroll', () => {
        const scrollPercent = window.scrollY / (window.innerHeight * 2.5);
        
        // Hide scroll indicator on scroll
        if (scrollPercent > 0.1) {
          scrollIndicator.style.opacity = '0';
        } else {
          scrollIndicator.style.opacity = '1';
        }
        
        // First phase: Logo scaling and fading (0-50% scroll)
        if (scrollPercent <= 0.5) {
          const scale = 1 + Math.min(scrollPercent, maxLogoScale - 1);
          const opacity = Math.max(1 - scrollPercent * 2, 0);
          
          logo.style.transform = `scale(${scale})`;
          logo.style.opacity = opacity;
          
          letter.style.transform = 'scale(1)';
          letter.style.opacity = '0';
          
          content.style.opacity = '0';
          content.style.transform = 'translateY(50px)';
        } 
        // Second phase: Letter scaling (50-75% scroll)
        else if (scrollPercent <= 0.75) {
          const letterProgress = (scrollPercent - 0.5) * 2;
          const letterScale = 1 + Math.min(letterProgress * maxLetterScale, maxLetterScale);
          
          logo.style.opacity = '0';
          letter.style.transform = `scale(${letterScale})`;
          letter.style.opacity = Math.min(letterProgress * 2, 1);
          
          const redOpacity = Math.min(letterProgress, 1);
          letter.querySelector('.number').style.color = `rgba(255, 57, 57, ${redOpacity})`;
          
          content.style.opacity = '0';
          content.style.transform = 'translateY(50px)';
        }
        // Final phase: Content reveal (75-100% scroll)
        else {
          const contentProgress = (scrollPercent - 0.75) * 2;
          
          logo.style.opacity = '0';
          letter.style.transform = `scale(${maxLetterScale})`;
          letter.style.opacity = '1';
          letter.querySelector('.number').style.color = '#FF3939';
          
          content.style.opacity = Math.min(contentProgress * 2, 1);
          content.style.transform = `translateY(${Math.max(50 - contentProgress * 100, 0)}px)`;
          contentRevealed = true;
        }
      });
    }
  }, 100);

  // Import the ExploreButton component
  import('../components/ExploreButton.js').then(module => {
    const buttonWrapper = document.querySelector('.explore-button-wrapper');
    if (buttonWrapper) {
      buttonWrapper.innerHTML = module.ExploreButton();
    }
  });

  return `
    <div class="relative min-h-[400vh] bg-gray-900 overflow-hidden">
      <!-- Scroll Indicator -->
      <div class="scroll-indicator fixed bottom-8 left-1/2 -translate-x-1/2 z-40 text-white flex flex-col items-center transition-opacity duration-500">
        <span class="text-sm mb-2">Scroll Down</span>
        <svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <!-- Initial Logo -->
      <div class="logo-container fixed top-0 left-0 w-full h-screen flex items-center justify-center z-30 pointer-events-none transition-all duration-500 ease-out">
        <img 
          src="/vite.svg" 
          alt="Squad 72 Logo" 
          class="w-32 h-32 md:w-48 md:h-48 transform transition-transform"
        />
      </div>
      
      <!-- Content Container -->
      <div class="content-container fixed top-0 left-0 w-full h-screen opacity-0 transition-all duration-700 ease-out z-20">
        <div class="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">Welcome to Squad 72</h1>
          <p class="text-xl text-gray-300 mb-8 max-w-2xl">
            A collective of passionate developers pushing the boundaries of technology and innovation.
          </p>
          <div class="explore-button-wrapper">
            <!-- Button will be dynamically inserted here -->
          </div>
        </div>
      </div>

      <!-- Letter Overlay -->
      <div class="letter-overlay fixed top-0 left-0 w-full h-screen z-10 pointer-events-none opacity-0 transition-all duration-700 ease-out">
        <div class="number absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vh] font-bold text-white/5 transition-colors duration-700">
          72
        </div>
      </div>
    </div>
  `;
}