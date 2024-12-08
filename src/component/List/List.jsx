import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import ScaleLoader from "react-spinners/ScaleLoader";

const List = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const fetchProducts = async () => {
		setLoading(true);
		try {
			let response = await fetch("https://dummyjson.com/products?limit=10");
			const data = await response.json();
			setProducts(data.products);
		} catch (error) {
			console.log(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	return (
		<>
			{loading ? (
				<div className='h-screen flex justify-center items-center'>
					<ScaleLoader color='#36d7b7' />
				</div>
			) : (
				<div className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6'>
					{products.map((product, index) => (
						<Card
							key={index}
							product={product}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default List;
