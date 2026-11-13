import {createBrowserRouter} from "react-router";
import ShopItems from "./Components/ShopBlock/ItemsBlock/ItemsBlock.tsx";
import EsteticShopItems from "./Components/ShopBlock/ItemsBlock/EsteticItemsBlock.tsx";
import App from "./App.tsx";
import ShopComponent from "./Components/ShopBlock/ShopComponent.tsx";
import AxesuarsItemsBlock from "./Components/ShopBlock/ItemsBlock/AxesuarsItemsBlock.tsx";
import AnimeItemsBlock from "./Components/ShopBlock/ItemsBlock/AnimeItemsBlock.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                element: <ShopComponent/>,
                children: [
                    {
                        index: true,
                        element: <ShopItems/>
                    },
                    {
                        path: "/products",
                        element: <ShopItems />
                    },
                    {
                        path: "/products/estetic",
                        element: <EsteticShopItems/>,
                    },
                    {
                        path: "/products/anime",
                        element: <AnimeItemsBlock/>,
                    },
                    {
                        path: "/products/axesuars",
                        element: <AxesuarsItemsBlock/>,
                    },
                ]
            }
        ],
    }
        ]
);

export default router;