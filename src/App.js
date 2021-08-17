
import './App.css';
import Header from './components/Header';
import Second from './components/Second';
import Selection  from './components/Selection';
import Banner from './components/Banner';
import Homepage from './components/Home';
import Box from './components/Box';
import Boxes from './components/Boxes';
import Bottom from './components/Bottom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
         <Header/>
         <Second/>
         <Selection/>
         <Banner/>
         <Homepage/>
         <Box/>
         <Boxes/>
         <Bottom/>
         <Footer/>
    </div>
  );
}

export default App;
