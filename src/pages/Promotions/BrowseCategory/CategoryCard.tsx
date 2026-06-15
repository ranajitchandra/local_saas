type CategoryCardProps = {
    item: {
        id: number;
        title: string;
        subtitle: string;
        description: string;
        image: string;
    };
};

export function CategoryCard({ item }: CategoryCardProps) {
    return (
        <div className="group relative h-[280px] overflow-hidden rounded-3xl">
            <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="inline-flex rounded-md bg-primary px-3 py-1 text-[11px] font-bold tracking-wider text-primary-foreground">
                    {item.subtitle}
                </span>

                <h3 className="mt-3 text-3xl font-bold text-white">
                    {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/80">
                    {item.description}
                </p>
            </div>
        </div>
    );
}