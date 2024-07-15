import Link from "next/link";
import React from "react";

const Button = ({ id, title }) => {
	return (
		<Link
			className="bg-blue text-beige px-4 py-1 text-sm md:text-base rounded-md hover:bg-beige hover:text-blue"
			href={`/allTours/${id}`}
		>
			{title}
		</Link>
	);
};

export default Button;
