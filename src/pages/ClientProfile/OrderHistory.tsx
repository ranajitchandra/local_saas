import { orders as _orders } from "@/data/clientProfile";
import type { Order } from "@/types/clientProfile";
const orders = _orders as Order[];


export default function OrderHistory() {
    return (
        <div className="bg-card border rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-6">
                Order History
            </h2>

            <div className="space-y-4">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="border rounded-xl p-4 flex justify-between items-center"
                    >
                        <div>
                            <h3 className="font-semibold">
                                {order.id}
                            </h3>

                            <p className="text-sm text-muted-foreground">
                                {order.date}
                            </p>
                        </div>

                        <div className="text-right">
                            <p className="font-semibold">
                                ${order.total}
                            </p>

                            <span className="text-sm text-primary">
                                {order.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}