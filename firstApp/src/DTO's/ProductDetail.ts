
export interface ProductDetail {
    id: number;
    title: string;
    description: string;
    price: number;
    imagesUrls: string[];
    category: string | null;
    discount: number;
    amount: number;
}