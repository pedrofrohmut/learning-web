import { useGetProductsQuery } from "../redux/api"
import SceneTitle from "../components/shared/scene-title"
import Product from "../components/products-scene/product"
import SceneContainer from "../components/shared/scene-container"

const ProductsScene = () => {
    const { data: products, isLoading } = useGetProductsQuery()

    return (
	<SceneContainer className="product-scene__container">
	    <SceneTitle title="Products" subtitle="See your list of products" />

	    {!isLoading && products && (
		<div className="product-scene__products-container">
		    {products.map(product => (
			<Product key={product._id} product={product} />
		    ))}
		</div>
	    )}
	</SceneContainer>
    )
}

export default ProductsScene
