import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { useState } from "react";
function App() {
 const education = [
  { program: "College", school: "USTP-CDO", year: "2028" },
  { program: "Senior High School", school: "Immaculate Academy Duero Bohol, Inc.", year: "2023" },
  { program: "Junior High School", school: "Immaculate Academy Duero Bohol, Inc.", year: "2020" },
  { program: "Elementary", school: "Duero Central Elementary School", year: "2016" }
];
<Education education={education} />
 

  const skills = ["HTML", "CSS", "JavaScript", "React"];
<Skills skills={skills} />

  const [darkMode, setDarkMode] = useState(false);
return (
  
<>
<div className={darkMode ? "dark-mode" : ""}>
  <button onClick={() => setDarkMode(!darkMode)}>
   {darkMode ? "Light Mode" : "Dark Mode"}
  </button>

<Header />
<About />
<Skills skills={skills} />
<Education education={education} />
<Contact />
</div>

</>
  
);
}
export default App;