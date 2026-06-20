

export default function PaymentCard({ icon, title, value, active }: { icon: React.ReactNode; title: string; value?: string; active?: boolean }) {

    return (
        <div
            className={`flex items-center gap-3 rounded-xl border p-4 ${active
                ? "border-primary bg-primary/5"
                : ""
                }`}
        >
            {icon}

            <span className="font-medium">
                {title}
            </span>

            {value && (
                <span className="ml-auto text-sm font-semibold">
                    {value}
                </span>
            )}
        </div>
    );
}