"use client";
import React, { useEffect, useState } from "react";
require("dotenv").config();
import Airtable from "airtable";
import Image from "next/image";
const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base("appnO1e5NKNO2456y");
import eco from "../../public/tourImages/eco.png";
import kultur from "../../public/tourImages/kultur.png";
import local from "../../public/tourImages/local.png";

const TourPage = ({ id }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		base("TourLists").find(id, function (err, record) {
			if (err) {
				console.error(err);
				return;
			}

			setData(record.fields);
		});
	}, [id]);

	return (
		<div className="min-h-screen mt-12 flex flex-col items-center space-y-4 px-8 md:px-12 mb-12">
			<div className="flex justify-center">
				{data.ImageSrc ? (
					<Image
						src={`/tourImages/${data.ImageSrc}`}
						alt="gokceada tours"
						className="opacity-90 text-center"
						width={500}
						height={300}
					/>
				) : (
					<Image
						src={`/tourImages/rumKoy.jpeg`}
						alt={data.Name}
						className="opacity-90 text-center"
						width={500}
						height={300}
					/>
				)}
			</div>
			<div className="text-xl lg:text-2xl text-blue pt-4 bg-lightBlue rounded-md w-full text-center p-4 ">
				{data.Name}
			</div>

			{data.Body && (
				<div className="bg-beige rounded-md px-6 py-8 flex flex-col md:flex-row gap-y-4 md:gap-x-4 text-blue ">
					<div className="md:hidden md:w-2/5 space-y-4 border border-lightBlue p-2">
						<h5 className="font-medium underline">Kişi Başı Tur Fiyatı</h5>
						<p className="bg-lightBlue py-4 text-xl font-semibold text-center">
							{parseInt(data.Price).toLocaleString()} <span>TRY</span>
						</p>
					</div>
					<div className="space-y-4 text-blue md:w-3/5 border  border-lightBlue p-4">
						<h5 className="font-medium underline">Tur Detayları</h5>
						<div className="text-sm lg:text-base space-y-2 md:space-y-4">
							<p>{data.Body}</p>
							<p>{data.Body2}</p>
							<p>{data.Body3}</p>
							<p>{data.Body4}</p>
							<p>{data.Body5}</p>
							<p>{data.Body6}</p>
						</div>
					</div>
					<div className=" hidden md:flex md:flex-col justify-between w-2/5 space-y-4 border border-lightBlue p-4 ">
						<div>
							<div className="space-y-4">
								<h5 className="font-medium underline">Kişi Başı Tur Fiyatı</h5>
								<p className="bg-lightBlue py-4 text-xl font-semibold text-center">
									{parseInt(data.Price).toLocaleString()} <span>TRY</span>
								</p>
							</div>
							<div className="mt-4 flex justify-start space-x-8 items-center">
								{data.Type === "Eco" ? (
									<Image
										src={eco}
										alt="gokceada tours"
										className="text-center"
										width={60}
									/>
								) : data.Type === "Culture" ? (
									<Image
										src={kultur}
										alt="gokceada tours"
										className="text-center"
										width={60}
									/>
								) : (
									<Image
										src={local}
										alt="gokceada tours"
										className="text-center"
										width={60}
									/>
								)}
								<h2 className="text-lg">{data.TypeName}</h2>
							</div>
							{data.Services && (
								<div className="space-y-2 mt-4">
									<h5 className="font-medium underline">
										Fiyata dahil hizmetler{" "}
									</h5>
									<p>{data.Services}</p>
									<p>{data.Services2}</p>
									<p>{data.Services3}</p>
								</div>
							)}
						</div>
						{(data.TourNotes || data.TourNotes2) && (
							<div className="flex flex-col  justify-end space-y-2 text-sm pt-12">
								<p>*{data.TourNotes}</p>
								{data.TourNotes2 && <p>*{data.TourNotes2}</p>}
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default TourPage;
