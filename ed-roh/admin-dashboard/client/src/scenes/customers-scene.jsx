import { useState, useEffect } from "react"
import SceneTitle from "../components/scene-title"
import { useGetCustomersQuery } from "../redux/api"
import { phoneFmt } from "../utils"

const CustomersScene = () => {
    const { data: customers, isLoading } = useGetCustomersQuery()

    const [showId, setShowId] = useState(false)
    const [showName, setShowName] = useState(true)
    const [showEmail, setShowEmail] = useState(true)
    const [showPhoneNumber, setShowPhoneNumber] = useState(true)
    const [showCountry, setShowCountry] = useState(true)
    const [showOccupation, setShowOccupation] = useState(true)
    const [showRole, setShowRole] = useState(false)

    const [pageN, setPageN] = useState(0)
    const [pageSize, setPageSize] = useState(10)
    const [customersSlice, setCustomersSlice] = useState([])

    useEffect(() => {
	const pageStart = pageN * pageSize
	const pageEnd = (pageN * pageSize) + pageSize
	if (!isLoading && customers) {
	    setCustomersSlice(customers.slice(pageStart, pageEnd))
	}
    }, [isLoading, customers, pageN])

    const hasPrevious = customers && pageN > 0
    const hasNext = customers && (pageN + 1) * pageSize < customers.length

    return (
	<div className="customers-scene__container">
	    <SceneTitle title="Customers" subtitle="List of customers" />

	    <ul className="customers__filters">
		<li>
		    <label htmlFor="id-ch">
			<input type="checkbox" onChange={() => setShowId(!showId)}
			       checked={showId} id="id-ch" /> ID
		    </label>
		</li>
		<li>
		    <label htmlFor="name-ch">
			<input type="checkbox" onChange={() => setShowName(!showName)}
			       checked={showName} id="name-ch" /> Name
		    </label>
		</li>
		<li>
		    <label htmlFor="email-ch">
			<input type="checkbox" onChange={() => setShowEmail(!showEmail)}
			    checked={showEmail} id="email-ch" /> E-mail
		    </label>
		</li>
		<li>
		    <label htmlFor="phone-ch">
			<input type="checkbox" onChange={() => setShowPhoneNumber(!showPhoneNumber)}
			       checked={showPhoneNumber} id="phone-ch" /> Phone Number
		    </label>
		</li>
		<li>
		    <label htmlFor="country-ch">
			<input type="checkbox" onChange={() => setShowCountry(!showCountry)}
			       checked={showCountry} id="country-ch" /> Country
		    </label>
		</li>
		<li>
		    <label htmlFor="occupation-ch">
			<input type="checkbox" onChange={() => setShowOccupation(!showOccupation)}
			       checked={showOccupation} id="occupation-ch" /> Occupation
		    </label>
		</li>
		<li>
		    <label htmlFor="role-ch">
			<input type="checkbox" onChange={() => setShowRole(!showRole)}
			       checked={showRole} id="role-ch" /> Role
		    </label>
		</li>
	    </ul>

	    <div className="customers__table-container">
		{!isLoading && customers && (
		    <>
			<table className="customers__table">
			    <thead>
				<tr>
				    {showId          && <th className="th-id">ID</th>}
				    {showName        && <th className="th-name">Name</th>}
				    {showEmail       && <th className="th-email">E-mail</th>}
				    {showPhoneNumber && <th className="th-phone">Phone Number</th>}
				    {showCountry     && <th className="th-country">Country</th>}
				    {showOccupation  && <th className="th-occupation">Occupation</th>}
				    {showRole        && <th className="th-role">Role</th>}
				</tr>
			    </thead>
			    <tbody>
				{customersSlice.map(customer => (
				    <tr key={customer._id}>
					{showId          && <td>{customer._id}</td>}
					{showName        && <td>{customer.name}</td>}
					{showEmail       && <td>{customer.email}</td>}
					{showPhoneNumber && <td>{phoneFmt(customer.phoneNumber)}</td>}
					{showCountry     && <td>{customer.country}</td>}
					{showOccupation  && <td>{customer.occupation}</td>}
					{showRole        && <td>{customer.role}</td>}
				    </tr>
				))}
			    </tbody>
			</table>
			<div className="customers__buttons-container">
			    <button onClick={() => setPageN(pageN - 1)} disabled={!hasPrevious}>
				Previous
			    </button>
			    <button onClick={() => setPageN(pageN + 1)} disabled={!hasNext}>
				Next
			    </button>
			</div>
		    </>
		)}
	    </div>
	</div>
    )
}

export default CustomersScene
