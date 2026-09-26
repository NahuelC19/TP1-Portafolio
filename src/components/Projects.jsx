import React from 'react';

const Projects = ({ titulo, listaProyectos }) => {
    return (
        <section>
            <h2>{titulo}</h2>
            <ul>
                {listaProyectos.map((proyecto) => (
                    <li key={proyecto.id}>
                        <strong>{proyecto.nombre}:</strong> {proyecto.descripcion}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;