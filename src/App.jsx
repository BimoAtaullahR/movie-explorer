import About from './components/About';
import SearchBar from './components/SearchBar';
import Navbar from './components/Navbar';
import MovieInfo from './components/MovieInfo';
import Footer from './components/Footer';

function App() {
  return(
    <div className="min-h-screen">
      <Navbar/>
      <About/>
      <SearchBar/>
      <MovieInfo/>
      <Footer/>
    </div>
  );
}

export default App;
