import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
// import ThreeDScene from './utils/move';


function App() {
  return (
    <>
    <div className="h-screen w-full bg-black">
      <Navbar />
      <Home />
      {/* <ThreeDScene /> */}
    </div>
    </>
  );
}

export default App;
