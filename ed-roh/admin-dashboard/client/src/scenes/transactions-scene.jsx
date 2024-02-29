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
    const [sortType, setSortType] = useState("noSort")

    const fetcher = async args => {
	setIsLoading(true)

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
	fetcher({ pageNumber, pageSize, userId, sortType })
    }

    const handleNext = () => {
	if (hasNext) {
	    fetcher({ pageNumber: pageNumber + 1, pageSize, userId, sortType })
	}
    }

    const handlePrevious = () => {
	if (hasPrevious) {
	    fetcher({ pageNumber: pageNumber - 1, pageSize, userId, sortType })
	}
    }

    // tableFooter: 1-20 of 500 next previous buttons
    // Filters for what columns to show
    // Make a selectInput to choose between: 20, 50 and 100 results per page

    // ** Dont make sort on headers filters make more sense
    // ** Page size does not seem important
    // ** ToggleList still good

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
    			<select onChange={e => setSortType(e.target.value)} value={sortType}>
    			    <option value="noSort">No sorting</option>
    			    <option value="dateAsc">Date Asc</option>
    			    <option value="dateDesc">Date Desc</option>
    			    <option value="costAsc">Cost Asc</option>
    			    <option value="costDesc">Cost Desc</option>
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
				    <th>Date</th>
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
					<td>{transaction.createdAt}</td>
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
