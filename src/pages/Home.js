export function Home() {
  return `
    <section class="pt-0 pb-20 px-4">
      <div class="container mx-auto">
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="flex-1 relative">
            <div class="absolute inset-0 bg-gradient-to-r from-[#FF3939]/10 to-transparent rounded-full blur-3xl"></div>
            <img src="/Design inspiration-bro.png" alt="Students" class="relative z-10 w-full">
          </div>
          <div class="flex-1">
            <div class="flex items-center gap-4 mb-6">
              <span class="px-3 py-1 bg-[#F3B15C]/20 text-[#F3B15C] rounded-full text-sm">Kalvium Students</span>
              <span class="px-3 py-1 bg-[#F3B15C]/20 text-[#F3B15C] rounded-full text-sm">Batch 2024</span>
            </div>
            <h1 class="text-5xl md:text-7xl font-bold mb-6 dark:text-white">
              <span>Learning to be </span>
              <span class="text-[#FF3939] dark:text-[#FF5959]">India's Best</span>
              <span> Developers</span>
            </h1>
            <div class="grid grid-cols-2 gap-6 mt-12">
              <div class="flex items-start gap-3">
                <div class="text-[#FF3939] dark:text-[#FF5959]">✦</div>
                <p class="dark:text-gray-300">Learning Modern Technologies</p>
              </div>
              <div class="flex items-start gap-3">
                <div class="text-[#FF3939] dark:text-[#FF5959]">✦</div>
                <p class="dark:text-gray-300">Building Real Projects</p>
              </div>
              <div class="flex items-start gap-3">
                <div class="text-[#F3B15C]">✦</div>
                <p class="dark:text-gray-300">Growing Together</p>
              </div>
              <div class="flex items-start gap-3">
                <div class="text-[#F3B15C]">✦</div>
                <p class="dark:text-gray-300">Hands-on Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}