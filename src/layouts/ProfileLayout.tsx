

import { NavLink, Outlet } from "react-router";
import { profileMenus } from "./profileMenus";
import { user as _user } from "@/data/clientProfile";
import type { UserProfile } from "@/types/clientProfile";
const user = _user as UserProfile;



const ProfileLayout = () => {
    return (
        <div className="quickmart-theme min-h-screen bg-background text-foreground py-10">
            <div className="grid lg:grid-cols-[280px_1fr] gap-5">

                <aside className="w-full">

                    <div className="bg-card rounded-xl border p-5 flex gap-3 items-center">
                        <img
                            src={user.avatar}
                            className="w-16 h-16 rounded-full"
                        />

                        <div>
                            <h2 className="font-bold">
                                {user.fullName}
                            </h2>

                            <p className="text-muted-foreground text-sm">
                                Prime Member since {user.memberSince}
                            </p>
                        </div>
                    </div>

                    <div className="bg-card rounded-xl border p-5 mt-5 flex flex-row lg:flex-col justify-between space-y-2">
                        {profileMenus.map((item) => (
                            <NavLink
                                key={item.href}
                                to={item.href}
                                className={({ isActive }) =>
                                    `h-full flex items-center gap-3 px-4 py-3 rounded-lg transition
                                    ${isActive
                                        ? "bg-primary text-primary-foreground"
                                        : "hover:bg-muted"
                                    }`
                                }
                            >
                                <item.icon size={18} />
                                <span className="hidden lg:block">{item.title}</span>
                            </NavLink>
                        ))}
                    </div>
                </aside>

                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default ProfileLayout;