import Header from './Components/Header/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />

    <main>
      <About/>
      {/* <Projects/> */}
      <Skills/>
      <Contact/>
    </main>

    </div>
  );
}

export default App;
