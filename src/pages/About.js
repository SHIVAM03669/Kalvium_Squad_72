export function About() {
  return `
    <section class="pt-32 pb-20 px-4">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 dark:text-white">About Us</h2>
        <div class="max-w-3xl mx-auto">
          <div class="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <p class="text-lg text-gray-700 dark:text-gray-300 mb-6">
              We are a group of passionate learners at Kalvium, pursuing our journey to become skilled software developers. Our program combines theoretical knowledge with practical, hands-on experience in modern technologies.
            </p>
            
            <h3 class="text-2xl font-bold mb-4 dark:text-white">Our Learning Journey</h3>
            <div class="grid gap-6 mb-8">
              <div class="flex items-start gap-3">
                <div class="text-[rgb(255,57,57)] dark:text-[#FF5959]">✦</div>
                <div>
                  <h4 class="font-semibold mb-2 dark:text-white">Practical Learning</h4>
                  <p class="text-gray-600 dark:text-gray-400">Building real-world projects while learning new technologies</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="text-[#F3B15C]">✦</div>
                <div>
                  <h4 class="font-semibold mb-2 dark:text-white">Industry Skills</h4>
                  <p class="text-gray-600 dark:text-gray-400">Learning modern tech stack and best practices</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="text-[#6B4EFF]">✦</div>
                <div>
                  <h4 class="font-semibold mb-2 dark:text-white">Community</h4>
                  <p class="text-gray-600 dark:text-gray-400">Growing together with fellow learners</p>
                </div>
              </div>
            </div>

            <a href="https://kalvium.com" target="_blank" class="primary-button inline-block">Learn More About Kalvium</a>
          </div>
        </div>
      </div>
    </section>
  `;
}