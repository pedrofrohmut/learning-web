import { useState } from "react"
import { Box, useMediaQuery } from "@mui/material"
import { Outlet } from "react-router-dom"

import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"

const Layout = () => {
    const isMobile = useMediaQuery("(max-width: 44em)")

    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    return (
        <Box display={isMobile ? "block" : "flex"} width="100%" height="100%">
            <Sidebar
                isMobile={isMobile}
                drawerWidth="250px"
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
            />
            <Box>
                <Navbar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />
                <Outlet />
            </Box>
        </Box>
    )
}

export default Layout
