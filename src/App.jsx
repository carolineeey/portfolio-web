import './App.css';
import Navbar from './sections/navbar/navbar';
import Profile from './sections/profile/profile';
import Experience from './sections/experience/experience';
import Projects from './sections/projects/projects'
import Skills from './sections/skills/skills'
import Contact from './sections/contact/contact';
import Footer from './sections/footer/footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Profile />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
