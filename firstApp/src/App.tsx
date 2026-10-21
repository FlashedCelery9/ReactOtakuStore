import './App.css'

import Header from "./Components/Header/Header.tsx";
import Hero from "./Components/HeroBlock/Hero.tsx";
import ShopComponent from "./Components/ShopBlock/ShopComponent.tsx";
import AboutUsComponent from "./Components/AboutUsComponent/AboutUsComponent.tsx";
import FooterComponent from "./Components/Footer/footerComponent.tsx";

function App() {

  return (
      <>
        <Header />
        <div className="menu-line"></div>
        <div className="shadow"></div>
        <Hero />
          <div className="menu-line"></div>
          <div className="shadow"></div>
        <ShopComponent />
            <div className="menu-line"></div>
            <div className="shadow"></div>

          <AboutUsComponent />

          <FooterComponent />
      </>
  )
}

export default App
