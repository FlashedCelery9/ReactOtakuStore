
import './App.css'
import logo from './assets/logo.svg'
import animeCategoryImg from '../public/categoriesImgs/anime.svg'
import axesuarsCategoryImg from '../public/categoriesImgs/axesuars.svg'
import esteticCategoryImg from '../public/categoriesImgs/estetic.svg'
import bleachMangaImg from '../public/itemIcons/bleach.jpg'
import narutoItemImg from '../public/itemIcons/naruto.png'
import narutoMangaItemImg from '../public/itemIcons/narutomanga.jpg'
import sasukeFigureItemImg from '../public/itemIcons/sasuke.jpg'
import aboutIcon1 from '../public/aboutIcons/smiling.svg'
import aboutIcon2 from '../public/aboutIcons/face.svg'
import aboutIcon3 from '../public/aboutIcons/smile.svg'
import aboutIcon4 from '../public/aboutIcons/original.svg'
import aboutIcon5 from '../public/aboutIcons/fast.svg'
import aboutIcon6 from '../public/aboutIcons/heart.svg'
import footerIcon1 from '../public/footerImgs/instagram.svg'
import footerIcon2 from '../public/footerImgs/telegram.svg'
import footerIcon3 from '../public/footerImgs/line.svg'
import footerIcon4 from '../public/footerImgs/tiktok.svg'
function App() {

  return (
      <>
        <header className="App-header">
          <nav className="navBar">
            <div className="navLogoBlock"></div>
            <img className="navLogo" src={logo} alt="OtakuStore"/>
            {/*<a className="navLogoBlock">OtakuStore</a>*/}
            <ul className="navMenu">
              <li><a href="#shop">Shop</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contacts">Contacts</a></li>
            </ul>
          </nav>
        </header>
        <div className="menu-line"></div>
        <div className="shadow"></div>
        <section className="heroPage">
          <div className="hero_textBlock">
            <h1 className="hero_h1">Anime <span className="period">・</span> Manga <tspan
                className="period">・</tspan> Asian aesthetic
            </h1>
            <div className="hero_desc">
              <p>OtakuStore is your place for anime-inspired fashion,
                accessories, and Japanese culture. Discover your favorite
                styles and express your otaku spirit!</p>
            </div>
              <a href="#shop" className="heroButton">Go shopping</a>

          </div>

        </section>
          <div className="menu-line"></div>
          <div className="shadow"></div>
        <section id="shop" className="shop">
            <div className="shop_container">
                <h2>OtakuStore shop</h2>
                <div className="categories_box">
                    <div className="categoryCard">
                        <img src={animeCategoryImg} alt=""/>
                        <p>Anime</p>
                    </div>
                    <div className="categoryCard">
                        <img src={esteticCategoryImg} alt=""/>
                        <p>Asian estetic</p>
                    </div>
                    <div className="categoryCard">
                        <img src={axesuarsCategoryImg} alt=""/>
                        <p>Axesuars</p>
                    </div>
                </div>
                <div className="shopCards">
                    <div className="itemCard">
                        <img src={bleachMangaImg} alt=""/>
                        <h3 className="itemTitle">Bleach manga</h3>
                        <p className="itemCost">200$</p>
                    </div>
                    <div className="itemCard">
                        <img src={narutoItemImg} alt=""/>
                        <h3 className="itemTitle">Naruto Figure</h3>
                        <p className="itemCost">999$</p>
                    </div>
                    <div className="itemCard">
                        <img src={sasukeFigureItemImg} alt=""/>
                        <h3 className="itemTitle">Sasuke Uchiha Figure</h3>
                        <p className="itemCost">1999$</p>
                    </div>
                    <div className="itemCard">
                        <img src={bleachMangaImg} alt=""/>
                        <h3 className="itemTitle">Bleach manga</h3>
                        <p className="itemCost">200$</p>
                    </div>
                    <div className="itemCard">
                        <img src={narutoItemImg} alt=""/>
                        <h3 className="itemTitle">Naruto Figure</h3>
                        <p className="itemCost">999$</p>
                    </div>
                    <div className="itemCard">
                        <img src={narutoMangaItemImg} alt=""/>
                        <h3 className="itemTitle">Naruto manga</h3>
                        <p className="itemCost">99$</p>

                    </div>
                    <div className="itemCard">
                        <img src={narutoItemImg} alt=""/>
                        <h3 className="itemTitle">Naruto Figure</h3>
                        <p className="itemCost">999$</p>
                    </div>
                    <div className="itemCard">
                        <img src={bleachMangaImg} alt=""/>
                        <h3 className="itemTitle">Bleach manga</h3>
                        <p className="itemCost">200$</p>
                    </div>
                    <div className="itemCard">
                        <img src={narutoItemImg} alt=""/>
                        <h3 className="itemTitle">Naruto Figure</h3>
                        <p className="itemCost">999$</p>
                    </div>
                    <div className="itemCard">
                        <img src={sasukeFigureItemImg} alt=""/>
                        <h3 className="itemTitle">Sasuke Uchiha Figure</h3>
                        <p className="itemCost">1999$</p>
                    </div>
                    <div className="itemCard">
                        <img src={bleachMangaImg} alt=""/>
                        <h3 className="itemTitle">Bleach manga</h3>
                        <p className="itemCost">200$</p>
                    </div>
                    <div className="itemCard">
                        <img src={narutoItemImg} alt=""/>
                        <h3 className="itemTitle">Naruto Figure</h3>
                        <p className="itemCost">999$</p>
                    </div>
                    <div className="itemCard">
                        <img src={narutoMangaItemImg} alt=""/>
                        <h3 className="itemTitle">Naruto manga</h3>
                        <p className="itemCost">99$</p>

                    </div>
                    <div className="itemCard">
                        <img src={narutoItemImg} alt=""/>
                        <h3 className="itemTitle">Naruto Figure</h3>
                        <p className="itemCost">999$</p>
                    </div>
                </div>
            </div>
            <div className="menu-line"></div>
            <div className="shadow"></div>
        </section>
          <section id="about" className="about">
              <div className="aboutContainer">
                  <h2>About Us</h2>
                  <div className="aboutBlock">
                      <p>Welcome to OtakuStore!

                          We are a small online shop for anime and Japanese culture fans.
                          Our goal is to bring a little piece of Japan to your home.
                          Here, you can find products inspired by your favorite anime, manga, and Japanese culture.
                      </p>
                      <p>We started our journey in 2023, and we are happy to share our passion with you.
                          Whether you are looking for something special for yourself or a gift for a friend, OtakuStore is here for you.
                      </p>
                      <p>You can place an order directly on our website or contact us if you are looking for something special</p>
                      <p>Thank you for being part of our journey!</p>
                      <div className="aboutEmogies">
                          <img src={aboutIcon1} alt=""/>
                          <img src={aboutIcon2} alt=""/>
                          <img src={aboutIcon3} alt=""/>
                      </div>
                      <div className="aboutFavorite">
                          <div className="favorite_item">
                              <p>Original items</p>
                              <img src={aboutIcon4} alt=""/>
                          </div>
                          <div className="favorite_item">
                              <p>Fast Shipping</p>
                              <img src={aboutIcon5} alt=""/>
                          </div>
                          <div className="favorite_item">
                              <p>Fan service</p>
                              <img src={aboutIcon6} alt=""/>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="menu-line"></div>
              <div className="shadow"></div>
          </section>
          <footer>
              <div className="sm_buttons">
                  <a href=""><img src={footerIcon1} alt=""/></a>
                  <a href=""><img src={footerIcon2} alt=""/></a>
                  <a href=""><img src={footerIcon3} alt=""/></a>
                  <a href=""><img src={footerIcon4} alt=""/></a>


              </div>
              <div className="driver"></div>
              <div className="footer_menu">
                  <div className="footer_menu_element">
                      <a href="">About Us</a>
                  </div>
                  <p>|</p>
                  <div className="footer_menu_element">
                      <a href="">Payment and Shipping</a>
                  </div>
                  <p>|</p>
                  <div className="footer_menu_element">
                      <a href="">Contacts</a>
                  </div>
              </div>
              <p className="powerby">© 2026 Otaku Store — by FlashedCelery9</p>
          </footer>
      </>
  )
}

export default App
