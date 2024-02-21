import { useState } from "react"

// TODO: make rating component

const Product = ({ product }) => {
    const { category, name, price, rating, description, _id: id, supply, stats } = product

    const [isExpanded, setIsExpanded] = useState(false)

    return (
	<div className="product__card">
	    <div className="product__card-container">
		<div className="product__category">{category}</div>
		<div className="product__name">{name}</div>
		<div className="product__price">${price}</div>
		<div className="product__rating">{rating}</div>
		<div className="product__description">{description}</div>

		<button className="product__button"
			onClick={() => setIsExpanded(!isExpanded)}>
		    See More
		</button>

		{isExpanded && (
		    <div>
			<div className="product__id">id: {id}</div>
			<div className="product__supply">Supply Left: {supply}</div>
			<div className="product__sales">
			    Yearly Sales This Year: {stats[0].yearlySalesTotal}
			</div>
			<div className="product__sold">
			    Yearly Units Sold This Year: {stats[0].yearlyTotalSoldUnits}
			</div>
		    </div>
		)}
	    </div>
	</div>
    )
}

export default Product
