import { useState, useEffect } from "react"

import { getSales } from "../api/sales"
import SceneContainer from "../components/shared/scene-container"
import SceneTitle from "../components/shared/scene-title"
import LineGraph from "../components/overview-scene/line-graph"

let lines = null

const OverviewScene = () => {
    const [view, setView] = useState("units")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
	setIsLoading(true)
	getSales().then(data => {
	    lines = data
	    setIsLoading(false)
	})

	// Component will unmount
	return () => {
	    lines = null
	}
    }, [])

    return (
	<SceneContainer>
	    <SceneTitle title="Overview" subtitle="Overview of general revenue and profit" />

	    <select onChange={e => setView(e.target.value)} value={view}>
		<option value="units">Units</option>
		<option value="sales">Sales</option>
	    </select>

	    {isLoading && <p>Is loading...</p>}

	    {!isLoading && lines && (
		<div className="graph-container">
		    <LineGraph lines={lines} />
		</div>
	    )}
	</SceneContainer>
    )
}

export default OverviewScene
