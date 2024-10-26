import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
// import ThreeDScene from './utils/move';
import HomePage from './components/HomePage';
import HomeDetails from './components/HomeDetails';
import InnovationSection from './components/HomeInnovations';
import HomeScrollerText from './components/HomeScrollerText';
import HomeFooter from './components/HomeFooter';

function App() {
  return (
    <>
    <div className="h-screen w-full bg-black">
      <Navbar />
      <Home />
      {/* <ThreeDScene /> */}
      <HomeScrollerText/>
      <HomePage />     
      <HomeDetails />
      <InnovationSection/>
      <HomeFooter/>
    </div>
    </>
  );
}

export default App;
