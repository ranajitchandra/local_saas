import DashboardStats from "./DashboardStats";
import OrdersTable from "./OrdersTable";
import SystemBanner from "./SystemBanner";



export default function OrdersPage() {
    return (
        <div className="quickmart-theme space-y-6">
            <DashboardStats />
            <OrdersTable />
            <SystemBanner />
        </div>
    )
}
