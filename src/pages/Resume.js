import React from "react";
import "./Resume.css";

function ResumeSection({ title, children }) {
  return (
    <div className="resume-section">
      <h2>{title}</h2>
      <div className="resume-content">{children}</div>
    </div>
  );
}

function ResumeItem({ title, subtitle, description }) {
  return (
    <div className="resume-item">
      <h3>{title}</h3>
      <p className="resume-subtitle">{subtitle}</p>
      {description && <p className="resume-description">{description}</p>}
    </div>
  );
}

function Resume() {
  return (
    <div className="resume-container">
      <h1>Chaowei's Resume</h1>

      {/* PDF Viewer for Download */}
      <p>
        <a href="/resume_v6.pdf" target="_blank" rel="noopener noreferrer" className="resume-download">
          📄 Download Resume (PDF)
        </a>
      </p>

      {/* Education Section */}
      <ResumeSection title="Education">
        <ResumeItem
          title="MPS Information Science"
          subtitle="Cornell University"
        />
        <ResumeItem
          title="B.Sc. Informatics"
          subtitle="University of Washington (GPA: 3.8/4.0, Dean's List: 8 quarters)"
        />
      </ResumeSection>

      {/* Experience Section */}
      <ResumeSection title="Experience">
        <ResumeItem
          title="Graduate Teaching Research Specialist"
          subtitle="Cornell University (Aug 2024 - Dec 2024)"
          description="Supported lectures, managed course forum, graded assignments for 230+ students, and collaborated with professors."
        />
        <ResumeItem
          title="Research Assistant - Human & System Lab"
          subtitle="Seattle, WA (Jul 2023 - Jun 2024)"
          description="Developed UI for vigilance data visualization, analyzed psychomotor vigilance task data, and co-authored research reports."
        />
        <ResumeItem
          title="UX Designer - Tencent Ltd."
          subtitle="Shenzhen, China (Jun 2023 - Sep 2023)"
          description="Designed UI/UX features for Tencent Parental Control Platform, conducted research on AI-generated design, and led 30+ hours of user interviews."
        />
      </ResumeSection>

      {/* Skills Section */}
      <ResumeSection title="Skills">
        <ResumeItem title="Coding" subtitle="Java, Python, R, HTML, CSS, JavaScript, SQL, Swift, Git, React.js" />
        <ResumeItem title="Tools" subtitle="VS Code, Xcode, Figma, Sketch, AutoCAD, Blender" />
        <ResumeItem title="Languages" subtitle="Mandarin (Prof.), Cantonese (Prof.), English (Prof.), Japanese, Spanish" />
      </ResumeSection>
    </div>
  );
}

export default Resume;
