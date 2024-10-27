import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './components/pages/About';
import Bookings from './components/pages/Bookings';
import Home from './components/pages/Home';
import Profile from './components/pages/Profile';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/bookings" element={<Bookings/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
