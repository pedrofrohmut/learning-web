import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"

import { useSelector } from "react-redux"
import { useGetUserQuery } from "../redux/api"

import Navbar from "../components/layout/navbar"
import Sidebar from "../components/layout/sidebar"

const Layout = () => {
    const isSmallScreen = () => window.innerWidth < 1024
    const [isSidebarOpen, setIsSidebarOpen] = useState(! isSmallScreen())

    const handleToggleSidebar = () => {
	setIsSidebarOpen(!isSidebarOpen)
    }

    useEffect(() => {
	const handleResize = () => setIsSidebarOpen(! isSmallScreen())

	window.addEventListener("resize", handleResize)

	return () => window.removeEventListener("resize", handleResize)
    }, [])

    const userId = useSelector(state => state.global.userId)
    const { data: user } = useGetUserQuery(userId)

    return (
	<div className="layout">
	    <Navbar
		handleToggleSidebar={handleToggleSidebar}
	    />

	    {isSidebarOpen && (
		<Sidebar
		    user={user}
		    handleToggleSidebar={handleToggleSidebar}
		/>
	    )}

	    <main className="layout__main">
		<Outlet />
	    </main>
	</div>
    )

}

export default Layout
