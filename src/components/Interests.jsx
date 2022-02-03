import React from "react";

const Interests = (propos) => {
  return (
    <div className="interests">
      <h2>My Interest:</h2>
      <ul>
        {propos.interests.map((interest) => (
          <li>{interest}</li>
        ))}
      </ul>
    </div>
  );
};

export default Interests;
