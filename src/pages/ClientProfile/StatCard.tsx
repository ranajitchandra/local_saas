type StatCardProps = {
    title: string;
    value: string;
    subtitle?: string;
};

export default function StatCard({
    title,
    value,
    subtitle,
}: StatCardProps) {
    return (
        <div className="bg-card border rounded-xl p-6">
            <h3 className="text-muted-foreground">
                {title}
            </h3>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mt-3">
                {value}
            </h2>

            {subtitle && (
                <p className="text-sm text-muted-foreground mt-2">
                    {subtitle}
                </p>
            )}
        </div>
    );
}