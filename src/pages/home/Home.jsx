import './home.css';
import Navbar from '../../components/navbar/Navbar';
import { Header } from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import Properties from '../../components/property/Properties'
import FeaturedProperties from '../../components/propertyLists/FeaturedProperties'
import Bottom from '../../components/bottom/Bottom'
import Footer from '../../components/footer/Footer';

export const Home = () => {
  return (
      <div><Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">See available property type</h1>
        <Properties/>
        <FeaturedProperties />
        <Bottom />
        <Footer/>
      </div>
      </div>
  )
}

export default Home 