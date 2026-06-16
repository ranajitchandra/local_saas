import { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import type { PaymentMethodForm } from "@/types/clientProfile";



type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;

    initialData?: PaymentMethodForm;

    onSubmit: (data: PaymentMethodForm) => void;
};

const defaultValues: PaymentMethodForm = {
    name: "",
    provider: "",
    accountNumber: "",
    isActive: true,
    isDefault: false,
};

export default function PaymentMethodModal({
    open,
    onOpenChange,
    initialData,
    onSubmit,
}: Props) {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
    } = useForm<PaymentMethodForm>({
        defaultValues,
    });

    useEffect(() => {
        if (initialData) {
            reset(initialData);
        } else {
            reset(defaultValues);
        }
    }, [initialData, reset]);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="quickmart-theme sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>
                        {initialData
                            ? "Edit Payment Method"
                            : "Add Payment Method"}
                    </DialogTitle>

                    <DialogDescription>
                        Manage your payment options.
                    </DialogDescription>
                </DialogHeader>

                <form
                    onSubmit={handleSubmit((data) => {
                        onSubmit(data);
                        onOpenChange(false);
                    })}
                    className="space-y-5"
                >
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Name
                        </label>

                        <Input
                            placeholder="bKash"
                            {...register("name")}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Provider
                        </label>

                        <Input
                            placeholder="Mobile Banking"
                            {...register("provider")}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Account Number
                        </label>

                        <Input
                            placeholder="+88017XXXXXXX"
                            {...register("accountNumber")}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <span>Active</span>

                        <Switch
                            checked={watch("isActive")}
                            onCheckedChange={(value) =>
                                setValue("isActive", value)
                            }
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <span>Default Method</span>

                        <Switch
                            checked={watch("isDefault")}
                            onCheckedChange={(value) =>
                                setValue("isDefault", value)
                            }
                        />
                    </div>

                    <div className="flex justify-end gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() =>
                                onOpenChange(false)
                            }
                        >
                            Cancel
                        </Button>

                        <Button type="submit">
                            {initialData
                                ? "Update"
                                : "Create"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}