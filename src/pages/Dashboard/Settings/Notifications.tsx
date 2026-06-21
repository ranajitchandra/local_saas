import { notificationSettings } from "@/Mock_Data/Dashboard/settings";
import { Bell } from "lucide-react";

export default function Notifications() {
    return (
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Bell className="h-5 w-5 text-primary" />

                    <h2 className="font-semibold">
                        Notification Preferences
                    </h2>
                </div>

                <span className="rounded bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    GLOBAL OVERRIDES
                </span>
            </div>

            <div className="space-y-5">
                {notificationSettings.map((item) => (
                    <div
                        key={item.id}
                        className="border-b pb-5 last:border-none"
                    >
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                            <div>
                                <h3 className="font-medium">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>

                            <div className="flex gap-5">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        defaultChecked={
                                            item.email
                                        }
                                    />
                                    Email
                                </label>

                                {item.sms !==
                                    undefined && (
                                        <label className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                defaultChecked={
                                                    item.sms
                                                }
                                            />
                                            SMS
                                        </label>
                                    )}

                                {item.push !==
                                    undefined && (
                                        <label className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                defaultChecked={
                                                    item.push
                                                }
                                            />
                                            Push
                                        </label>
                                    )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}