import { mentors } from '../data/mentors.js';
import { MentorCard } from '../components/MentorCard.js';

export function Mentors() {
  return `
    <section class="pt-32 pb-20 px-4 relative overflow-hidden">
      <div class="container mx-auto relative z-10">
        <h2 class="text-4xl font-bold text-center mb-16 text-white">Our Mentors</h2>
        <div class="flex flex-wrap justify-center gap-8">
          ${mentors.map(mentor => MentorCard({ mentor })).join('')}
        </div>
      </div>

      <!-- Background Elements -->
      <div class="absolute top-20 right-0 w-72 h-72 bg-[#FF3939]/10 rounded-full filter blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
    </section>
  `;
}