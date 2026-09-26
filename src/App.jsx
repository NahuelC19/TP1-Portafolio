import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const misProyectos = [
    { id: 1, nombre: "Proyecto Uno", descripcion: "Primer proyecto web estático." },
    { id: 2, nombre: "Proyecto Dos", descripcion: "Aplicación interactiva con React." }
  ];

  return (
    <div>
      <Header nombre="Nahuel Condori" profesion="Estudiante de Programación" />
      
      <Hero />
      
      <About />
      
      <Skills />
      
      {}
      <Projects titulo="Mis Primeros Proyectos" listaProyectos={misProyectos} />
      
      <Footer />
    </div>
  );
};

export default App;