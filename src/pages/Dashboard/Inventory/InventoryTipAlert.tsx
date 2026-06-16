import { useState, type FC } from 'react';
import { Lightbulb, X } from 'lucide-react';

interface InventoryTipAlertProps {
    onClose?: () => void;
}

const InventoryTipAlert: FC<InventoryTipAlertProps> = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    const handleClose = () => {
        setIsVisible(false);
        if (onClose) onClose();
    };

    return (
        /* Uses your theme's alert/accent backgrounds and borders */
        <div className="relative rounded-xl border border-accent-foreground/20 bg-accent/30 p-5 shadow-sm">
            <div className="flex items-start gap-4">

                {/* Icon Container - Uses theme's primary/success coloring */}
                <div className="flex h-6 w-6 shrink-0 items-center justify-center text-primary">
                    <Lightbulb className="h-6 w-6" aria-hidden="true" />
                </div>

                {/* Content Area */}
                <div className="grow pr-6">
                    {/* Title */}
                    <h4 className="mb-1 text-base font-semibold text-foreground">
                        Inventory Tip
                    </h4>

                    {/* Body Text - Uses theme's muted/secondary text color */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Products with &quot;Low Stock&quot; status are automatically flagged for re-ordering based on your vendor agreements. You can adjust the low-stock threshold in the Settings panel.
                    </p>
                </div>

                {/* Close Button */}
                <div className="shrink-0">
                    <button
                        type="button"
                        className="rounded-md p-1 text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                        onClick={handleClose}
                        aria-label="Close alert"
                    >
                        <X className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default InventoryTipAlert;