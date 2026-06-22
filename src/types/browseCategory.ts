export interface BrowseCategoryItem {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
}

export type CategoryCardProps = {
    item: BrowseCategoryItem;
};