import { memories } from '../data/memories.js';

export function Memories() {
  return `
    <section class="pt-32 pb-20 px-4">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 dark:text-white">Our Memories</h2>
        <div class="grid md:grid-cols-2 gap-8">
          ${memories.map(memory => `
            <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
              <img src="${memory.image}" alt="${memory.title}" class="w-full h-64 object-cover">
              <div class="p-6">
                <div class="text-sm text-[#F3B15C] mb-2">${memory.date}</div>
                <h3 class="text-2xl font-bold mb-2 dark:text-white">${memory.title}</h3>
                <p class="text-gray-600 dark:text-gray-400">${memory.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}