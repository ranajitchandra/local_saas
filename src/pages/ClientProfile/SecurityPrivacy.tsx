import type { SecurityForm } from "@/types/clientProfile";
import { useForm } from "react-hook-form";



export default function SecurityPrivacy() {
    const {
        register,
        handleSubmit,
    } = useForm<SecurityForm>();

    const onSubmit = (data: SecurityForm) => {
        console.log(data);
    };

    return (
        <div className="space-y-6">
            <div className="bg-card border rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-6">
                    Security & Privacy
                </h2>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                >
                    <input
                        type="password"
                        placeholder="Current Password"
                        {...register("currentPassword")}
                        className="w-full border rounded-lg p-3 bg-background"
                    />

                    <input
                        type="password"
                        placeholder="New Password"
                        {...register("newPassword")}
                        className="w-full border rounded-lg p-3 bg-background"
                    />

                    <input
                        type="password"
                        placeholder="Confirm Password"
                        {...register("confirmPassword")}
                        className="w-full border rounded-lg p-3 bg-background"
                    />

                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            {...register("twoFactor")}
                        />
                        Enable Two Factor Authentication
                    </label>

                    <button className="bg-primary text-primary-foreground px-4 py-3 rounded-lg">
                        Update Security
                    </button>
                </form>
            </div>

            <div className="bg-card border rounded-xl p-6">
                <h3 className="font-semibold mb-4">
                    Active Sessions
                </h3>

                <div className="space-y-3">
                    <div className="border rounded-lg p-4">
                        <p>Chrome on Windows</p>
                        <p className="text-sm text-muted-foreground">
                            Dhaka, Bangladesh
                        </p>
                    </div>

                    <div className="border rounded-lg p-4">
                        <p>Safari on iPhone</p>
                        <p className="text-sm text-muted-foreground">
                            New York, USA
                        </p>
                    </div>
                </div>

                <button className="mt-5 bg-destructive text-white px-4 py-2 rounded-lg">
                    Logout All Devices
                </button>
            </div>
        </div>
    );
}