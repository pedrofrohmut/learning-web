import { CssBaseline, ThemeProvider } from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { useSelector } from "react-redux"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { themeSettings } from "./theme"
import Layout from "./scenes/layout"
import DashboardScene from "./scenes/dashboard-scene"
import ProductsScene from "./scenes/products-scene"
import CustomersScene from "./scenes/customers-scene"

const App = () =>  {
    const theme = useSelector(state => state.global.mode)

    return (
	<div className={`app ${theme}`}>
	    <BrowserRouter>
		<Routes>
		    <Route element={<Layout />}>
			<Route path="/" element={<Navigate to="/dashboard" replace />} />
			<Route path="/dashboard" element={<DashboardScene />} />
			<Route path="/products" element={<ProductsScene />} />
			<Route path="/customers" element={<CustomersScene />} />
		    </Route>
		</Routes>
	    </BrowserRouter>
	</div>
    )
}

export default App
