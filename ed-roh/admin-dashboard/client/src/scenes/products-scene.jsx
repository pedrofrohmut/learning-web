import { useGetProductsQuery } from "../redux/api"
import SceneTitle from "../components/scene-title"
import Product from "../components/products-scene/product"

const ProductsScene = () => {
    const { data: products, isLoading } = useGetProductsQuery()

    return (
	<div className="product-scene__container">
	    <SceneTitle title="Products" subtitle="See your list of products" />

	    {!isLoading && products && (
		<div className="product-scene__products-container">
		    {products.map(product => (
			<Product key={product._id} product={product} />
		    ))}
		</div>
	    )}
	</div>
    )
}

export default ProductsScene
