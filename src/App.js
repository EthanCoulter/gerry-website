import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Book from './components/Book';
import Header from './components/Header';
import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Hero/>
      <Book/>
      <Toaster
      toastOptions={{
        style: {
          background: "#333",
          color: "#fff",
          fontSize: 24
        }, duration: 4000
      }}
    />
      <Contact/>
    </div>
  );
}

export default App;
