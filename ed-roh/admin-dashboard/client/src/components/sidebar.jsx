import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import FlexBetween from "./flex-between"
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
    ShoppingCartOutlined,
    TodayOutlined,
    TrendingUpOutlined
} from "@mui/icons-material"

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
    setIsSidebarOpen
}) => {
    const { pathname } = useLocation()
    const [active, setActive] = useState()
    const navigate = useNavigate()
    const theme = useTheme()

    useEffect(() => {
        setActive(pathname.substring(1))
    }, [pathname])


    console.log(navItems)

    return (
        <Box component="nav">
            {isSidebarOpen && (
                <Drawer
                    open
                    onClose={() => setIsSidebarOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            color: theme.palette.secondary[200],
                            backgroundColor: theme.palette.background.alt,
                            boxSizing: "border-box",
                            borderWidth: isMobile ? "2px" : 0,
                            width: drawerWidth
                        }
                    }}
                >
                    <Box width="100%">
                        <Box m="1.5rem 2rem 2rem 3rem">
                            <FlexBetween color={theme.palette.secondary.main}>
                                <Box display="flex" alignItems="center" gap="0.5rem">
                                    <Typography variant="h4" fontWeight="bold">
                                        ECOMVISION
                                    </Typography>
                                </Box>

                                {isMobile && (
                                    <IconButton onClick={() => setIsSidebarOpen(false)}>
                                        <ChevronLeft />
                                    </IconButton>
                                )}
                            </FlexBetween>
                        </Box>

                        <List>
                            {navItems.map(navItem => {
                                const text = navItem.text
                                const lcText = text.toLowerCase()
                                const icon = navItem.icon

                                if (!icon) {
                                    return (
                                        <Typography sx={{ m: "2.25rem 0 1rem 3rem" }}>{text}</Typography>
                                    )
                                }

                                return (
                                    <ListItem key={text} disablePadding>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/${lcText}`)
                                                setActive(lcText)
                                            }}
                                            sx={{
                                                backgroundColor: active === lcText
                                                    ? theme.palette.secondary[300]
                                                    : "transparent",
                                                color: active === lcText
                                                    ? theme.palette.primary[600]
                                                    : theme.palette.secondary[100]
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    ml: "2rem",
                                                    color: active === lcText
                                                        ? theme.palette.primary[600]
                                                        : theme.palette.secondary[200]
                                                }}
                                            >
                                                {icon}
                                            </ListItemIcon>

                                            <ListItemText primary={text} />

                                            {active === lcText && (
                                                <ChevronRightOutlined sx={{ ml: "auto" }} />
                                            )}
                                        </ListItemButton>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </Box>
                </Drawer>
            )}
        </Box>
    )
}

export default Sidebar
