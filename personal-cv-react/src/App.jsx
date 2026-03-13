import AboutMe from "./components/About";
import Header from "./components/Header";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import "./index.css";

function App() {
  const educationData = [
    { program: "College", school: "USTP-CDO", year: "2028" },
    { program: "Senior High School", school: "Immaculate Academy Duero Bohol, Inc.", year: "2023" },
    { program: "Junior High School", school: "Immaculate Academy Duero Bohol, Inc.", year: "2020" },
    { program: "Elementary", school: "Duero Central Elementary School", year: "2016" },
  ];

  const skillsData = ["HTML", "CSS", "JavaScript", "React"];

  return (
    <div className="container">
      <h1>Samantha Nicole E. Bogo</h1>
      <h2>IT | Web System and Technologies</h2>

      <AboutMe />
      <Education />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;