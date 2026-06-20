import VendorRecentActivity from "./VendorRecentActivity";


export default function VendorsSection() {
    return (
        <section className="quickmart-theme">
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-[2fr_1fr]">
                
                <VendorRecentActivity />
            </div>
        </section>
    );
}