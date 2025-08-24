import './App.css';
import Navbar from './components/navbar';
import Landing from './pages/landing';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Footer/>
    </div>
  );
}

export default App;
