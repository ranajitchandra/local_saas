import CustomersStatsCards from "./CustomersStatsCards";
import CustomersTable from "./CustomersTable";

export default function CustomersPage() {
    return (
        <div className="space-y-10">
            <CustomersStatsCards />
            <CustomersTable />
        </div>
    )
}
