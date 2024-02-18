import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { themeSettings } from "./theme"
import Dashboard from "./scenes/dashboard"
import Layout from "./scenes/layout"

const App = () =>  {
    const theme = useSelector(state => state.global.mode)

    return (
	<div className={`app ${theme}`}>
	    <BrowserRouter>
		<Routes>
		    <Route element={<Layout />}>
			<Route path="/" element={<Navigate to="/dashboard" replace />} />
			<Route path="/dashboard" element={<Dashboard />} />
		    </Route>
		</Routes>
	    </BrowserRouter>
	</div>
    )
}

export default App
