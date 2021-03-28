// import logo from './logo.svg';
// import './App.css';
import './app.scss';
import SearchEngine from './components/SearchEngine/SearchEngine';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='container'>
      <Header />
      <SearchEngine />
      <Footer />
    </div>
  );
}

export default App;