import { useEffect, useState } from "react"
import { StarBorderOutlined, StarOutlined } from "@mui/icons-material"
import { css } from "@emotion/react"

const ratingCss = css`
ul {
  list-style: none;
  display: flex;
  align-items: center;
}

ul svg {
  color: var(--neutral-400);
}
`

const Rating = ({ rating }) => {
    const [stars, setStars] = useState([])

    useEffect(() => {
	const arr = []

	const filledStarsCount = Math.round(rating)
	for (let i = 0; i < filledStarsCount; i++) {
	    arr.push(<StarOutlined />)
	}

	const emptyStarsCount = 5 - filledStarsCount
	for (let i = 0; i < emptyStarsCount; i++) {
	    arr.push(<StarBorderOutlined />)
	}

	setStars(arr)
    }, [])

    return (
	<div className="product__rating" css={ratingCss}>
	    <ul>
		{stars.map((star, i) => (
		    <li key={i}>{star}</li>
		))}
	    </ul>
	</div>
    )
}

export default Rating
