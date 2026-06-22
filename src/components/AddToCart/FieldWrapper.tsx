
interface FieldWrapperProps {
    label: string;
    icon: React.ElementType;
    error?: string;
    children: React.ReactNode;
}

export default function FieldWrapper({
    label,
    icon: Icon,
    error,
    children,
}: FieldWrapperProps) {
    return (
        <div>
            <label className="block mb-1.5 text-xs font-medium text-muted-foreground">
                {label}
            </label>

            <div className="relative">
                <Icon className="absolute left-3 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                {children}
            </div>

            {error && (
                <p className="mt-1 text-[11px] text-destructive">
                    {error}
                </p>
            )}
        </div>
    );
}