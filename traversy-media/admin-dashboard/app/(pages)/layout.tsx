import Navbar from "@/components/layout/navbar"
import Sidebar from "@/components/layout/sidebar"

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            <div className="flex">
                <div className="hidden md:block" style={{ height: "100vh", minWidth: 220 }}>
                    <Sidebar />
                </div>
                <div className="p-5 w-full md:max-w-6xl">{children}</div>
            </div>
        </>
    )
}

export default MainLayout
