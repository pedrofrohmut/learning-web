import { useState, useEffect } from "react"

import SceneContainer from "../components/shared/scene-container"
import SceneTitle from "../components/shared/scene-title"
import Map from "../components/geography-scene/map"

import { getMapData } from "../api/geography"

let mapData = null

const GeographyScene = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
	setIsLoading(true)
	getMapData().then(data => {
	    mapData = data
	    setIsLoading(false)
	})
	return () => {
	    mapData = null
	}
    }, [])

    return (
	<SceneContainer>
	    <SceneTitle title="Geography" subtitle="Find where users are located" />

	    {isLoading && <h1>Loading</h1>}

	    {!isLoading && mapData && (
		<div className="map-container">
		    <Map data={mapData} />
		</div>
	    )}
	</SceneContainer>
    )
}

export default GeographyScene
