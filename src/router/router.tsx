import { createBrowserRouter, Navigate } from "react-router"
import { MainLayout } from "../layouts/MainLayout"
import { DashboardLayout } from "../layouts/DashboardLayout"
import { AuthLayout } from "../layouts/AuthLayout"
import { Login } from "../pages/Login"
import { Register } from "../pages/Register"
import HomePage from "@/pages/Home/HomePage"
import PromotionPage from "@/pages/Promotions/PromotionPage"
import ProfileLayout from "@/layouts/ProfileLayout"
import PersonalInfo from "@/pages/ClientProfile/PersonalInfo"
import OrderHistory from "@/pages/ClientProfile/OrderHistory"
import Addresses from "@/pages/ClientProfile/Addresses"
import PaymentMethods from "@/pages/ClientProfile/PaymentMethods"
import SecurityPrivacy from "@/pages/ClientProfile/SecurityPrivacy"
import VendorPage from "@/pages/Vendor/VendorPage"
import InventoryPage from "@/pages/Dashboard/Inventory/InventoryPage"
import OrdersPage from "@/pages/Dashboard/Orders/OrdersPage"
import CustomersPage from "@/pages/Dashboard/Customers/CustomersPage"
import DeliveryCheckoutPage from "@/pages/Dashboard/Orders/OrderDelivery/DeliveryCheckoutPage"
import DashboardPage from "@/pages/Dashboard/Home/DashboardPage"
import AnalyticsPage from "@/pages/Dashboard/Analytics/AnalyticsPage"
import CompanyProfile from "@/pages/Dashboard/Settings/CompanyProfile"
import Notifications from "@/pages/Dashboard/Settings/Notifications"
import DashboardSettingsLayout from "@/layouts/DashboardSettingsLayout"
import PaymentGateway from "@/pages/Dashboard/Settings/PaymentGateway"
import RolePermissions from "@/pages/Dashboard/Settings/RolePermissions"
import SecurityAccess from "@/pages/Dashboard/Settings/SecurityAccess"

export const router = createBrowserRouter([
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="login" replace />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ]
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "promotions",
                element: <PromotionPage />
            },
            {
                path: "vendor",
                element: <VendorPage />
            },
            {
                path: "/profile",
                element: <ProfileLayout />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="personal-info" replace />
                    },
                    {
                        path: "personal-info",
                        element: <PersonalInfo />,
                    },
                    {
                        path: "order-history",
                        element: <OrderHistory />,
                    },
                    {
                        path: "addresses",
                        element: <Addresses />,
                    },
                    {
                        path: "payment-methods",
                        element: <PaymentMethods />,
                    },
                    {
                        path: "security-privacy",
                        element: <SecurityPrivacy />,
                    },
                ],
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />,
            },
            {
                path: "inventory",
                element: <InventoryPage />
            },
            {
                path: "orders",
                element: <OrdersPage />
            },
            {
                path: "orders/order-delivery-checkout",
                element: <DeliveryCheckoutPage />
            },
            {
                path: "analytics",
                element: <AnalyticsPage />
            },
            {
                path: "customers",
                element: <CustomersPage />
            },
            {
                path: "settings",
                element: <DashboardSettingsLayout />,
                children: [
                    {
                        index: true,
                        element: <Navigate to="company-profile" replace />
                    },
                    {
                        path: "company-profile",
                        element: <CompanyProfile />,
                    },
                    {
                        path: "notifications",
                        element: <Notifications />,
                    },
                    {
                        path: "payment-gateway",
                        element: <PaymentGateway />,
                    },
                    {
                        path: "role-permissions",
                        element: <RolePermissions />,
                    },
                    {
                        path: "security-access",
                        element: <SecurityAccess />,
                    },
                ],
            },
        ]
    }
])