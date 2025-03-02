import { Button } from "@mui/material";
import { init } from "./utils/initDroneLayer.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    init()
  }, [])


  return (

    <div className="App">
      <div className="hero">
        <h1 className="title">Welcome</h1>
        <p className="text">I am excited to apply for the Job. As a passionate and results-driven developer, I bring a strong foundation in  frontend development, Unity development, Golang, Spring Boot, along with hands-on experience in building efficient and scalable applications.

          During my tenure as a Product Engineer at Cybernetyx, I worked extensively on C# and Unity, developing interactive applications and optimizing game performance. Additionally, my experience at Coding Samurai as a Frontend Developer Intern allowed me to refine my skills in React.js and Tailwind CSS, building user-friendly interfaces. My diverse background in game development, web technologies, and software engineering enables me to adapt quickly and contribute effectively to dynamic projects.

          My ability to collaborate in teams, solve complex problems, and deliver high-quality solutions aligns well with your organization's vision. I am eager to leverage my skills to contribute to your team’s success.

        </p>
        <p>
          <button className="btn"> English</button>
          <button className="btn">Hindi</button>
        </p>

      </div>

      <div className="Pricing">
        <h1 className="h1">Our Packages</h1>
        <div className="pricing-table">
          <div className="pricing-card">
            <p className="title">Basic</p>
            <p className="info">Email Syntax Validation
              Domain Existence Check
              MX Record Lookup
              SPF Record Validation
              DMARC Record Validation
              SMTP Connectivity Check (Email Existence Validation)
              Catch-All Domain Detection
              Role-Based Email Detection (e.g., admin@, info@)
              Temporary/Disposable Email Detection
            </p>
            <button className="btn">Buy Now</button>
          </div>
          <div className="pricing-card">
            <p className="title">Intermediate</p>
            <p className="info">Email Syntax Validation
                Domain Existence Check
                MX Record Lookup
                SPF Record Validation
                DMARC Record Validation
                SMTP Connectivity Check (Email Existence Validation)
                Catch-All Domain Detection
                Role-Based Email Detection (e.g., admin@, info@)
                Temporary/Disposable Email Detection
</p>
            <button className="btn">Buy Now</button>
          </div>
          <div className="pricing-card">
            <p className="title">Advance</p>
            <p className="info">Email Syntax Validation
                        Domain Existence Check
                        MX Record Lookup
                        SPF Record Validation
                        DMARC Record Validation
                        SMTP Connectivity Check (Email Existence Validation)
                        Catch-All Domain Detection
                        Role-Based Email Detection (e.g., admin@, info@)
                        Temporary/Disposable Email Detection
</p>
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
