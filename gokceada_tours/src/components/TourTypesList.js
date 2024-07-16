"use client";
import React, { useEffect, useState } from "react";
require("dotenv").config();
import Airtable from "airtable";
import Image from "next/image";
import SingleTourBox from "./Elements/SingleTourBox";
const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base("appnO1e5NKNO2456y");

const TourTypesList = ({ Type }) => {
	const [data, setData] = useState([]);
	const groupName =
		Type === "Eco"
			? "Ekoturizm"
			: Type === "Culture"
			? "Kültür"
			: "Yerel Lezzet";

	useEffect(() => {
		base("TourLists")
			.select({
				view: "Grid view",
			})
			.eachPage((records, fetchNextPage) => {
				setData(records.filter((item) => item.fields.Type === Type));
				fetchNextPage();
			});
	}, []);

	return (
		<div className="min-h-screen px-8 mt-12 w-full">
			<div className="bg-lightBlue w-full p-8 text-center rounded-md mb-8">
				<h1 className="text-2xl font-semibold text-blue">
					Gökçeada <span>{groupName}</span> Turları
				</h1>
			</div>

			<div className="md:w-[820px] xl:w-[1250px] m-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
				{data.map((filteredItem) => (
					<SingleTourBox tour={filteredItem} />
				))}
			</div>
		</div>
	);
};

export default TourTypesList;
