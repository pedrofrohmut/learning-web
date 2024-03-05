import { ResponsiveLine } from '@nivo/line'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const LineGraph = ({ lines }) => (
    <ResponsiveLine
	data={lines}
	margin={{ top: 50, right: 110, bottom: 60, left: 90 }}
	xScale={{ type: 'point' }}
	yScale={{
	    type: 'linear',
	    min: 'auto',
	    max: 'auto',
	    stacked: true,
	    reverse: false
	}}
	yFormat=" >-.2f"
	axisTop={null}
	axisRight={null}
	axisBottom={{
	    tickSize: 5,
	    tickPadding: 5,
	    tickRotation: 0,
	    legend: 'Months',
	    legendOffset: 46,
	    legendPosition: 'middle',
	    truncateTickAt: 0
	}}
	axisLeft={{
	    tickSize: 5,
	    tickPadding: 5,
	    tickRotation: 0,
	    legend: 'Count',
	    legendOffset: -66,
	    legendPosition: 'middle',
	    truncateTickAt: 0
	}}
	pointSize={10}
	pointColor={{ theme: 'background' }}
	pointBorderWidth={2}
	pointBorderColor={{ from: 'serieColor' }}
	pointLabelYOffset={-12}
	enableTouchCrosshair={true}
	useMesh={true}
	legends={[
	    {
		anchor: 'bottom-right',
		direction: 'column',
		justify: false,
		translateX: 100,
		translateY: 0,
		itemsSpacing: 0,
		itemDirection: 'left-to-right',
		itemWidth: 80,
		itemHeight: 20,
		itemOpacity: 0.75,
		symbolSize: 12,
		symbolShape: 'circle',
		symbolBorderColor: 'rgba(0, 0, 0, .5)',
		effects: [
		    {
			on: 'hover',
			style: {
			    itemBackground: 'rgba(0, 0, 0, .03)',
			    itemOpacity: 1
			}
		    }
		]
	    }
	]}
	theme={{
	    text: {
		fontSize: "var(--fs-small)",
		fill: "var(--neutral-200)",
	    },
	    axis: {
		legend: {
		    text: {
			fontSize: "var(--fs-regular)",
			fill: "var(--primary-300)"
		    }
		}
	    },
	    tooltip: {
		container: {
		    backgroundColor: "var(--neutral-600)",
		    color: "var(--neutral-200)",
		    fontSize: "var(--fs-small)"
		}
	    },
	    grid: {
		line: {
		    stroke: "var(--neutral-200)",
		    strokeWidth: 1
		}
	    }
	}}
    />
)

export default LineGraph
