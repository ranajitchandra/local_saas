import { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import type { Product, ProductForm } from "@/types/inventory";


type Props = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    initialData?: Product | null;
    onSubmit: (data: ProductForm) => void;
};

const defaultValues: ProductForm = {
    image: "",
    name: "",
    sku: "",
    category: "",
    price: 0,
    stock: 0,
};

export default function InventoryAddEdit({
    open,
    onOpenChange,
    initialData,
    onSubmit,
}: Props) {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        watch,
        formState: { errors },
    } = useForm<ProductForm>({
        defaultValues,
    });

    useEffect(() => {
        if (initialData) {
            reset({
                image: initialData.image,
                name: initialData.name,
                sku: initialData.sku,
                category: initialData.category,
                price: initialData.price,
                stock: initialData.stock,
            });
        } else {
            reset(defaultValues);
        }
    }, [initialData, reset]);

    const submitHandler = (
        data: ProductForm
    ) => {
        onSubmit(data);
        onOpenChange(false);
    };

    return (
        <Dialog
            open={open}
            onOpenChange={onOpenChange}
        >
            <DialogContent
                className="
                    quickmart-theme
                    bg-card
                    text-card-foreground
                    sm:max-w-2xl
                "
            >
                <DialogHeader>
                    <DialogTitle>
                        {initialData
                            ? "Edit Product"
                            : "Add Product"}
                    </DialogTitle>

                    <DialogDescription>
                        Manage product details.
                    </DialogDescription>
                </DialogHeader>

                <form
                    onSubmit={handleSubmit(
                        submitHandler
                    )}
                    className="
                        grid
                        gap-5
                        md:grid-cols-2
                    "
                >
                    {/* Image URL */}
                    <div className="space-y-2 md:col-span-2">
                        <label className="text-sm font-medium">
                            Product Image URL
                        </label>

                        <Input
                            placeholder="https://..."
                            className="
                                bg-background
                            "
                            {...register(
                                "image",
                                {
                                    required:
                                        "Image is required",
                                }
                            )}
                        />

                        {errors.image && (
                            <p className="text-sm text-destructive">
                                {
                                    errors.image
                                        .message
                                }
                            </p>
                        )}
                    </div>

                    {/* Product Name */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Product Name
                        </label>

                        <Input
                            className="bg-background"
                            {...register(
                                "name",
                                {
                                    required:
                                        "Name is required",
                                }
                            )}
                        />

                        {errors.name && (
                            <p className="text-sm text-destructive">
                                {
                                    errors.name
                                        .message
                                }
                            </p>
                        )}
                    </div>

                    {/* SKU */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            SKU
                        </label>

                        <Input
                            className="bg-background"
                            {...register(
                                "sku",
                                {
                                    required:
                                        "SKU is required",
                                }
                            )}
                        />

                        {errors.sku && (
                            <p className="text-sm text-destructive">
                                {
                                    errors.sku
                                        .message
                                }
                            </p>
                        )}
                    </div>

                    {/* Category */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Category
                        </label>

                        <Select
                            value={watch(
                                "category"
                            )}
                            onValueChange={(
                                value
                            ) =>
                                setValue(
                                    "category",
                                    value
                                )
                            }
                        >
                            <SelectTrigger className="bg-background">
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>

                            <SelectContent className="quickmart-theme">
                                <SelectItem value="Electronics">
                                    Electronics
                                </SelectItem>

                                <SelectItem value="Apparel">
                                    Apparel
                                </SelectItem>

                                <SelectItem value="Home">
                                    Home
                                </SelectItem>

                                <SelectItem value="Lifestyle">
                                    Lifestyle
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Price */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Price
                        </label>

                        <Input
                            type="number"
                            step="0.01"
                            className="bg-background"
                            {...register(
                                "price",
                                {
                                    valueAsNumber: true,
                                    min: 0,
                                }
                            )}
                        />
                    </div>

                    {/* Stock */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium">
                            Stock
                        </label>

                        <Input
                            type="number"
                            className="bg-background"
                            {...register(
                                "stock",
                                {
                                    valueAsNumber: true,
                                    min: 0,
                                }
                            )}
                        />
                    </div>

                    {/* Preview */}
                    {watch("image") && (
                        <div className="md:col-span-2">
                            <img
                                src={watch(
                                    "image"
                                )}
                                alt="Preview"
                                className="
                                    h-32
                                    w-32
                                    rounded-xl
                                    object-cover
                                    border
                                "
                            />
                        </div>
                    )}

                    {/* Footer */}
                    <div className="md:col-span-2 flex justify-end gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() =>
                                onOpenChange(
                                    false
                                )
                            }
                        >
                            Cancel
                        </Button>

                        <Button
                            type="submit"
                            className="
                                bg-primary
                                text-primary-foreground
                            "
                        >
                            {initialData
                                ? "Update Product"
                                : "Add Product"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
}