import { memories } from '../data/memories.js';

export function Memories() {
  return `
    <section class="pt-32 pb-20 px-4 relative overflow-hidden">
      <div class="container mx-auto relative z-10">
        <h2 class="text-4xl font-bold text-center mb-16 text-white">Our Memories</h2>
        <div class="grid md:grid-cols-2 gap-8">
          ${memories.map(memory => `
            <div class="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700 hover:shadow-lg transition-all duration-500">
              <div class="h-64 overflow-hidden">
                <img src="${memory.coverImage}" alt="${memory.title}" class="w-full h-full object-cover">
              </div>
              <div class="p-6">
                <div class="text-sm text-[#F3B15C] mb-2">${memory.date}</div>
                <h3 class="text-2xl font-bold mb-2 text-white">${memory.title}</h3>
                <p class="text-gray-400 mb-4">${memory.description}</p>
                <a href="/memory/${memory.id}" class="inline-flex items-center bg-[#FF3939] hover:bg-[#FF6347] text-white px-6 py-2 rounded-lg transition-all duration-300">
                  View More
                  <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Background Elements -->
      <div class="absolute top-20 right-0 w-72 h-72 bg-[#FF3939]/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 left-0 w-96 h-96 bg-[#FF3939]/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
    </section>
  `;
}