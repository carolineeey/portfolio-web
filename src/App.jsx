import './App.css';
import Profile from './sections/profile/profile';
import Projects from './sections/projects/projects'
import Skills from './sections/skills/skills'
import Contact from './sections/contact/contact';
import Footer from './sections/footer/footer';

function App() {
  return (
    <> 
      <Profile />  
      <Projects /> 
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
