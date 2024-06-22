import type { Metadata } from "next"
import { Inter } from "next/font/google"

import Navbar from "@/components/layout/navbar"
import Sidebar from "@/components/layout/sidebar"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "TraversyPress",
    description: "Admin dashboard"
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <div className="flex">
                    <div className="hidden md:block" style={{ height: "100vh", minWidth: 220 }}>
                        <Sidebar />
                    </div>
                    <div className="p-5 w-full md:max-w-6xl">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}
