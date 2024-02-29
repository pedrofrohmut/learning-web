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

    // Toggler fields
    const [showId, setShowId] = useState(false)
    const [showUserId, setShowUserId] = useState(true)
    const [showCost, setShowCost] = useState(true)
    const [showProd, setShowProd] = useState(false)
    const [showDate, setShowDate] = useState(true)

    // Animation
    const [isActive, setIsActive] = useState(false)

    const fetcher = async args => {
	setIsActive(false)
	setIsLoading(true)

	const response = await getTransactions(args)

	setTransactions(response.data)
	setHasNext(response.hasNext)
	setHasPrevious(response.hasPrevious)
	setPageNumber(response.pageNumber)
	setPageSize(response.pageSize)

	setIsLoading(false)
	setTimeout(() => {
	    setIsActive(true)
	}, 200)
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
    // Make a selectInput to choose between: 20, 50 and 100 results per page

    // ** Dont make sort on headers filters make more sense
    // ** Page size does not seem important

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
		{isLoading && (
		    <h1 style={{ marginTop: "2rem", textAlign: "center" }}>Is Loading...</h1>
		)}

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
