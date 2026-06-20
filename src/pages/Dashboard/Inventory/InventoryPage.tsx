import { AlertTriangle, Ban, Package, Store } from "lucide-react";
import ProductStats from "./ProductStats";
import InventoryList from "./InventoryList";
import InventoryTipAlert from "./InventoryTipAlert";

export default function InventoryPage() {


    return (
        <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-5">
                <ProductStats
                    title="Total Products"
                    value="1,284"
                    icon={Package}
                />

                <ProductStats
                    title="Low Stock"
                    value="12"
                    icon={AlertTriangle}
                />

                <ProductStats
                    title="Out Of Stock"
                    value="5"
                    icon={Ban}
                />

                <ProductStats
                    title="Active Vendors"
                    value="42"
                    icon={Store}
                />
            </div>

            <InventoryList />
            <InventoryTipAlert />
        </div>
    )
}
