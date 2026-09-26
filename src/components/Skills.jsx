import React from 'react';

const Skills = () => {
  const habilidades = ["HTML", "CSS", "JavaScript", "React", "Git"];

  return (
    <section>
      <h2>Mis Habilidades</h2>
      <ul>
        {}
        {habilidades.map((habilidad) => (
          <li key={habilidad}>{habilidad}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;