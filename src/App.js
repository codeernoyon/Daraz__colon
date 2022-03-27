import Banner from "./Component/Banner/Banner";
import CatagoriesNav from "./Component/Catagories__nav/Catagories__nav";
import Categories from "./Component/Categories/Categories";
import Collections from "./Component/Collections/Collections";
import FlashSale from "./Component/FlashSale/FlashSale";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import Hero from './Component/Hero_Section/Hero';
import JustForYou from "./Component/Just For You/JustForYou";
import Mall from "./Component/Mall/Mall";
import MostPopular from "./Component/Most Popular/MostPopular";
import './Global.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="section">
        <Hero />
        <Banner />
        <CatagoriesNav />
        <FlashSale />
        <Mall />
        <Collections />
        <Categories />
        <MostPopular />
        <JustForYou />
      </main>
      <Footer />
    </div>
  );
}

export default App;
