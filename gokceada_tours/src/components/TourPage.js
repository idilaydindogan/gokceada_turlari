"use client";
import React, { useEffect, useState } from "react";
require("dotenv").config();
import Airtable from "airtable";
import Image from "next/image";
const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base("appXs4b7ViU3gh1eK");
const TourPage = ({ id }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		base("TourLists").find(id, function (err, record) {
			if (err) {
				console.error(err);
				return;
			}
			console.log(record);
			setData(record.fields);
		});
	}, [id]);
	console.log(data.ImageSrc);
	return (
		<div className="min-h-screen mt-12 flex flex-col items-center space-y-4 px-12 mb-12">
			<div className="flex justify-center">
				<Image
					src={`/tourImages/${data.ImageSrc}`}
					alt="gokceada tours"
					className="opacity-90 text-center"
					width={500}
					height={300}
				/>
			</div>
			<div className="text-2xl text-blue pt-4 bg-lightBlue rounded-md w-full text-center p-4 ">
				{data.Name}
			</div>
			<div className="bg-beige rounded-md p-6 flex flex-col md:flex-row gap-y-4 md:gap-x-4 text-blue ">
				<div className="md:hidden md:w-2/5 space-y-4 border border-lightBlue p-2">
					<h5 className="font-medium underline">Kişi Başı Tur Fiyatı</h5>
					<p className="bg-lightBlue py-4 text-xl font-semibold text-center">
						{parseInt(data.Price).toLocaleString()} <span>TRY</span>
					</p>
				</div>
				<div className="space-y-4 text-blue md:w-3/5 border  border-lightBlue p-2">
					<h5 className="font-medium underline">Tur Detayları</h5>
					<p>{data.Body}</p>
					<p>{data.Body2}</p>
					<p>{data.Body3}</p>
					<p>{data.Body4}</p>
					<p>{data.Body5}</p>
				</div>
				<div className="hidden md:block w-2/5 space-y-4 border border-lightBlue p-2">
					<h5 className="font-medium underline">Kişi Başı Tur Fiyatı</h5>
					<p className="bg-lightBlue py-4 text-xl font-semibold text-center">
						{parseInt(data.Price).toLocaleString()} <span>TRY</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default TourPage;
