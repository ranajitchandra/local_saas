import {
    KeyRound,
    Smartphone,
    Monitor,
} from "lucide-react";

type Session = {
    id: string;
    device: string;
    location: string;
    status: string;
};

const sessions: Session[] = [
    {
        id: "1",
        device: "MacBook Pro",
        location: "San Francisco, USA",
        status: "Current Session",
    },
    {
        id: "2",
        device: "iPhone 15 Pro",
        location: "California, USA",
        status: "Active",
    },
    {
        id: "3",
        device: "Windows PC",
        location: "Texas, USA",
        status: "Active",
    },
];

export default function SecurityAccess() {
    return (
        <div className="space-y-6">
            <div className="rounded-2xl border bg-card p-5 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                    <KeyRound className="h-5 w-5 text-primary" />

                    <h2 className="text-lg font-semibold">
                        Security Settings
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 items-center gap-5">
                    <div className="rounded-xl border p-4">
                        <h3 className="font-medium">
                            Two-Factor Authentication
                        </h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Extra security for administrator
                            accounts.
                        </p>

                        <button className="mt-4 rounded-lg bg-primary px-4 py-2 text-primary-foreground">
                            Enable 2FA
                        </button>
                    </div>

                    <div className="rounded-xl border p-4">
                        <h3 className="font-medium">
                            Password Policy
                        </h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Require strong passwords and
                            rotation.
                        </p>

                        <button className="mt-4 rounded-lg border px-4 py-2">
                            Configure
                        </button>
                    </div>
                </div>
            </div>

            <div className="rounded-2xl border bg-card p-5 shadow-sm">
                <div className="mb-6 flex items-center gap-3">
                    <Monitor className="h-5 w-5 text-primary" />

                    <h2 className="text-lg font-semibold">
                        Active Sessions
                    </h2>
                </div>

                <div className="space-y-4">
                    {sessions.map((session) => (
                        <div
                            key={session.id}
                            className="flex flex-col gap-4 rounded-xl border p-4 md:flex-row md:items-center md:justify-between"
                        >
                            <div className="flex items-center gap-4">
                                <div className="rounded-lg bg-primary/10 p-3">
                                    <Smartphone className="h-5 w-5 text-primary" />
                                </div>

                                <div>
                                    <h3 className="font-medium">
                                        {session.device}
                                    </h3>

                                    <p className="text-sm text-muted-foreground">
                                        {session.location}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                    {session.status}
                                </span>

                                {session.status !==
                                    "Current Session" && (
                                        <button className="rounded-lg border px-4 py-2 text-sm">
                                            Revoke
                                        </button>
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}