import About from './sections/About';
import BibleSection from './sections/BibleSection';
import Footer from './sections/Footer';
import Header from './sections/Header';
import Hero from './sections/Hero';
import LocationPrayer from './sections/LocationPrayer';
import Ministries from './sections/Ministries';
import SermonLibrary from './sections/SermonLibrary';
import SermonStudio from './sections/SermonStudio';
import WorshipSection from './sections/WorshipSection';

export default function App(){
  return <div className="min-h-screen bg-[#FFFBF7] text-[#0F0F0F]">
    <Header/>
    <Hero/>
    <About/>
    <Ministries/>
    <BibleSection/>
    <WorshipSection/>
    <SermonStudio/>
    <SermonLibrary/>
    <LocationPrayer/>
    <Footer/>
  </div>
}
