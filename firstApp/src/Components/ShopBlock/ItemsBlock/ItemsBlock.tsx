import "../ShopComponent.css"
import type {shopItem} from "../models/shopItem"
import img from "../ShopImgs/logo.svg"
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function isDiscount(discount?: number) {
    if(discount === undefined) { return false }
    else if(discount !==null || discount > 0) {
        return true;
    }
    return false;
}
let isSoldAll = true;
function getPrice(item: shopItem) {
    if(item.inStock === true){isSoldAll = false}
    if(item.discount === undefined || item.discount === null) { return item.price }
    return item.price - item.discount;
}

function ShopItems({ products }: { products: shopItem[] }) {
    return (
        <>
            <div className={twMerge(clsx("md:invisible h-0", isSoldAll && "md:visible h-auto flex justify-center justify-self-center items-center m-5 bg-gray-700 border-2 border-black w-100"))}>
                <p>All items are sold out. We're so sorry! Please try again tomorrow.</p>
                <img src={img} alt="" className="w-20 h-15 justify-self-end " />
            </div>
            <div className={twMerge(clsx("md:invisible h-0 w-0 border-0", products.length === 0 && "md:visible justify-self-center bg-gray-700 text-red-500 flex p-5 w-auto border-black border-2 justify-center items-center"))}>
                <p>No products</p>
            </div>
            <div className={twMerge(clsx("shopCards", products.length === 0 && "md:invisible h-0 w-0"))}>
                {products.map((products)=>(
                    <div className="itemCard" key={products.id}>
                        <img src={products.imageUrl} alt=""/>
                        <h3 className="text-amber-50 pt-5">{products.name}</h3>
                        <p className={isDiscount(products.discount) ? "text-amber-500" : "text-amber-300"}><del className="text-gray-400">{isDiscount(products.discount) ? String(products.price)+"€" : null}</del> {getPrice(products)} €</p>
                        <p className={products.inStock ? "text-green-400" : "text-red-500"}>{products.inStock ? "In stock" : "Sold out"}</p>
                    </div>
                ))}
            </div>
        </>
    )
}
export default ShopItems