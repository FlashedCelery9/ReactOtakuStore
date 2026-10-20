import './Hero.css'

function Hero(){
    return (
        <>
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
        </>
    )
}

export default Hero