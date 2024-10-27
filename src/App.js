import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/Home/Home';
import { Provider} from './components/Context/Context';
import About from './components/About/About'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Robotics from './components/Robotics/Robotics';


function App() {
  return (
    <>

    <Provider>
    <div className="h-screen w-full bg-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/robotics" element={<Robotics />} />
      </Routes>
    </div>
    </Provider>

    </>
  );
}

export default App;
