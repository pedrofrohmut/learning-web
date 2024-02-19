import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {
    AdminPanelSettingsOutlined,
    CalendarMonthOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    Groups2Outlined,
    HomeOutlined,
    PieChartOutline,
    PointOfSaleOutlined,
    PublicOutlined,
    ReceiptLongOutlined,
    SettingsOutlined,
    ShoppingCartOutlined,
    TodayOutlined,
    TrendingUpOutlined
} from "@mui/icons-material"

import profileImage from "../../assets/profile-small.jpeg"

const navItems = [
    { text: "Dashboard", icon: <HomeOutlined /> },
    { text: "Client Facing", icon: null },
    { text: "Products", icon: <ShoppingCartOutlined /> },
    { text: "Customers", icon: <Groups2Outlined /> },
    { text: "Transactions", icon: <ReceiptLongOutlined /> },
    { text: "Geography", icon: <PublicOutlined /> },
    { text: "Sales", icon: null },
    { text: "Overview", icon: <PointOfSaleOutlined /> },
    { text: "Daily", icon: <TodayOutlined /> },
    { text: "Monthly", icon: <CalendarMonthOutlined /> },
    { text: "Breakdown", icon: <PieChartOutline /> },
    { text: "Management", icon: null },
    { text: "Admin", icon: <AdminPanelSettingsOutlined /> },
    { text: "Performance", icon: <TrendingUpOutlined /> },
]

const Sidebar = ({
    isMobile,
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    user
}) => {
    const { pathname } = useLocation()
    const [active, setActive] = useState()
    const navigate = useNavigate()
    const theme = useTheme()

    const [items, setItems] = useState([])

    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname])

    // Add lcText field to be used in the navigation list
    useEffect(() => {
	setItems(navItems.map(item => ({ ...item, lcText: item.text.toLowerCase() })))
    }, [])

    const handleNavigation = (text) => {
	setActive(text)
	navigate(`/${text}`)
    }

    if (!isSidebarOpen) return null

    return (
	<aside className="layout__sidebar sidebar">
	    <div className="sidebar__header">
		<div className="sidebar__logo">ECOMVISION</div>

		{isMobile && (
		    <button className="icon-button">
			<ChevronLeft style={{ fontSize: 25 }} />
		    </button>
		)}
	    </div>

	    <ul className="sidebar__menu">
		{items && items.map(item => (
		    <li
			key={item.text}
			className={`sidebar__menu-li ${active === item.lcText ? "active" : ""}`}
			onClick={() => handleNavigation(item.lcText)}
		    >
			{!item.icon ? (
			    <div className="sidebar__menu-header">{item.text}</div>
			): (
			    <div className="sidebar__menu-link" onClick={() => handleNavigation(item.lcText)}>
				{item.icon}
				<span>{item.text}</span>
				<ChevronRightOutlined className="arrow" style={{ fontSize: 25 }} />
			    </div>
			)}
		    </li>
		))}
	    </ul>

	    {user && (
		<div className="sidebar__footer">
		    <img className="sidebar__profile-img" src={profileImage} />
		    <div>
			<div className="sidebar__user-name">{user.name}</div>
			<div className="sidebar__user-occupation">{user.occupation}</div>
		    </div>
		</div>
	    )}
	</aside>
    )
}

export default Sidebar
