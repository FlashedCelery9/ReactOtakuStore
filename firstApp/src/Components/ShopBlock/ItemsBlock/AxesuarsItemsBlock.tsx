import "../ShopComponent.css"
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import type {ShopProduct} from "../../../DTO's/ShopProduct.ts";
import {useEffect, useState} from "react";
import ItemDetail from "../ItemDetailComponent/itemDetail.tsx";
import api from "../../../axios/axiosSettings.ts";
// import {useRef, useState} from "react";



function isDiscount(discount?: number) {
    if(discount === undefined) { return false }
    else if(discount !==null || discount > 0) {
        return true;
    }
    return false;
}
function getPrice(item: ShopProduct) {
    if(item.discount === undefined || item.discount === null) { return item.price }
    return item.price - item.discount;
}

function AxesuarsItemsBlock() {
    // const productRef = useRef<HTMLElement>(null);
    const [products, setProducts] = useState<ShopProduct[]>([]);
    useEffect(() => {
        api
            .get<ShopProduct[]>(`/products/category?category=axesuars`)
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error: unknown) => {
                console.error(error);
            })
    }, [])
    const [details, setDetails] = useState<boolean>(false);
    const [currentId, setCurrentId] = useState(0);
    return (
        <>
            {/*<div className={twMerge(clsx("h-0 w-0 md:invisible m-0", menuIsOpen && "md:visible w-auto p-5 bg-zinc-500 justify-center items-center justify-self-center"))}>*/}
            {/*    <input ref={productRef} type="number" placeholder="Pleace enter number"/>*/}
            {/*    <button>Add discount</button>*/}
            {/*</div>*/}
            <div className={twMerge(clsx("shopCards", products.length === 0 && "md:invisible h-0 w-0"))}>
                {products.map((products)=>(
                    <div onClick={() => {
                        setDetails(true);
                        setCurrentId(products.id)
                        console.log("Click " + products.id );

                    }} className="itemCard" key={products.id}>
                        <img src={products.imgUrl} alt=""/>
                        <h3 className="text-amber-50 pt-5">{products.title}</h3>
                        <p className={isDiscount(products.discount) ? "text-amber-500" : "text-amber-300"}><del className="text-gray-400">{isDiscount(products.discount) ? String(products.price)+"€" : null}</del> {getPrice(products)} €</p>
                        <p className={products.amount > 0 ? "text-green-400" : "text-red-500"}>{products.amount > 0 ? "In stock" : "Sold out"}</p>
                    </div>
                ))}
            </div>
            <ItemDetail id={currentId} details={details} setDetails={setDetails}/>
        </>
    )
}
export default AxesuarsItemsBlock