import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import DeepSeaAdventure from './components/pages/DeepSeaAdventure';
import HomeScreen from './components/pages/HomeScreen';
import PageNotFound from './components/pages/PageNotFound';
import ProjectInformation from './components/pages/ProjectInformation';

function App() {
  return (
    <div className="App">
      <Header />
        <div className="content">
            <Routes>
              <Route path="/" element={<HomeScreen />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/projects" element={<ProjectInformation />}/>
              <Route path="/projects/deep-sea-adventure" element={<DeepSeaAdventure />}/>
              <Route path="/*" element={<PageNotFound />}/>
            </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
