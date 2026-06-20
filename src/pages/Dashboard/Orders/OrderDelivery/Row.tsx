

export default function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {

    return (
        <div className="flex items-center justify-between">
            <span
                className={
                    highlight
                        ? "font-semibold text-primary"
                        : "text-muted-foreground"
                }
            >
                {label}
            </span>

            <span
                className={
                    highlight
                        ? "font-bold text-primary"
                        : ""
                }
            >
                {value}
            </span>
        </div>
    );
}
