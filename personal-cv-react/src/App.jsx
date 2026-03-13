import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  // Sample data for Education
  const educationData = [
    { program: "College", school: "USTP-CDO", year: "2028" },
    { program: "Senior High School", school: "Immaculate Academy Duero Bohol, Inc.", year: "2023" },
    { program: "Junior High School", school: "Immaculate Academy Duero Bohol, Inc.", year: "2020" },
    { program: "Elementary", school: "Duero Central Elementary School", year: "2016" },
  ];

  // Sample data for Skills
  const skillsData = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div>
      <header>
        <h1>Samantha Nicole E. Bogo</h1>
        <h3>IT Student | Web System and Technologies</h3>
      </header>

      <AboutMe />
      <Education education={educationData} />
      <Skills skills={skillsData} />
      <Contact />
    </div>
  );
}

export default App;
