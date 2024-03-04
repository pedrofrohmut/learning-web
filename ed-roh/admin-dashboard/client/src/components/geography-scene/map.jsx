import { ResponsiveChoropleth } from '@nivo/geo'

import geoData from "../../data/geo-data.json"

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const fillData = [
    {
	match: {
	    id: 'CAN'
	},
	id: 'dots'
    },
    {
	match: {
	    id: 'CHN'
	},
	id: 'lines'
    },
    {
	match: {
	    id: 'ATA'
	},
	id: 'gradient'
    }
]

const defsData = [
    {
	id: 'dots',
	type: 'patternDots',
	background: 'inherit',
	color: '#38bcb2',
	size: 4,
	padding: 1,
	stagger: true
    },
    {
	id: 'lines',
	type: 'patternLines',
	background: 'inherit',
	color: '#eed312',
	rotation: -45,
	lineWidth: 6,
	spacing: 10
    },
    {
	id: 'gradient',
	type: 'linearGradient',
	colors: [
	    {
		offset: 0,
		color: '#000'
	    },
	    {
		offset: 100,
		color: 'inherit'
	    }
	]
    }
]

/* data format : { id: country_iso_3, value: int } */
const Map = ({ data }) => (
    <ResponsiveChoropleth
        data={data}
        features={geoData.features}
        margin={{ top: 0, right: 0, bottom: 0, left: -30 }}
        colors="GnBu"
        domain={[ 0, 60 ]}
        unknownColor="#888"
        label="properties.name"
        valueFormat=".2s"
        projectionScale={135}
        projectionTranslation={[ 0.50, 0.60 ]}
        borderWidth={0.5} /* countries borders */
        borderColor="#152538"
        legends={[
            {
                anchor: 'bottom-left',
                direction: 'column',
                justify: true,
                translateX: 40,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 84,
                itemHeight: 28,
                itemDirection: 'left-to-right',
                itemTextColor: 'white',
                itemOpacity: 0.90,
                symbolSize: 26,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            //itemTextColor: 'var(--neutral-100)',
                            itemTextColor: 'orange',
                            itemOpacity: 1,
                        }
                    }
                ]
            }
        ]}
    />
)

export default Map
