import ThemeToggler from "@/components/shared/theme-toggler"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div style={{ height: "100vh" }} className="flex items-center justify-center relative">
            <div className="absolute bottom-5 right-0 text-white">
                <ThemeToggler />
            </div>
            {children}
        </div>
    )
}

export default AuthLayout
