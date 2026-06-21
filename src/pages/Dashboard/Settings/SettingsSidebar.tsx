import { settingsMenus } from "@/Mock_Data/Dashboard/settings";
import { NavLink } from "react-router";

export default function SettingsSidebar() {
    return (
        <aside className="w-full lg:w-64">
            <div className="space-y-1">
                {settingsMenus.map((menu) => (
                    <NavLink
                        key={menu.id}
                        to={menu.path}
                        className={({ isActive }) =>
                            `block rounded-lg px-4 py-3 text-sm transition-all
                            ${isActive
                                ? "bg-primary/10 text-primary font-medium"
                                : "hover:bg-muted"
                            }`
                        }
                    >
                        {menu.label}
                    </NavLink>
                ))}
            </div>
        </aside>
    );
}