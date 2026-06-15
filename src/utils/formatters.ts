export const formatCardNumber = (value: string) =>
    value
        .replace(/\D/g, "")
        .slice(0, 16)
        .replace(/(.{4})/g, "$1 ")
        .trim();

export const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);

    return digits.length >= 3
        ? `${digits.slice(0, 2)}/${digits.slice(2)}`
        : digits;
};