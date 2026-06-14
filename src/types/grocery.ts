export type GroceryCategoryType = "Produce" | "Dairy" | "Bakery" | "Beverages";

export interface GroceryProduct {
  id: string;
  name: string;
  category: GroceryCategoryType;
  rating: number;
  reviewsCount?: number;
  price: string;
  unit?: string;
  image: string;
}
