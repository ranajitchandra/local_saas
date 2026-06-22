import React, { useState } from "react"
import { Link, useNavigate } from "react-router"
import { Lock, Mail, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [acceptTerms, setAcceptTerms] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!name || !email || !password || !acceptTerms) return

        setIsLoading(true)
        // Simulate user creation and redirect to dashboard
        setTimeout(() => {
            setIsLoading(false)
            navigate("/dashboard")
        }, 1000)
    }

    return (
        <div className="space-y-6">
            {/* Heading */}
            <div className="space-y-2 text-center lg:text-left">
                <h1 className="text-2xl font-bold tracking-tight text-foreground">Create your Account</h1>
                <p className="text-sm text-muted-foreground">
                    Get started with your free engine trial today
                </p>
            </div>

            {/* Social Logins */}
            <div className="grid grid-cols-2 gap-3">
                {/* Google Button */}
                <Button
                    type="button"
                    variant="outline"
                    className="gap-2 cursor-pointer h-9 text-xs"
                    onClick={() => navigate("/dashboard")}
                >
                    <svg className="h-4 w-4" viewBox="0 0 24 24">
                        <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                        />
                        <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                            fill="#EA4335"
                        />
                    </svg>
                    Google
                </Button>

                {/* Facebook Button */}
                <Button
                    type="button"
                    variant="outline"
                    className="gap-2 cursor-pointer h-9 text-xs"
                    onClick={() => navigate("/dashboard")}
                >
                    <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="#1877F2"
                    >
                        <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.009 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.017 1.792-4.687 4.533-4.687 1.312 0 2.686.235 2.686.235v2.96h-1.514c-1.491 0-1.956.93-1.956 1.885v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.082 24 18.092 24 12.073z" />
                    </svg>
                    Facebook
                </Button>
            </div>

            {/* Divider */}
            <div className="relative flex py-2 items-center">
                <div className="grow border-t border-border/40"></div>
                <span className="shrink mx-4 text-[10px] text-muted-foreground font-semibold tracking-wider uppercase">
                    Or continue with
                </span>
                <div className="grow border-t border-border/40"></div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">

                {/* Full Name Input */}
                <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground" htmlFor="name">
                        Full Name
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground/80">
                            <User className="h-4 w-4" />
                        </div>
                        <input
                            id="name"
                            type="text"
                            placeholder="Ranajit Roy"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 border border-border/50 bg-secondary/20 hover:bg-secondary/35 rounded-lg text-sm text-foreground placeholder-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            required
                        />
                    </div>
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground" htmlFor="email">
                        Email Address
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground/80">
                            <Mail className="h-4 w-4" />
                        </div>
                        <input
                            id="email"
                            type="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 border border-border/50 bg-secondary/20 hover:bg-secondary/35 rounded-lg text-sm text-foreground placeholder-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            required
                        />
                    </div>
                </div>

                {/* Password Input */}
                <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-foreground" htmlFor="password">
                        Password
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground/80">
                            <Lock className="h-4 w-4" />
                        </div>
                        <input
                            id="password"
                            type="password"
                            placeholder="Create secure password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-9 pr-4 py-2 border border-border/50 bg-secondary/20 hover:bg-secondary/35 rounded-lg text-sm text-foreground placeholder-muted-foreground/70 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            required
                        />
                    </div>
                </div>

                {/* Accept Terms Checkbox */}
                <div className="flex items-start space-x-2 py-1 select-none">
                    <input
                        type="checkbox"
                        id="accept"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        className="rounded border-border/60 text-primary focus:ring-primary h-3.5 w-3.5 mt-0.5 cursor-pointer accent-primary"
                        required
                    />
                    <label htmlFor="accept" className="text-xs font-medium text-muted-foreground cursor-pointer">
                        I accept the{" "}
                        <a href="#" className="font-semibold text-primary hover:underline">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="font-semibold text-primary hover:underline">
                            Privacy Policy
                        </a>
                    </label>
                </div>

                {/* Submit */}
                <Button
                    type="submit"
                    className="w-full justify-center h-10 gap-1.5 font-bold cursor-pointer transition-all active:scale-95"
                    disabled={isLoading}
                >
                    {isLoading ? "Creating Account..." : "Create Account"}
                    <ArrowRight className="h-4 w-4" />
                </Button>
            </form>

            {/* Login Redirect */}
            <div className="text-center text-xs text-muted-foreground mt-4">
                Already have an account?{" "}
                <Link to="/auth/login" className="font-bold text-primary hover:underline">
                    Sign in
                </Link>
            </div>

        </div>
    )
}
