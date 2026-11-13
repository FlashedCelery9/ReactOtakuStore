import { useEffect, useState } from "react";
import type { ProductDetail } from "../../../DTO's/ProductDetail";
import api from "../../../axios/axiosSettings";

interface Props {
    id: number;
    details: boolean;
    setDetails: (value: boolean) => void;
}

export default function ItemDetail({ id, details, setDetails }: Props) {
    const [product, setProduct] = useState<ProductDetail>();

    useEffect(() => {
        if (!details) return;

        let cancelled = false;
        setProduct(undefined);

        api
            .get<ProductDetail>(`products/${id}`)
            .then((response) => {
                if (!cancelled) setProduct(response.data);
            })
            .catch((error) => {
                if (!cancelled) console.error(error);
            });

        return () => {
            cancelled = true;
        };
    }, [id, details]);

    if (!details || !product) return null;

    const hasDiscount = product.discount > 0;
    const finalPrice = Math.max(0, product.price - product.discount);
    const imageUrl = product.imagesUrls[0];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <article
                role="dialog"
                aria-modal="true"
                aria-label={product.title}
                className="relative grid w-full max-w-4xl overflow-hidden rounded-2xl border border-amber-400/20 bg-zinc-900 text-amber-50 shadow-2xl md:grid-cols-2"
            >
                <button
                    type="button"
                    onClick={() => setDetails(false)}
                    aria-label="Close product details"
                    className="absolute right-4 top-4 z-10 rounded-full bg-black/50 px-3 py-1 text-xl text-white hover:bg-black/80"
                >
                    ×
                </button>

                <div className="flex min-h-72 items-center justify-center bg-zinc-800 p-6">
                    {imageUrl ? (
                        <img
                            src={imageUrl}
                            alt={product.title}
                            className="max-h-96 w-full rounded-xl object-contain"
                        />
                    ) : (
                        <div className="text-zinc-400">No image available</div>
                    )}
                </div>

                <div className="flex flex-col p-6 md:p-8">
                    <div className="mb-4 flex flex-wrap items-center gap-2">
                        {product.category && (
                            <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm text-amber-300">
                {product.category}
              </span>
                        )}

                        <span
                            className={`rounded-full px-3 py-1 text-sm ${
                                product.amount > 0
                                    ? "bg-green-950 text-green-400"
                                    : "bg-red-950 text-red-400"
                            }`}
                        >
              {product.amount > 0 ? "In stock" : "Sold out"}
            </span>
                    </div>

                    <h2 className="text-2xl font-bold md:text-3xl">{product.title}</h2>

                    <p className="mt-4 flex-1 whitespace-pre-line leading-relaxed text-zinc-300">
                        {product.description}
                    </p>

                    <div className="mt-8 border-t border-zinc-700 pt-5">
                        <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-amber-400">
                {finalPrice.toFixed(2)} €
              </span>

                            {hasDiscount && (
                                <span className="text-lg text-zinc-500 line-through">
                  {product.price.toFixed(2)} €
                </span>
                            )}
                        </div>

                        {hasDiscount && (
                            <p className="mt-1 text-sm text-green-400">
                                You save {product.discount.toFixed(2)} €
                            </p>
                        )}
                    </div>
                </div>
            </article>
        </div>
    );
}