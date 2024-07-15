import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import eco from "../../../public/tourImages/eco.png";
import kultur from "../../../public/tourImages/kultur.png";
import local from "../../../public/tourImages/local.png";

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
			<div className="flex justify-center  text-blue">
				<h2>{tour.fields.Name}</h2>
			</div>
			<div className="flex justify-around items-center text-blue w-full ">
				<div>
					{tour.fields.Type === "Eco" ? (
						<Image
							src={eco}
							alt="gokceada tours"
							className="text-center"
							width={80}
						/>
					) : tour.fields.Type === "Culture" ? (
						<Image
							src={kultur}
							alt="gokceada tours"
							className="text-center"
							width={80}
						/>
					) : (
						<Image
							src={local}
							alt="gokceada tours"
							className="text-center"
							width={80}
						/>
					)}
				</div>
				<div className="space-y-2 w-full pl-4">
					<h5 className="text-sm italic">{tour.fields.Location}</h5>
					<div className="border-b border-blue w-28"></div>
					<p className="text-sm">
						{parseInt(tour.fields.Price).toLocaleString()} <span>TRY</span>
					</p>
				</div>
				<div>
					<Button title="Keşfet" id={tour.id} />
				</div>
			</div>
		</Link>
	);
};

export default SingleTourBox;
