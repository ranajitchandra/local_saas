import { useRef, useState } from "react";

const OTP_LENGTH = 6;

export default function OTPInput() {
    const [otp, setOtp] = useState(
        new Array(OTP_LENGTH).fill("")
    );

    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (
        value: string,
        index: number
    ) => {
        if (!/^\d*$/.test(value)) return;

        const digit = value.slice(-1);

        const newOtp = [...otp];
        newOtp[index] = digit;
        setOtp(newOtp);

        if (digit && index < OTP_LENGTH - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {
        if (
            e.key === "Backspace" &&
            !otp[index] &&
            index > 0
        ) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    return (
        <div className="flex justify-center gap-1 sm:gap-2">
            {otp.map((digit, index) => (
                <input
                    key={index}
                    ref={(el) => {
                        inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) =>
                        handleChange(e.target.value, index)
                    }
                    onKeyDown={(e) =>
                        handleKeyDown(e, index)
                    }
                    className="h-9 w-8 sm:h-12 sm:w-12 rounded-lg border border-white/20 bg-white/15 text-center text-lg font-semibold text-primary-foreground outline-none"
                />
            ))}
        </div>
    );
}