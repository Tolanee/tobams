
import AvailableHotels from './components/AvailableHotels';
import ExclusiveBrands from './components/ExclusiveBrands';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import TrendingBrands from './components/TrendingBrands';
import TrendingHotels from './components/TrendingHotels';

function App() {
 
  return (
    <>
     <Header/>
     <Hero/>
     <TrendingHotels/>
     <TrendingBrands/>
     <ExclusiveBrands/>
     <AvailableHotels/>
     <Testimonials/>
     <Footer/>
    </>
  )
}

export default App
