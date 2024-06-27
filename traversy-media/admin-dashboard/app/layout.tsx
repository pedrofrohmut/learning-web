import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Toaster } from "@/components/ui/toaster"
import ThemeProvider from "@/components/providers/theme-provider"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "TraversyPress",
    description: "Admin dashboard"
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={true}
                    storageKey="dashboard-theme"
                >
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    )
}

export default RootLayout
