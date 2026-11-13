import "./ShopComponent.css";


import animeCategoryImg from "./ShopImgs/categoriesImgs/anime.svg";
import esteticCategoryImg from "./ShopImgs/categoriesImgs/estetic.svg";
import axesuarsCategoryImg from "./ShopImgs/categoriesImgs/axesuars.svg";
import {Suspense} from "react";
import {Outlet, useNavigate} from "react-router";



// const productsEmpty: shopItem[] = []; //Перевірка на повідомлення при відсутності товарів ПУНКТ.7
// const products: shopItem[] = [
//     {
//         id: 2,
//         name: "Bleach manga",
//         description: "shopItem",
//         price: 222,
//         inStock: true, //Зміна для перевірки повідомлення про наявність!!!!!!!!
//         discount: 100,
//         category: "shopItem",
//         imageUrl: bleachMangaImg,
//     },
//     {
//         id: 3,
//         name: "Naruto Figure",
//         description: "shopItem",
//         price: 2222,
//         category: "shopItem",
//         imageUrl: narutoItemImg,
//     },
//     {
//         id: 4,
//         name: "Sasuke Uchiha Figure",
//         description: "shopItem",
//         price: 9999,
//         category: "shopItem",
//         imageUrl: sasukeFigureItemImg,
//     },
//     {
//         id: 5,
//         name: "Naruto manga",
//         description: "shopItem",
//         price: 222,
//         category: "shopItem",
//         imageUrl: narutoMangaItemImg,
//     },
//     {
//         id: 6,
//         name: "Sasuke Uchiha Figure",
//         description: "shopItem",
//         price: 9999,
//         category: "shopItem",
//         imageUrl: sasukeFigureItemImg,
//     },
//     {
//         id: 7,
//         name: "Naruto manga",
//         description: "shopItem",
//         price: 222,
//         category: "shopItem",
//         imageUrl: narutoMangaItemImg,
//     },
//     {
//         id: 8,
//         name: "Sasuke Uchiha Figure",
//         description: "shopItem",
//         price: 9999,
//         category: "shopItem",
//         imageUrl: sasukeFigureItemImg,
//     },
//     {
//         id: 9,
//         name: "Naruto manga",
//         description: "shopItem",
//         price: 222,
//         category: "shopItem",
//         imageUrl: narutoMangaItemImg,
//     },
//     {
//         id: 10,
//         name: "Sasuke Uchiha Figure",
//         description: "shopItem",
//         price: 9999,
//         category: "shopItem",
//         imageUrl: sasukeFigureItemImg,
//     },
//     {
//         id: 11,
//         name: "Naruto manga",
//         description: "shopItem",
//         price: 222,
//         category: "shopItem",
//         imageUrl: narutoMangaItemImg,
//     },
//
// ];

function ShopComponent() {
    const navigate = useNavigate();

    return (
        <>
            <section id="shop" className="shop">
                <nav className="shop_container">
                    <h2>OtakuStore shop</h2>
                    <nav className="categories_box">
                        <div onClick={() => navigate("/products/anime")} className="categoryCard">
                            <img src={animeCategoryImg} alt=""/>
                            <p>Anime</p>
                        </div>
                        <div onClick={() => navigate("/products/estetic")} className="categoryCard hover:cursor-pointer">
                            <img src={esteticCategoryImg} alt=""/>
                            <p>Asian estetic</p>
                        </div>
                        <div onClick={() => navigate("/products/axesuars")} className="categoryCard">
                            <img src={axesuarsCategoryImg} alt=""/>
                            <p>Axesuars</p>
                        </div>

                    </nav>
                    <Suspense fallback={<div>Loading products...</div>}>
                        <Outlet/>
                    </Suspense>
                </nav>
            </section>
        </>
    )
}

export default ShopComponent;