import { useDispatch, useSelector } from "react-redux"
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from "@mui/material"
import { DarkModeOutlined,
         LightModeOutlined,
         Menu as MenuIcon,
         Search,
         SettingsOutlined } from "@mui/icons-material"

import FlexBetween from "./flex-between"
import { toggleDarkMode } from "../redux/global-slice"

const iconsSize = 28

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.global.mode)

    return (
	<header className="layout__header navbar">
	    <div className="navbar__left">
		<button className="icon-button" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
		    <MenuIcon style={{ fontSize: iconsSize }} />
		</button>

		<div className="navbar__search">
		    <input type="text" className="search-input" />
		    <button className="icon-button">
			<Search style={{ fontSize: iconsSize }} />
		    </button>
		</div>
	    </div>

	    <div className="navbar__right">
		<button className="icon-button" onClick={() => dispatch(toggleDarkMode())}>
		    {theme == "dark" ? (
			<LightModeOutlined style={{ fontSize: iconsSize }} />
		    ) : (
			<DarkModeOutlined style={{ fontSize: iconsSize }} />
		    )}
		</button>

		<button className="icon-button">
		    <SettingsOutlined style={{ fontSize: iconsSize }} />
		</button>
	    </div>
	</header>
    )
}

//    return (
//        <AppBar sx={{ background: "none", boxShadow: "none" }}>
//            <Toolbar sx={{ justifyContent: "space-between" }}>
//
//                {/* Left Side */}
//                <FlexBetween>
//                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
//                        <MenuIcon />
//                    </IconButton>
//
//                    <FlexBetween
//                        backgroundColor={theme.palette.background.alt}
//                        borderRadius="9px"
//                        gap="3rem"
//                        p="0.1rem 1.5rem"
//                    >
//                        <InputBase placeholder="Search..." />
//                        <IconButton>
//                            <Search />
//                        </IconButton>
//                    </FlexBetween>
//                </FlexBetween>
//
//                {/* Right Side */}
//                <FlexBetween
//                    gap="1.5rem"
//                >
//                    <IconButton onClick={() => dispatch(toggleDarkMode())}>
//                        {theme.palette.mode === "dark" ? (
//                            <DarkModeOutlined sx={{ fontSize: "25px" }} />
//                        ) : (
//                            <LightModeOutlined sx={{ fontSize: "25px" }} />
//                        )}
//                    </IconButton>
//
//                    <IconButton>
//                        <SettingsOutlined sx={{ fonstSize: "25px" }} />
//                    </IconButton>
//                </FlexBetween>
//
//            </Toolbar>
//        </AppBar>
//    )
//}

export default Navbar
