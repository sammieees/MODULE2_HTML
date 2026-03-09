import { useState } from "react";
import Card from "./Card"; 

function Skills({ skills }) {
  return (
    <Card title="Skills">
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </Card>
  );
}

export default Skills;
