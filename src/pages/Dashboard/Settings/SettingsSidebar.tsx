import { settingsMenus } from "@/Mock_Data/Dashboard/settings";
import { NavLink } from "react-router";

export default function SettingsSidebar() {
    return (
        <aside className="w-full lg:w-72">
            <div className="rounded-2xl border bg-card p-3">
                <div className="space-y-1">
                    {settingsMenus.map((menu) => {
                        const Icon = menu.icon;

                        return (
                            <NavLink
                                key={menu.id}
                                to={menu.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200
                                    ${isActive
                                        ? "bg-primary text-primary-foreground shadow-sm"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <Icon className={`h-4 w-4 ${isActive ? "text-primary-foreground" : ""}`} />
                                        <span className="hidden md:block"> {menu.label} </span>
                                    </>
                                )}
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}