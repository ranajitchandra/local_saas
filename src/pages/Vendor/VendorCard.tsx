import { Heart, Star } from "lucide-react";
import type { Vendor } from "@/types/vendor";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Props = {
    vendor: Vendor;
};

export default function VendorCard({
    vendor,
}: Props) {
    return (
        <div className="bg-card border rounded-2xl p-4 space-y-4">
            <div className="flex justify-between">
                <div className="flex gap-3">
                    <img
                        src={vendor.logo}
                        className="w-14 h-14 rounded-lg object-cover"
                    />

                    <div>
                        <h3 className="font-semibold">
                            {vendor.name}
                        </h3>

                        <div className="flex items-center gap-1 text-sm text-primary">
                            <Star className="size-4 fill-current" />
                            {vendor.rating}
                            <span className="text-muted-foreground">
                                ({vendor.reviews} reviews)
                            </span>
                        </div>
                    </div>
                </div>

                <Heart className="size-5 text-muted-foreground" />
            </div>

            <p className="text-sm text-muted-foreground">
                {vendor.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {vendor.tags.map((tag) => (
                    <Badge
                        key={tag}
                        variant="secondary"
                    >
                        {tag}
                    </Badge>
                ))}
            </div>

            <div>
                <p className="text-xs font-semibold mb-3 tracking-wide">
                    FEATURED PRODUCTS
                </p>

                <div className="grid grid-cols-3 gap-2">
                    {vendor.featuredProducts.map(
                        (img) => (
                            <img
                                key={img}
                                src={img}
                                className="aspect-square rounded-lg object-cover"
                            />
                        )
                    )}
                </div>
            </div>

            <Button
                variant="outline"
                className="w-full"
            >
                Visit Store
            </Button>
        </div>
    );
}