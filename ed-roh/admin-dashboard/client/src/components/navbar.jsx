import { useDispatch, useSelector } from "react-redux"
import { DarkModeOutlined,
         LightModeOutlined,
         Menu as MenuIcon,
         Search,
         SettingsOutlined } from "@mui/icons-material"

import { toggleDarkMode } from "../redux/global-slice"

const Navbar = ({ handleToggleSidebar }) => {
    const dispatch = useDispatch()
    const theme = useSelector(state => state.global.mode)

    return (
	<header className="layout__header navbar">
	    <button className="icon-button" onClick={handleToggleSidebar}>
		<MenuIcon />
	    </button>

	    <div className="navbar__search">
		<input type="text" className="search-input" />
		<button className="icon-button">
		    <Search />
		</button>
	    </div>

	    <div className="navbar__right">
		<button className="icon-button" onClick={() => dispatch(toggleDarkMode())}>
		    {theme == "dark" ? (
			<LightModeOutlined />
		    ) : (
			<DarkModeOutlined />
		    )}
		</button>

		<button className="icon-button">
		    <SettingsOutlined />
		</button>
	    </div>
	</header>
    )
}

export default Navbar
