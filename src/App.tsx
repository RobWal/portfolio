import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/organisms/Footer';
import Header from './components/organisms/Header';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import DeepSeaAdventure from './components/pages/DeepSeaAdventure';
import HomeScreen from './components/pages/HomeScreen';
import Jaunt from './components/pages/Jaunt';
import OkayBloomer from './components/pages/OkayBloomer';
import PageNotFound from './components/pages/PageNotFound';
import ProjectInformation from './components/pages/Projects';
import StardewValleyTools from './components/pages/StardewValleyTools';
import TicTacToe from './components/pages/TicTacToe';

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
              <Route path="/projects/okay-bloomer" element={<OkayBloomer />}/>
              <Route path="/projects/jaunt" element={<Jaunt />}/>
              <Route path="/projects/tic-tac-toe" element={<TicTacToe />}/>
              <Route path="/stardew-valley-tools" element={<StardewValleyTools />}/>
              <Route path="/*" element={<PageNotFound />}/>
            </Routes>
        </div>
      <Footer />
    </div>
  );
}

export default App;
