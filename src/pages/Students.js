import { students } from '../data/students.js';

// Define the chunk function at the top level
function chunk(arr, size) {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
}

export function Students() {
  return `
    <section class="pt-32 pb-20 px-4">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 dark:text-white">Meet Our Students</h2>
        <div class="relative"> <!-- Removed h-[600px] and overflow-hidden -->
          ${chunk(students, 3)
            .map(
              (group, groupIndex) => `
            <div class="relative grid md:grid-cols-3 gap-8 opacity-0 translate-y-10 transition-all duration-1000 ease-out student-group ${
              groupIndex === 0 ? 'active' : ''
            }" data-group="${groupIndex}">
              ${group
                .map(
                  (student) => `
                <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <img src="${student.photo}" alt="${
                    student.name
                  }" class="w-full h-64 object-cover" loading="lazy">
                  <div class="p-6">
                    <h3 class="text-2xl font-bold mb-2 dark:text-white">${
                      student.name
                    }</h3>
                    <p class="text-gray-600 dark:text-gray-400">${
                      student.batch
                    }</p>
                    <p class="text-sm text-gray-500 dark:text-gray-500 mb-4">${
                      student.university
                    }</p>
                    <p class="text-gray-700 dark:text-gray-300 mb-6">${
                      student.bio
                    }</p>
                    
                    <div class="mb-6">
                      <h4 class="text-lg font-semibold mb-3 dark:text-white">Currently Learning</h4>
                      <div class="flex flex-wrap gap-2">
                        ${student.learning
                          .map(
                            (skill) => `
                          <span class="bg-[#FF3939]/10 text-[#FF3939] dark:bg-[#FF5959]/10 dark:text-[#FF5959] px-3 py-1 rounded-full text-sm">
                            ${skill}
                          </span>
                        `
                          )
                          .join('')}
                      </div>
                    </div>

                    <div class="mb-6">
                      <h4 class="text-lg font-semibold mb-3 dark:text-white">Journey Highlights</h4>
                      <ul class="space-y-2">
                        ${student.highlights
                          .map(
                            (highlight) => `
                          <li class="flex items-center gap-2 dark:text-gray-300">
                            <span class="text-[#F3B15C]">✦</span>
                            ${highlight}
                          </li>
                        `
                          )
                          .join('')}
                      </ul>
                    </div>

                    <div class="flex gap-4">
                      <a href="${
                        student.github
                      }" target="_blank" class="primary-button">GitHub</a>
                      <a href="${
                        student.linkedin
                      }" target="_blank" class="outline-button">LinkedIn</a>
                    </div>
                  </div>
                </div>
              `
                )
                .join('')}
            </div>
          `
            )
            .join('')}
        </div>
      </div>
    </section>

    <script>
      // Initialize Intersection Observer
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
          });
        },
        {
          threshold: 0.1, // Adjusted threshold
        }
      );

      // Observe all student groups
      document.querySelectorAll('.student-group').forEach((group) => {
        observer.observe(group);
      });
    </script>
  `;
}