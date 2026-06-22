import { settingsMenus as _settingsMenus } from "@/data/dashboard/settings";
import type { SettingMenu } from "@/types/dashboard/settings";
import { NavLink } from "react-router";
const settingsMenus = _settingsMenus as SettingMenu[];

export default function SettingsSidebar() {
    return (
        <aside className="w-full lg:w-60">
            <div className="rounded-2xl border bg-card p-3">
                <div className="flex flex-row lg:flex-col items-center lg:items-start justify-between space-y-1">
                    {settingsMenus.map((menu) => {
                        const Icon = menu.icon;

                        return (
                            <NavLink
                                key={menu.id}
                                to={menu.path}
                                className={({ isActive }) =>
                                    `w-fit lg:w-full flex flex-col lg:flex-row items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200
                                    ${isActive
                                        ? "bg-primary text-primary-foreground shadow-sm"
                                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <Icon className={`h-5 w-5 lg:h-4 lg:w-4 ${isActive ? "text-primary-foreground" : ""}`} />
                                        <span className="hidden lg:block"> {menu.label} </span>
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