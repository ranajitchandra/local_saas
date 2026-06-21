import { ShieldCheck } from "lucide-react";

type Role = {
    id: string;
    role: string;
    users: number;
    access: string;
};

const roles: Role[] = [
    {
        id: "1",
        role: "Super Admin",
        users: 2,
        access: "Full System Access",
    },
    {
        id: "2",
        role: "Operations Manager",
        users: 8,
        access: "Orders & Vendors",
    },
    {
        id: "3",
        role: "Finance Manager",
        users: 4,
        access: "Payments & Reports",
    },
    {
        id: "4",
        role: "Support Agent",
        users: 12,
        access: "Customer Support",
    },
];

export default function RolePermissions() {
    return (
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-primary" />

                <h2 className="text-lg font-semibold">
                    Role Permissions
                </h2>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b">
                            <th className="px-4 py-3 text-left text-sm font-medium">
                                Role
                            </th>

                            <th className="px-4 py-3 text-left text-sm font-medium">
                                Users
                            </th>

                            <th className="px-4 py-3 text-left text-sm font-medium">
                                Access Scope
                            </th>

                            <th className="px-4 py-3 text-right text-sm font-medium">
                                Action
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {roles.map((role) => (
                            <tr
                                key={role.id}
                                className="border-b last:border-none"
                            >
                                <td className="px-4 py-4 font-medium">
                                    {role.role}
                                </td>

                                <td className="px-4 py-4">
                                    {role.users}
                                </td>

                                <td className="px-4 py-4 text-muted-foreground">
                                    {role.access}
                                </td>

                                <td className="px-4 py-4 text-right">
                                    <button className="rounded-lg border px-4 py-2 text-sm">
                                        Edit
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}