import { useState } from "react"
import { Outlet } from "react-router-dom"

import { useSelector } from "react-redux"
import { useGetUserQuery } from "../redux/api"

import { Box, useMediaQuery } from "@mui/material"

import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"

const Layout = () => {
    const isMobile = useMediaQuery("(max-width: 44em)")
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)

    const userId = useSelector(state => state.global.userId)
    const { data: user } = useGetUserQuery(userId)

    return (
	<div className="layout">
	    <Navbar
		user={user}
		isSidebarOpen={isSidebarOpen}
		setIsSidebarOpen={setIsSidebarOpen}
	    />

	    <Sidebar
		user={user}
		isMobile={isMobile}
		drawerWidth="250px"
		isSidebarOpen={isSidebarOpen}
		setIsSidebarOpen={setIsSidebarOpen}
	    />

	    <main className="layout__main">
		<Outlet />
	    </main>
	</div>
    )

}

// {/*
// <Sidebar
//	className="sidebar"
//	isMobile={isMobile}
//	drawerWidth="250px"
//	isSidebarOpen={isSidebarOpen}
//	setIsSidebarOpen={setIsSidebarOpen}
// />
// <Navbar className="navbar" />
// <Outlet className="outlet-container" />
//  */}

// return (
//     <Box className="layout-container" display={isMobile ? "block" : "flex"} width="100%" height="100%">
//         <Sidebar
//             isMobile={isMobile}
//             drawerWidth="250px"
//             isSidebarOpen={isSidebarOpen}
//             setIsSidebarOpen={setIsSidebarOpen}
//         />
//         <Box className="outlet-container" flexGrow={1}>
//             <Navbar
//                 isSidebarOpen={isSidebarOpen}
//                 setIsSidebarOpen={setIsSidebarOpen}
//             />
//             <Outlet />
//         </Box>
//     </Box>
// )

export default Layout
