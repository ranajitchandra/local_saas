import type { AddressForm } from "@/types/clientProfile";
import { useForm } from "react-hook-form";


export default function Addresses() {
    const { register, handleSubmit, reset } = useForm<AddressForm>({
        defaultValues: {
            label: "Home",
            street: "221B Baker Street",
            city: "London",
            country: "United Kingdom",
            zipCode: "NW16XE",
        },
    });

    const onSubmit = (data: AddressForm) => {
        console.log(data);
        reset(data);
    };

    return (
        <div className="bg-card border rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6">
                Addresses
            </h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid md:grid-cols-2 gap-4"
            >
                <input
                    {...register("label")}
                    placeholder="Label"
                    className="border bg-background rounded-lg p-3"
                />

                <input
                    {...register("street")}
                    placeholder="Street"
                    className="border bg-background rounded-lg p-3"
                />

                <input
                    {...register("city")}
                    placeholder="City"
                    className="border bg-background rounded-lg p-3"
                />

                <input
                    {...register("country")}
                    placeholder="Country"
                    className="border bg-background rounded-lg p-3"
                />

                <input
                    {...register("zipCode")}
                    placeholder="Zip Code"
                    className="border bg-background rounded-lg p-3"
                />

                <button
                    className="bg-primary text-primary-foreground rounded-lg px-4 py-3"
                >
                    Save Address
                </button>
            </form>
        </div>
    );
}