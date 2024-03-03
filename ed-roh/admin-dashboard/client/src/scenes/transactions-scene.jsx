import { useRef, useState } from "react"
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material"

import SceneContainer from "../components/shared/scene-container"
import SceneTitle from "../components/shared/scene-title"
import { getTransactions } from "../api/transactions"

// Variables moved out from react state.
// State will have only variables responsible for changing the UI
let transactions = null
let hasNext = false
let hasPrevious = false
let pageSize = 10
let pageNumber = 0
let resultsCount = 0
let startIndex = 0
let endIndex = 0

const TransactionsScene = () => {
    // For fetching state
    const [isLoading, setIsLoading] = useState(false)

    // Animation
    const [isActive, setIsActive] = useState(false)

    // Toggler fields
    const [showId, setShowId] = useState(false)
    const [showUserId, setShowUserId] = useState(true)
    const [showCost, setShowCost] = useState(true)
    const [showProd, setShowProd] = useState(false)
    const [showDate, setShowDate] = useState(true)

    // Form fields
    const userIdRef = useRef(null)
    const sortTypeRef = useRef(null)

    const fetcher = async args => {
	setIsActive(false)
	setIsLoading(true)

	const response = await getTransactions(args)

	transactions = response.data
	hasNext = response.hasNext
	hasPrevious = response.hasPrevious
	pageNumber = response.pageNumber
	pageSize = response.pageSize

	startIndex = response.startIndex
	endIndex = response.endIndex
	resultsCount = response.count

	setIsLoading(false)
	setTimeout(() => {
	    setIsActive(true)
	}, 200)
    }

    const handleSubmit = async e => {
	e.preventDefault()
	const userId = userIdRef.current.value
	const sortType = sortTypeRef.current.value
	fetcher({ pageNumber, pageSize, userId, sortType })
    }

    const handleNext = () => {
	const userId = userIdRef.current.value || ""
	const sortType = sortTypeRef.current.value || "noSort"
	if (hasNext) {
	    fetcher({ pageNumber: pageNumber + 1, pageSize, userId, sortType })
	}
    }

    const handlePrevious = () => {
	const userId = userIdRef.current.value || ""
	const sortType = sortTypeRef.current.value || "noSort"
	if (hasPrevious) {
	    fetcher({ pageNumber: pageNumber - 1, pageSize, userId, sortType })
	}
    }

    return (
    	<SceneContainer className="transactions__scene-container">
    	    <SceneTitle title="Transactions" subtitle="Entire list of transactions" />

	    <div className="form-container">
		<form className="form form-inline" onSubmit={handleSubmit}>
		    <div className="form-group">
			<label htmlFor="">Filter</label>
			<input type="text" ref={userIdRef} />
		    </div>

    		    <div className="form-group">
    			<label htmlFor="">Sort by</label>
			<select ref={sortTypeRef}>
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

	    {!isLoading && transactions && (
		<ul className="table-toggle-list">
		    <li>
			<label htmlFor="id-ch">
			    <input type="checkbox" id="id-ch" checked={showId}
				   onChange={() => setShowId(!showId)}/> Id
			</label>
		    </li>
		    <li>
			<label htmlFor="user-id-ch">
			    <input type="checkbox" id="user-id-ch" checked={showUserId}
				   onChange={() => setShowUserId(!showUserId)}/> UserId
			</label>
		    </li>
		    <li>
			<label htmlFor="cost-ch">
			    <input type="checkbox" id="cost-ch" checked={showCost}
				   onChange={() => setShowCost(!showCost)}/> Cost
			</label>
		    </li>
		    <li>
			<label htmlFor="prod-ch">
			    <input type="checkbox" id="prod-ch" checked={showProd}
				   onChange={() => setShowProd(!showProd)}/> Prod
			</label>
		    </li>
		    <li>
			<label htmlFor="date-ch">
			    <input type="checkbox" id="date-ch" checked={showDate}
				   onChange={() => setShowDate(!showDate)}/> Date
			</label>
		    </li>
		</ul>
	    )}

    	    <div className="table-container">
    		{!isLoading && transactions && (
    		    <>
    			<table className={`table ${isActive && "active"}`}>
    			    <thead>
    				<tr>
    				    {showId     && <th>Id</th>}
    				    {showUserId && <th>User Id</th>}
    				    {showCost   && <th>Cost</th>}
    				    {showProd   && <th>Producst count</th>}
				    {showDate   && <th>Date</th>}
    				</tr>
    			    </thead>
    			    <tbody>
    				{transactions.map(transaction => (
    				    <tr key={transaction._id}>
    					{showId     && <td>{transaction._id}</td>}
    					{showUserId && <td>{transaction.userId}</td>}
    					{showCost   && <td>${transaction.cost}</td>}
    					{showProd   && <td>{transaction.products &&
    							transaction.products.length}</td>}
					{showDate   && <td>{transaction.createdAt}</td>}
    				    </tr>
    				))}
    			    </tbody>
    			</table>
			<div className="table-page-description">
			    {`Page ${pageNumber}. Showing ${resultsCount} results, from ${startIndex} to ${endIndex}`}
			</div>
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
