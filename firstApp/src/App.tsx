import './App.css'

import Header from "./Components/Header/Header.tsx";
import Hero from "./Components/HeroBlock/Hero.tsx";
import AboutUsComponent from "./Components/AboutUsComponent/AboutUsComponent.tsx";
import FooterComponent from "./Components/Footer/footerComponent.tsx";
import {Suspense} from "react";
import {Outlet} from "react-router";
import ShopComponent from "./Components/ShopBlock/ShopComponent.tsx";

function App() {

  return (
      <>
          <Suspense>
              <Header />

              <Hero />
              <div className="menu-line"></div>
              <div className="shadow"></div>
          </Suspense>

          <Suspense fallback={<p>Loading...</p>}>
              <Outlet context={ShopComponent} />
              <div className="menu-line"></div>
              <div className="shadow"></div>
          </Suspense>

          <Suspense>
              <AboutUsComponent />
          </Suspense>

        <Suspense>
            <FooterComponent />
        </Suspense>
      </>
  )
}

export default App
