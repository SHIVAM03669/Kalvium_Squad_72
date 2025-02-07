export function About() {
  return `
    <section class="pt-32 pb-20 px-4 relative overflow-hidden">
      <div class="container mx-auto relative z-10 max-w-6xl">
        <h2 class="text-4xl font-bold text-center mb-16 text-white">About Squad 72</h2>
        <div class="max-w-4xl mx-auto space-y-12">
          <div class="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-gray-700">
            <h3 class="text-2xl font-bold mb-4 text-white">Our Vision</h3>
            <p class="text-gray-400 mb-6">
              Squad 72 represents a collective of ambitious developers committed to pushing the boundaries of technology and innovation. We're not just learning to code; we're learning to create solutions that matter.
            </p>
            <div class="grid md:grid-cols-3 gap-6">
              <div class="text-center p-6 bg-gray-800/50 backdrop-blur-lg rounded-lg border border-gray-700">
                <div class="text-3xl mb-2 text-[#6B4EFF]">18+</div>
                <div class="text-white">Active Members</div>
              </div>
              <div class="text-center p-6 bg-gray-800/50 backdrop-blur-lg rounded-lg border border-gray-700">
                <div class="text-3xl mb-2 text-[#6B4EFF]">20+</div>
                <div class="text-white">Projects Completed</div>
              </div>
              <div class="text-center p-6 bg-gray-800/50 backdrop-blur-lg rounded-lg border border-gray-700">
                <div class="text-3xl mb-2 text-[#6B4EFF]">3+</div>
                <div class="text-white">Hackathons Won</div>
              </div>
            </div>
          </div>

          <div class="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-gray-700">
            <h3 class="text-2xl font-bold mb-4 text-white">Our Journey</h3>
            <div class="space-y-6">
              <div class="flex gap-4">
                <div class="w-12 h-12 bg-[#6B4EFF] rounded-full flex items-center justify-center text-white">1</div>
                <div>
                  <h4 class="text-xl font-semibold mb-2 text-white">Foundation Phase</h4>
                  <p class="text-gray-400">Started with fundamentals of programming and web development, building strong basics in HTML, CSS, and JavaScript.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-12 h-12 bg-[#6B4EFF] rounded-full flex items-center justify-center text-white">2</div>
                <div>
                  <h4 class="text-xl font-semibold mb-2 text-white">Advanced Technologies</h4>
                  <p class="text-gray-400">Mastered modern frameworks and tools like React, Node.js, and cloud platforms.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-12 h-12 bg-[#6B4EFF] rounded-full flex items-center justify-center text-white">3</div>
                <div>
                  <h4 class="text-xl font-semibold mb-2 text-white">Real-world Projects</h4>
                  <p class="text-gray-400">Worked on industry-level projects, solving real problems and building practical solutions.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-gray-700">
            <h3 class="text-2xl font-bold mb-4 text-white">Our Culture</h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h4 class="text-xl font-semibold mb-2 text-white">Collaborative Learning</h4>
                <p class="text-gray-400">We believe in growing together through pair programming, code reviews, and knowledge sharing sessions.</p>
              </div>
              <div>
                <h4 class="text-xl font-semibold mb-2 text-white">Innovation First</h4>
                <p class="text-gray-400">Encouraging creative solutions and out-of-the-box thinking in every project we undertake.</p>
              </div>
              <div>
                <h4 class="text-xl font-semibold mb-2 text-white">Continuous Growth</h4>
                <p class="text-gray-400">Regular workshops, hackathons, and learning sessions to stay ahead in technology.</p>
              </div>
              <div>
                <h4 class="text-xl font-semibold mb-2 text-white">Community Support</h4>
                <p class="text-gray-400">A strong support system where every member helps others grow and succeed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Background Elements -->
      <div class="absolute top-20 right-0 w-72 h-72 bg-[#FF3939]/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
    </section>
  `;
}