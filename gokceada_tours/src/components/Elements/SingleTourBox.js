import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleTourBox = ({ tour }) => {
	return (
		<Link
			href={`/allTours/${tour.id}`}
			className="cursor-pointer w-[400px] border border-lightBlue p-4 mb-4 rounded-md flex flex-col items-center space-y-4 hover:border-2 hover:border-blue"
		>
			<div className="flex justify-center">
				<Image
					src={`/tourImages/${tour.fields.ImageSrc}`}
					alt="gokceada tours"
					className="opacity-90 text-center"
					width={300}
					height={300}
				/>
			</div>
			<div className="flex justify-center text-blue">
				<h2>{tour.fields.Name}</h2>
			</div>
		</Link>
	);
};

export default SingleTourBox;
