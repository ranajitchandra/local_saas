import { Star } from "lucide-react";

export interface Vendor {
    id: number;
    initials: string;
    name: string;
    category: string;
    sales: string;
    rating: number;
}


export const vendors: Vendor[] = [
    {
        id: 1,
        initials: "LZ",
        name: "Luxe Zen",
        category: "Home Decor",
        sales: "$124,500",
        rating: 4.9,
    },
    {
        id: 2,
        initials: "TK",
        name: "Tech Knights",
        category: "Electronics",
        sales: "$98,200",
        rating: 4.8,
    },
    {
        id: 3,
        initials: "GF",
        name: "Green Fresh",
        category: "Groceries",
        sales: "$85,150",
        rating: 4.7,
    },
    {
        id: 4,
        initials: "UR",
        name: "Urban Rebel",
        category: "Fashion",
        sales: "$72,400",
        rating: 4.6,
    },
];

export default function TopPerformingVendors() {
    return (
        <div className="rounded-3xl border border-border bg-card p-5 md:p-6">
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold">
                    Top Performing Vendors
                </h2>

                <button className="font-semibold text-primary">
                    View All Vendors
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full min-w-160">
                    <thead>
                        <tr className="border-b border-border bg-muted">
                            <th className="px-4 py-4 text-left">
                                Vendor Name
                            </th>
                            <th className="px-4 py-4 text-left">
                                Category
                            </th>
                            <th className="px-4 py-4 text-left">
                                Total Sales
                            </th>
                            <th className="px-4 py-4 text-left">
                                Rating
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {vendors.map((vendor) => (
                            <tr
                                key={vendor.id}
                                className="border-b border-border"
                            >
                                <td className="px-4 py-5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 font-semibold text-primary">
                                            {vendor.initials}
                                        </div>

                                        <span className="font-semibold">
                                            {vendor.name}
                                        </span>
                                    </div>
                                </td>

                                <td className="px-4 py-5 text-muted-foreground">
                                    {vendor.category}
                                </td>

                                <td className="px-4 py-5 font-medium">
                                    {vendor.sales}
                                </td>

                                <td className="px-4 py-5">
                                    <div className="flex items-center gap-2 font-bold">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        {vendor.rating}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}