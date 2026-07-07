import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>App Developer (Developing CTO)</h4>
                <h5>Sattys (Startup)</h5>
              </div>
              <h3>2025 - PRESENT</h3>
            </div>
            <p>
              Currently working as an App Developer with Sattys, serving as the developing CTO in a startup environment to design, build, and deploy robust application architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer</h4>
                <h5>Pitstop Company</h5>
              </div>
              <h3>2024 - 2025</h3>
            </div>
            <p>
              Leveraging graphic design skills to create eye-catching graphics and 3-D animation. Applied digital art techniques to various creative projects, demonstrating a strong eye for design and aesthetics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Intern (Award Winner)</h4>
                <h5>PAWWS (Animal Welfare Society)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Supported PAWWS by creating engaging digital content (photos, stories) to raise funds and care for street dogs, and coordinated fundraising events. Awarded <strong>2nd Best Employee, Social Internship</strong> for outstanding contributions and commitment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B-Tech CSE</h4>
                <h5>Undergraduate studies</h5>
              </div>
              <h3>2023 - 2024</h3>
            </div>
            <p>
              Collaborating with seniors and faculty on AI and front-end development projects, contributing to academic research and innovative technology implementations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
