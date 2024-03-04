import { useSelector } from "react-redux"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Layout from "./scenes/layout"
import DashboardScene from "./scenes/dashboard-scene"
import ProductsScene from "./scenes/products-scene"
import CustomersScene from "./scenes/customers-scene"
import TransactionsScene from "./scenes/transactions-scene"
import GeographyScene from "./scenes/geography-scene"

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
			<Route path="/transactions" element={<TransactionsScene />} />
			<Route path="/geography" element={<GeographyScene />} />
		    </Route>
		</Routes>
	    </BrowserRouter>
	</div>
    )
}

export default App
