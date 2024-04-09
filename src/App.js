import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Slides from './components/Slides';
import './index.css';

function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <SocialLinks/>
      
      {/* <About/> */}
      <Slides/>
      <Portfolio/>
      {/* <Experience/> */}
      <Contact/>
      {/* <h1 className="text-4xl">Sammy</h1> */}
    </div>
  );
}

export default App;
