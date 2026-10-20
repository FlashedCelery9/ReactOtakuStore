import "../ShopComponent.css"
import bleachMangaImg from "../ShopImgs/itemIcons/bleach.jpg";
import narutoItemImg from "../ShopImgs/itemIcons/naruto.png";
import sasukeFigureItemImg from "../ShopImgs/itemIcons/sasuke.jpg";
import narutoMangaItemImg from "../ShopImgs/itemIcons/narutomanga.jpg";

function ShopItems(){
    return (
        <>
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
        </>
    )

}
export default ShopItems