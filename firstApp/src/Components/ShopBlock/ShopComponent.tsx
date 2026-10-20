import "./ShopComponent.css";
import animeCategoryImg from "./ShopImgs/categoriesImgs/anime.svg";
import esteticCategoryImg from "./ShopImgs/categoriesImgs/estetic.svg";
import axesuarsCategoryImg from "./ShopImgs/categoriesImgs/axesuars.svg";
import ShopItems from "./ItemsBlock/ItemsBlock.tsx";


function ShopComponent() {
    return (
        <>
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
                    <ShopItems />
                </div>
            </section>
        </>
    )
}

export default ShopComponent;