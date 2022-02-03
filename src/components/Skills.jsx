import React from "react";

const Skills = (propos) => {
  return (
    <div className="Skills">
      <h2>My Skills:</h2>
      <ul>
        {propos.skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
