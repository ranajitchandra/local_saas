import { Building2 } from "lucide-react";

export default function CompanyProfile() {
    return (
        <div className="rounded-2xl border bg-card p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
                <Building2 className="h-5 w-5 text-primary" />

                <h2 className="text-lg font-semibold">
                    Company Profile
                </h2>
            </div>

            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
                <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-dashed bg-muted">
                    <img
                        src="https://placehold.co/60x60"
                        alt="logo"
                        className="h-12 w-12"
                    />
                </div>

                <div>
                    <h3 className="font-medium">
                        Brand Assets
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                        SVG or PNG up to 5MB.
                        Recommended size 400×400px.
                    </p>

                    <div className="mt-2 flex gap-4 text-sm">
                        <button className="text-primary">
                            Upload New
                        </button>

                        <button className="text-red-500">
                            Remove
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <div>
                    <label className="mb-2 block text-sm">
                        Company Name
                    </label>

                    <input
                        defaultValue="QuickMart Ecosystem"
                        className="w-full rounded-lg border bg-background px-3 py-2"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm">
                        Legal Entity ID
                    </label>

                    <input
                        defaultValue="QM-992-XXXXX"
                        className="w-full rounded-lg border bg-background px-3 py-2"
                    />
                </div>
            </div>

            <div className="mt-4">
                <label className="mb-2 block text-sm">
                    Corporate Address
                </label>

                <textarea
                    rows={4}
                    defaultValue="44 Market St, San Francisco, CA 94103, United States"
                    className="w-full rounded-lg border bg-background px-3 py-2"
                />
            </div>
        </div>
    );
}