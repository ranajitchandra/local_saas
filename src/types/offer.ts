export interface Offer {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    buttonText: string;
    size?: "large" | "small";
}