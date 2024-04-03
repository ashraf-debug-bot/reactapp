
import Navbar from './Navbar';
import './App.css';
import Carosel from './Carosel';
import About from './About';
import Top from './Top'
import Footer from './Footer';
import Banner from './Banner1';

import Products from './Products';
import Faq from './Faq';

function App() {

  return (
 
    <div className="App">
    <Top/>
     <Navbar/>
     <Carosel/>
     <About/>
     <Products/>
     <Banner/>
     <Faq/>
    
  
     <Footer/>
</div>
  );
}

export default App;

