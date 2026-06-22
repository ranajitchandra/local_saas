import type { LucideIcon } from "lucide-react";

type Props = {
    title: string;
    value: string | number;
    icon: LucideIcon;
};

export default function ProductStats({ title, value, icon: Icon }: Props) {
    return (
        <div className=" bg-card border rounded-2xl p-4 md:p-5">
            <p className="text-xs uppercase text-muted-foreground mb-2">
                {title}
            </p>
            <div className="flex items-center justify-between gap-2">

                <h3 className={`text-xl xl:text-2xl font-semibold ${title === "Low Stock" ? "text-red-500" : "text-muted-foreground"}`}>
                    {value}
                </h3>

                <div className={`size-10 rounded-lg bg-primary/10 text-primary ${title === "Low Stock" ? "bg-red-100 text-red-500" : "text-primary"} flex items-center justify-center`}>
                    <Icon className="size-5" />
                </div>
            </div>

        </div>
    );
}