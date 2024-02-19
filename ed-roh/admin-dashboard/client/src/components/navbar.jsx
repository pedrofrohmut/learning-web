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
	    <button className="icon-button" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
		<MenuIcon style={{ fontSize: iconsSize }} />
	    </button>

	    <div className="navbar__search">
		<input type="text" className="search-input" />
		<button className="icon-button">
		    <Search style={{ fontSize: iconsSize }} />
		</button>
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

export default Navbar
