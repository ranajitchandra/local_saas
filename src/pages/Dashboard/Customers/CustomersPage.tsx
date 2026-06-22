import CustomersStatsCards from "./CustomersStatsCards";
import CustomersTable from "./CustomersTable";

export default function CustomersPage() {
    return (
        <div className="space-y-6">
            <CustomersStatsCards />
            <CustomersTable />
        </div>
    )
}
