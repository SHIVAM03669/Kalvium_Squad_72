export function StudentCard(props) {
  const student = props.student;
  const wrapper = document.createElement('div');
  
  const html = `
    <div class="card">
      <div class="profile-pic">
        <img 
          src="${student.photo}" 
          alt="${student.name}" 
          loading="lazy"
          decoding="async"
          width="280"
          height="280"
        />
      </div>
      <div class="bottom">
        <div class="content">
          <div class="header-content">
            <span class="name">${student.name}</span>
            <span class="about-me">${student.bio}</span>
          </div>
          <div class="skills">
            ${student.learning.map(skill => `
              <span class="skill-tag">${skill}</span>
            `).join('')}
          </div>
        </div>
        <div class="bottom-bottom">
          <div class="social-links-container">
            <a href="${student.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ffffff" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="${student.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#ffffff" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
          <button class="contact-button">Contact Me</button>
        </div>
      </div>
    </div>
  `;

  wrapper.innerHTML = html;
  return wrapper.innerHTML;
}

// Add styles to the document head
const style = document.createElement('style');
style.textContent = `
.card {
  width: 280px;
  height: 280px;
  background: linear-gradient(145deg, #ffffff, #f8f9fa);
  border-radius: 20px;
  padding: 3px;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(220, 38, 38, 0.15);
  border: 1px solid rgba(220, 38, 38, 0.2);
  background: #1b212f;
}

.card .profile-pic {
  position: absolute;
  width: calc(100% - 6px);
  height: calc(100% - 6px);
  top: 3px;
  left: 3px;
  border-radius: 18px;
  z-index: 2;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.card .profile-pic img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.card .bottom {
  position: absolute;
  bottom: 3px;
  left: 3px;
  right: 3px;
  background: linear-gradient(145deg, #DC2626, #B91C1C);
  top: 85%;
  border-radius: 18px;
  z-index: 1;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.card .bottom .content {
  padding: 1.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.card .bottom .content .header-content {
  padding-left: 0; /* Remove padding to avoid overlap */
  margin-bottom: 1rem;
}

.card .bottom .content .name {
  font-size: 1.25rem;
  font-weight: 700;
  color: white;
  margin-bottom: 0.5rem;
  display: block;
}

.card .bottom .content .about-me {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  display: block;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card .bottom .content .skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  padding-left: 0;
}

.card .bottom .content .skill-tag {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card .bottom .content .skill-tag:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card .bottom .bottom-bottom {
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
  right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.card .bottom .bottom-bottom .social-links-container {
  display: flex;
  gap: 1rem;
}

.card .bottom .bottom-bottom .social-links-container svg {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.card .bottom .bottom-bottom .social-links-container svg:hover {
  transform: scale(1.1) rotate(5deg);
}

.card .bottom .bottom-bottom .contact-button {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
}

.card .bottom .bottom-bottom .contact-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.card:hover .profile-pic {
  width: 80px;
  height: 80px;
  top: 1.5rem;
  left: 1.5rem;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.card:hover .profile-pic img {
  transform: scale(1.2);
}

.card:hover .bottom {
  top: 20%;
}

.card:hover .bottom .content,
.card:hover .bottom .bottom-bottom {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 640px) {
  .card {
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
  }
}
`;

document.head.appendChild(style);