import { user as _user } from "@/data/clientProfile";
import type { UserProfile } from "@/types/clientProfile";
const user = _user as UserProfile;
import { useForm } from "react-hook-form";
import StatCard from "./StatCard";

type FormValues = {
    fullName: string;
    email: string;
    phone: string;
    language: string;
};

const PersonalInfo = () => {
    const {
        register,
        handleSubmit,
    } = useForm<FormValues>({
        defaultValues: user,
    });

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (
        <>
            <div className="bg-card border rounded-xl p-8">

                <div className="flex justify-between mb-8">
                    <h1 className="text-2xl md:text-3xl font-bold">
                        Personal Information
                    </h1>

                    <button className="bg-primary text-primary-foreground px-5 py-2 rounded-lg">
                        Save
                    </button>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid md:grid-cols-2 gap-5"
                >
                    <input
                        {...register("fullName")}
                        className="border bg-background p-3 rounded-lg"
                    />

                    <input
                        {...register("email")}
                        className="border bg-background p-3 rounded-lg"
                    />

                    <input
                        {...register("phone")}
                        className="border bg-background p-3 rounded-lg"
                    />

                    <input
                        {...register("language")}
                        className="border bg-background p-3 rounded-lg"
                    />
                </form>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
                <StatCard
                    title="Loyalty Points"
                    value="2,450"
                    subtitle="$24.50 equivalent"
                />

                <StatCard
                    title="Active Orders"
                    value="3"
                    subtitle="Next delivery tomorrow"
                />

                <StatCard
                    title="Total Savings"
                    value="$412"
                    subtitle="Using QuickMart Prime"
                />
            </div>
        </>
    );
};

export default PersonalInfo;