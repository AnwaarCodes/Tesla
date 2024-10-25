import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home';
// import ThreeDScene from './utils/move';
import HomePage from './components/HomePage';
import HomeDetails from './components/HomeDetails';
import HomeLastPage from './components/HomeLastPage';

function App() {
  return (
    <>
    <div className="h-screen w-full bg-black">
      <Navbar />
      <Home />
      {/* <ThreeDScene /> */}
      <HomePage />
      <HomeDetails />
      <HomeLastPage/>
    </div>
    </>
  );
}

export default App;
