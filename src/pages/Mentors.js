import { mentors } from '../data/mentors.js';
import { MentorCard } from '../components/MentorCard.js';

export function Mentors() {
  return `
    <section class="pt-32 pb-20 px-4">
      <div class="container mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16 text-white">Our Mentors</h2>
        <div class="flex flex-wrap justify-center gap-8">
          ${mentors.map(mentor => MentorCard({ mentor })).join('')}
        </div>
      </div>
    </section>
  `;
}
