import { projects } from '../data/projects.js';

export function Projects() {
  return `
    <section class="pt-32 pb-20 px-4">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 text-white">Our Projects</h2>
        <div class="grid md:grid-cols-2 gap-8">
          ${projects.map(project => `
            <div class="bg-gray-800/50 backdrop-blur-lg rounded-xl overflow-hidden border border-gray-700 hover:scale-105 hover:shadow-md transition duration-200">
              <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
              <div class="p-6">
                <h3 class="text-2xl font-bold mb-2 text-white">${project.title}</h3>
                <p class="text-gray-400 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  ${project.tech.map(tech => `
                    <span class="bg-[#FF3939]/10 text-[#FF3939] px-3 py-1 rounded-full text-sm">
                      ${tech}
                    </span>
                  `).join('')}
                </div>
                <p class="text-sm text-gray-500 mb-4">${project.students.join(', ')}</p>
                <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="primary-button inline-block">View Project</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `;
}