"use client"

import { useEffect, useState } from "react"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import type { Product } from "@/types/inventory"

interface Props {
    open: boolean
    onOpenChange: (open: boolean) => void
    onSave: (product: Product) => void
    product?: Product | null
}

export default function InventoryModal({
    open,
    onOpenChange,
    onSave,
    product,
}: Props) {
    const [form, setForm] = useState<Product>({
        id: Date.now(),
        name: "",
        sku: "",
        category: "",
        price: 0,
        stock: 0,
        image: "",
    })

    useEffect(() => {
        if (product) {
            setForm(product)
        }
    }, [product])

    const handleSubmit = () => {
        onSave(form)

        onOpenChange(false)

        setForm({
            id: Date.now(),
            name: "",
            sku: "",
            category: "",
            price: 0,
            stock: 0,
            image: "",
        })
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>
                        {product ? "Edit Product" : "Add Product"}
                    </DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <Input
                        placeholder="Product Name"
                        value={form.name}
                        onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                        }
                    />

                    <Input
                        placeholder="SKU"
                        value={form.sku}
                        onChange={(e) =>
                            setForm({ ...form, sku: e.target.value })
                        }
                    />

                    <Input
                        placeholder="Category"
                        value={form.category}
                        onChange={(e) =>
                            setForm({ ...form, category: e.target.value })
                        }
                    />

                    <Input
                        type="number"
                        placeholder="Price"
                        value={form.price}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                price: Number(e.target.value),
                            })
                        }
                    />

                    <Input
                        type="number"
                        placeholder="Stock"
                        value={form.stock}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                stock: Number(e.target.value),
                            })
                        }
                    />

                    <Input
                        placeholder="Image URL"
                        value={form.image}
                        onChange={(e) =>
                            setForm({
                                ...form,
                                image: e.target.value,
                            })
                        }
                    />

                    <Button
                        className="w-full bg-primary text-primary-foreground"
                        onClick={handleSubmit}
                    >
                        Save Product
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    )
}