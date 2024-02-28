import { useState } from "react"
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"

import { useGetTransactionsQuery } from "../redux/api"
import SceneContainer from "../components/shared/scene-container"
import SceneTitle from "../components/shared/scene-title"

const TransactionsScene = () => {
    const [pageNumber, setPageNumber] = useState(0)
    const [pageSize, setPageSize] = useState(15)

    // Stub
    const userId = ""
    const cost = ""
    const sortOrder = 0

    // const [userId, setUserId] = useState("")
    // const [cost, setCost] = useState("")
    // const [sortOrder, setSortOrder] = useState(1)

    // const [sort, setSort] = useState({})
    // const [search, setSearch] = useState("")

    const { data, isLoading } = useGetTransactionsQuery({
	page: pageNumber, pageSize, userId, cost, sortOrder })

    // Brain Storm #1
    // TODOS: make a table for: ID, UserId, CreatedAt, Number of Products, Cost
    // tableFooter: 1-20 of 500 next previous buttons
    // Make a search input above the table
    // Sorting asc or desc when clicking in the tableHeaders. Show arrow up or down icon on the header
    // Filters for what columns to show
    // Make a selectInput to choose between: 20, 50 and 100 results per page

    // Brain Storm #2
    // 1. The search is pointless. Can be removed and replaces by a filter for UserId
    // 2. Sort by date is usefull and a search by day can be usefull
    // 3. The search can be replaced by a textInput + selectInput that tells what is going to filtered
    // 4. options to searchSelectInput can be: above/below Cost, before/after Date, in a day, by UserId

    // Brain Storm #3
    // ** Dont make sort on headers filters make more sense
    // ** Page size does not seem important
    // ** No search make only the filter with select + input_text
    // ** ToggleList still good
    // ** Extra/Optional order by date asc/desc would be good (radio asc/desc/none)
    // make select, input_text and radio into a form (inline?) with button 'filter'

    // Brain Storm #4
    // 1. Sort by: date asc/des or cost asc/des
    // 2. Filter by: userId or cost below of or cost above of

    if (isLoading || !data) return null

    const transactions = data.data

    const hasPrevious = data.hasPrevious
    const hasNext = data.hasNext

    return (
	<SceneContainer className="transactions__scene-container">
	    <SceneTitle title="Transactions" subtitle="Entire list of transactions" />

	    <div className="table-container">
		{!isLoading && transactions && (
		    <>
			<table className="table">
			    <thead>
				<tr>
				    <th>Id</th>
				    <th>User Id</th>
				    <th>Cost</th>
				    <th>Producst count</th>
				</tr>
			    </thead>
			    <tbody>
				{transactions.map(transaction => (
				    <tr key={transaction._id}>
					<td>{transaction._id}</td>
					<td>{transaction.userId}</td>
					<td>${transaction.cost}</td>
					<td>{transaction.products &&
					    transaction.products.length}</td>
				    </tr>
				))}
			    </tbody>
			</table>
			<div className="table-buttons">
			    <button onClick={() => setPageNumber(pageNumber - 1)} disabled={!hasPrevious}>
				<ArrowBackIos />
				<span>Previous</span>
			    </button>
			    <button onClick={() => setPageNumber(pageNumber + 1)} disabled={!hasNext}>
				<span>Next</span>
				<ArrowForwardIos />
			    </button>
			</div>
		    </>
		)}
	    </div>
	</SceneContainer>
    )
}

export default TransactionsScene
