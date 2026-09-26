import React, { useState } from 'react';

const Hero = () => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <section>
      <h2>¡Hola! Bienvenido a mi portfolio</h2>
      
      {}
      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar ? 'Ocultar saludo' : 'Mostrar saludo'}
      </button>
      
      {}
      {mostrar && <p>Gracias por visitar mi sitio</p>}
    </section>
  );
};

export default Hero;