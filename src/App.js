
import './App.css';
import About from './Components/About';
import Blog from './Components/Blog';
import ClientReview from './Components/ClientReview';
import Contract from './Components/Contract';
import Count from './Components/Count';
import Education from './Components/Education';
import Experties from './Components/Experties';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import Progress from './Components/Progress';
import Project from './Components/Project';
import Services from './Components/Services';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Hero></Hero>
      <Experties></Experties>
      <About></About>
      <Count></Count>
      <Skills></Skills>
      <Progress></Progress>
      <Services></Services>
      <Education></Education>
      <Project></Project>
      <ClientReview></ClientReview>
      <Blog></Blog>
      <Contract></Contract>
      <Footer/>
    </div>
  );
}

export default App;
