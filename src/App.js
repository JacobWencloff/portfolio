import React, {useRef} from 'react';
import './App.css';
import Home from './Comps/Home';
import About from './Comps/About';
import Skills from './Comps/Skills';
import Projects from './Comps/Projects';
import Contact from './Comps/Contact';



function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)


  function handleClick(e){
    switch(e.target.id){
      case 'Home':
        homeRef.current?.scrollIntoView({behavior: 'smooth', block:'start'})
        break;
      case 'About':
        aboutRef.current?.scrollIntoView({behavior: 'smooth', block:'center'})
        break;
      case 'Skills':
        skillsRef.current?.scrollIntoView({behavior: 'smooth', block:'center'})
        break;
      case 'Projects':
        projectsRef.current?.scrollIntoView({behavior: 'smooth', block:'center'})
        break;
      case 'Contact':
        contactRef.current?.scrollIntoView({behavior: 'smooth', block:'center'})
        break;
      }
  }


  return (
    <div className="App">
      <header className="App-header">
        <div className="nav-bar">
          <p onClick={handleClick} id='Home'>
              Home
          </p>
          <p onClick={handleClick} id='About'>
            About
          </p>
          <p onClick={handleClick} id='Skills'>
            Skills
          </p>
          <p onClick={handleClick} id='Projects'>
           Projects
          </p>
          <p onClick={handleClick} id='Contact'>
            Contact Me
          </p>
        </div>
      </header>
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Skills ref={skillsRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
    </div>
  );
}

export default App;
