import "./AboutUsComponent.css";
import aboutIcon1 from "./aboutIcons/smiling.svg";
import aboutIcon2 from "./aboutIcons/face.svg";
import aboutIcon3 from "./aboutIcons/smile.svg";
import aboutIcon4 from "./aboutIcons/original.svg";
import aboutIcon5 from "./aboutIcons/fast.svg";
import aboutIcon6 from "./aboutIcons/heart.svg";

function AboutUsComponent() {
    return (
        <>
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
        </>
    )
}

export default AboutUsComponent;