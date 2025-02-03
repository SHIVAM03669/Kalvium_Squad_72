export function MentorCard(props) {
  const mentor = props.mentor;
  const wrapper = document.createElement('div');
  
  const html = `
    <div class="card-wrapper">
      <style>
        .card-wrapper .card {
          width: 190px;
          height: 254px;
          background: #1f2937;
          border-radius: 10px;
          text-align: center;
          transition: all 0.5s;
          position: relative;
          border: 1px solid #374151;
        }

        .card-wrapper .card:hover {
          box-shadow: 0 0 20px 1px rgba(239, 56, 55, 0.2);
          background-color: #ef3837;
          border-color: #ef3837;
        }

        .card-wrapper .card .blob {
          height: 10px;
          width: 75%;
          border-radius: 0 0 30px 30px;
          margin: 0 auto;
          background-color: #ef3837;
          visibility: visible;
          transition: all 0.3s;
        }

        .card-wrapper .card:hover .blob {
          height: 0;
        }

        .card-wrapper .card .img {
          display: flex;
          margin: 30px auto 10px auto;
          width: 70px;
          height: 70px;
          background-color: #374151;
          border-radius: 50%;
          font-size: 11px;
          justify-content: center;
          align-items: center;
          transition: all 0.5s;
          overflow: hidden;
        }

        .card-wrapper .card .img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }

        .card-wrapper .card:hover .img {
          width: 100%;
          height: 70%;
          border-radius: 10px 10px 0 0;
          margin: 0 auto;
          z-index: 1;
          overflow: hidden;
        }

        .card-wrapper .card:hover .img img {
          transform: scale(1.2);
        }

        .card-wrapper .card h2 {
          padding: 15px 10px;
          font-size: 1.25rem;
          font-weight: 600;
          transition: all 0.1s;
          z-index: 2;
          line-height: 1.2;
          color: #fff;
          font-family: 'Inter', sans-serif;
        }

        .card-wrapper .card span {
          font-size: 0.875rem;
          color: #d1d5db;
          display: block;
          margin-top: 0.5rem;
          font-family: 'Inter', sans-serif;
        }

        .card-wrapper .card:hover h2 {
          opacity: 0;
          transform: translateY(-20px);
        }

        .card-wrapper .card > p {
          opacity: 0;
          transition: all 0.75s;
          position: absolute;
          bottom: 15px;
          left: 0;
          right: 0;
          padding: 0 1rem;
          z-index: 3;
        }

        .card-wrapper .card:hover > p {
          opacity: 1;
        }

        .card-wrapper .card > p > a {
          display: inline-block;
          padding: 5px;
          margin: 0 5px;
        }

        .card-wrapper .card > p > a > svg {
          width: 24px;
          height: 24px;
          transition: transform 0.3s ease;
        }

        .card-wrapper .card > p > a > svg:hover {
          transform: scale(1.1);
        }
      </style>
      <div class="card">
        <div class="blob"></div>
        <div class="img">
          <img src="${mentor.photo}" alt="${mentor.name}" loading="lazy" />
        </div>
        <h2>${mentor.name}<br/><span>${mentor.bio}</span></h2>
        <p>
          <a href="${mentor.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ffffff" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="${mentor.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path fill="#ffffff" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </p>
      </div>
    </div>
  `;

  wrapper.innerHTML = html;
  return wrapper.innerHTML;
}