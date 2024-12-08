import React, { useState } from "react";

const Card = ({ product }) => {
	const { images, title, description, price } = product;
	const image = images[0];

	return (
		<div class='flex flex-col max-w-sm rounded overflow-hidden shadow-xl border-2 border-gray-200 cursor-pointer'>
			<img
				class='w-full h-72 object-contain object-center bg-gray-100'
				src={image}
				alt='Sunset in the mountains'
			/>
			<div className='flex flex-col justify-between flex-1'>
				<div class='px-6 py-4'>
					<div class='font-bold text-2xl mb-2'>$ {price}</div>
					<div class='font-bold text-lg mb-2 text-blue-500'>{title}</div>
					<small class='text-gray-400'>{description}</small>
				</div>
				<div class='px-6 pt-4 pb-2'>
					<button class='inline-block bg-orange-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
						Add to Cart
					</button>
					<button class='inline-block bg-orange-500 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2'>
						Buy Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Card;
