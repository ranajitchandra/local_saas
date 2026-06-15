import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './router/router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <div className="quickmart-theme min-h-screen bg-background text-foreground">
                <RouterProvider router={router} />
            </div>
        </QueryClientProvider>
    </StrictMode>,
)
