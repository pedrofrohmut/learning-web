import { useRef, useState } from "react"
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"

import SceneContainer from "../components/shared/scene-container"
import SceneTitle from "../components/shared/scene-title"
import { getTransactions } from "../api/transactions"

const TransactionsScene = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [transactions, setTransactions] = useState(null)
    const [pageNumber, setPageNumber] = useState(0)
    const [pageSize, setPageSize] = useState(10)
    const [hasNext, setHasNext] = useState(false)
    const [hasPrevious, setHasPrevious] = useState(false)

    // Form fields
    const [userId, setUserId] = useState("")

    // Form refs
    // const userIdRef = useRef(null)
    // const filterRef = useRef(null)


    const fetcher = async args => {
	setIsLoading(true)

	// const response = await getTransactions({ pageNumber, pageSize, userId })
	const response = await getTransactions(args)

	setTransactions(response.data)
	setHasNext(response.hasNext)
	setHasPrevious(response.hasPrevious)
	setPageNumber(response.pageNumber)
	setPageSize(response.pageSize)

	setTimeout(() => {
	    setIsLoading(false)
	}, 100)
    }

    const handleSubmit = async e => {
	e.preventDefault()
	fetcher({ pageNumber, pageSize, userId })
    }

    const handleNext = () => {
	if (hasNext) {
	    fetcher({ pageNumber: pageNumber + 1, pageSize, userId })
	}
    }

    const handlePrevious = () => {
	if (hasPrevious) {
	    fetcher({ pageNumber: pageNumber - 1, pageSize, userId })
	}
    }

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

    // if (isLoading) {
    // 	return <h1 style={{ marginTop: "2rem", textAlign: "center" }}>Is Loading...</h1>
    // }

    // TODO: add animation so the table doesnt blink in and out

    return (
    	<SceneContainer className="transactions__scene-container">
    	    <SceneTitle title="Transactions" subtitle="Entire list of transactions" />

	    <div className="form-container">
		<form className="form form-inline" onSubmit={handleSubmit}>
		    <div className="form-group">
			<label htmlFor="">Filter</label>
			<input type="text" onChange={e => setUserId(e.target.value)}
			       value={userId} placeholder="User id" />
		    </div>

    		    <div className="form-group">
    			<label htmlFor="">Sort by</label>
    			<select>
    			    <option value="">No sorting</option>
    			    <option value="dateAsc">Date Asc</option>
    			    <option value="dateDes">Date Des</option>
    			    <option value="dateAsc">Cost Asc</option>
    			    <option value="dateDec">Cost Asc</option>
    			</select>
    		    </div>

    		    <button type="submit">Submit</button>
    		</form>
    	    </div>

    	    <div className="table-container">
		{isLoading && (
		    <h1 style={{ marginTop: "2rem", textAlign: "center" }}>Is Loading...</h1>
		)}

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
    			    <button onClick={handlePrevious} disabled={!hasPrevious}>
    				<ArrowBackIos />
    				<span>Previous</span>
    			    </button>
    			    <button onClick={handleNext} disabled={!hasNext}>
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
