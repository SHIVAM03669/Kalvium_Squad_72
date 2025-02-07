import { memories } from '../data/memories.js';

export function Memories() {
  return `
    <section class="pt-32 pb-20 px-4">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 text-white">Our Memories</h2>
        <div class="grid md:grid-cols-2 gap-8">
          ${memories.map(memory => `
            <div class="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700 group relative hover:shadow-lg hover:scale-105 transition-all duration-500">
              <div class="h-64 overflow-hidden">
                <img src="${memory.image}" alt="${memory.title}" class="w-full h-full object-cover group-hover:scale-150 transition-all duration-500">
              </div>
              <div class="p-6 z-10 group-hover:z-20 transition-all duration-500">
                <div class="text-sm text-[#F3B15C] mb-2">${memory.date}</div>
                <h3 class="text-2xl font-bold mb-2 text-white">${memory.title}</h3>
                <p class="text-gray-400">${memory.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}