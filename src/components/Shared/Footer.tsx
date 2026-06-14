
import type { FooterLinkGroup } from "@/types/footer";
import {
    Globe,
    Share2,
    Image,
} from "lucide-react";

const footerLinks: FooterLinkGroup[] = [
    {
        title: "PLATFORM",
        links: [
            "About QuickMart",
            "Become a Vendor",
            "Partner Portal",
            "Careers",
        ],
    },
    {
        title: "CUSTOMER CARE",
        links: [
            "Help Center",
            "Shipping Info",
            "Returns & Refunds",
            "Order Tracking",
        ],
    },
    {
        title: "LEGAL",
        links: [
            "Privacy Policy",
            "Terms of Service",
            "Cookie Policy",
            "Accessibility",
        ],
    },
];

export default function Footer() {
    return (
        <footer className="border-t bg-card">
            <div className="container mx-auto px-6 py-16">
                <div className="grid gap-10 lg:grid-cols-4">
                    <div>
                        <h3 className="mb-5 text-3xl font-bold text-primary">
                            QuickMart
                        </h3>

                        <p className="mb-6 text-muted-foreground">
                            The ultimate multi-vendor ecosystem bringing quality
                            products from global vendors to your doorstep with
                            technical precision and unparalleled service.
                        </p>

                        <div className="flex items-center gap-4">
                            <Globe className="h-5 w-5 cursor-pointer" />
                            <Share2 className="h-5 w-5 cursor-pointer" />
                            <Image className="h-5 w-5 cursor-pointer" />
                        </div>
                    </div>

                    {footerLinks.map((group) => (
                        <div key={group.title}>
                            <h4 className="mb-5 text-sm font-bold tracking-wider">
                                {group.title}
                            </h4>

                            <ul className="space-y-3">
                                {group.links.map((link) => (
                                    <li key={link}>
                                        <button className="text-muted-foreground transition hover:text-primary">
                                            {link}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
}