import type { DealProduct } from "@/types/product";
import { Heart } from "lucide-react";

interface DealCardProps {
    product: DealProduct;
}

export function DealCard({ product }: DealCardProps) {
    return (
        <article className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="relative">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-56 w-full object-cover"
                />

                <span className="absolute left-3 top-3 rounded bg-red-600 px-2 py-1 text-xs font-bold text-white">
                    {product.discount}% OFF
                </span>

                <button className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90">
                    <Heart className="h-5 w-5 text-muted-foreground" />
                </button>
            </div>

            <div className="space-y-2 p-4">
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {product.category}
                </p>

                <h3 className="line-clamp-1 text-lg font-medium text-foreground">
                    {product.title}
                </h3>

                <div className="flex items-center gap-2">
                    <span className="font-semibold text-primary">
                        ${product.price.toFixed(2)}
                    </span>

                    <span className="text-sm text-muted-foreground line-through">
                        ${product.oldPrice.toFixed(2)}
                    </span>
                </div>

                <button className="mt-2 w-full rounded-lg border border-primary bg-background py-2.5 font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">
                    Add to Cart
                </button>
            </div>
        </article>
    );
}