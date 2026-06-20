

export default function InputField({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <label className="mb-1 block text-xs font-medium">
                {label}
            </label>

            <input
                readOnly
                value={value}
                className="h-11 w-full rounded-lg border bg-background px-3 text-sm"
            />
        </div>
    );
}