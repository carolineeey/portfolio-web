import './App.css';
import Navbar from './sections/navbar/navbar';
import Profile from './sections/profile/profile';
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
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
