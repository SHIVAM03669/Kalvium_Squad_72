import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const LearningPoint = ({ color, title, description }) => (
  <div className="flex items-start gap-3">
    <div className={`text-[${color}]`}>✦</div>
    <div>
      <h4 className="font-semibold mb-2 dark:text-white">{title}</h4>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </div>
);

const learningPoints = [
  {
    color: "rgb(255,57,57)",
    title: "Practical Learning",
    description: "Building real-world projects while learning new technologies"
  },
  {
    color: "#F3B15C",
    title: "Industry Skills",
    description: "Learning modern tech stack and best practices"
  },
  {
    color: "#6B4EFF",
    title: "Community",
    description: "Growing together with fellow learners"
  }
];

export function About() {
  return (
    <section className="pt-32 pb-20 px-4" aria-labelledby="about-heading">
      <div className="container mx-auto">
        <h2 
          id="about-heading" 
          className="text-4xl font-bold text-center mb-16 dark:text-white"
        >
          About Us
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                We are a group of passionate learners at Kalvium, pursuing our 
                journey to become skilled software developers. Our program combines 
                theoretical knowledge with practical, hands-on experience in modern 
                technologies.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 dark:text-white">
                Our Learning Journey
              </h3>
              
              <div className="grid gap-6 mb-8">
                {learningPoints.map((point, index) => (
                  <LearningPoint
                    key={index}
                    color={point.color}
                    title={point.title}
                    description={point.description}
                  />
                ))}
              </div>

              <Button 
                asChild
                className="inline-flex items-center gap-2"
              >
                <a 
                  href="https://kalvium.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="primary-button"
                >
                  Learn More About Kalvium
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default About;