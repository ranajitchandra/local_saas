import { AlertTriangle, Ban, Package, Store } from "lucide-react";
import ProductStats from "./ProductStats";
import InventoryList from "./InventoryList";

export default function InventoryPage() {


    return (
        <div>
            <div className="grid grid-cols-4 gap-5">
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

        </div>
    )
}
