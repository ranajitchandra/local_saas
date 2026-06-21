import SettingsSidebar from "@/pages/Dashboard/Settings/SettingsSidebar";
import { Outlet } from "react-router";

export default function DashboardSettingsLayout() {
    return (
        <div className="quickmart-theme min-h-screen bg-background">
            <div className="w-full">
                <div className="flex flex-col gap-6 lg:flex-row">
                    <SettingsSidebar />

                    <div className="flex-1">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}