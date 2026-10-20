import "./footerComponent.css"
import footerIcon1 from "./footerImgs/instagram.svg";
import footerIcon2 from "./footerImgs/telegram.svg";
import footerIcon3 from "./footerImgs/line.svg";
import footerIcon4 from "./footerImgs/tiktok.svg";

function FooterComponent() {
    return (
        <>
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

export default FooterComponent;