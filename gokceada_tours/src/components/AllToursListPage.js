"use client";
import React, { useEffect, useState } from "react";
require("dotenv").config();
import Airtable from "airtable";
import SingleTourBox from "./Elements/SingleTourBox";

const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base("appnO1e5NKNO2456y");

const AllToursListPage = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		base("TourLists")
			.select({
				// Selecting the first 3 records in Grid view:

				view: "Grid view",
			})
			.eachPage((records, fetchNextPage) => {
				setData(records);
				fetchNextPage();
			});
	}, []);

	return (
		<div className="min-h-screen px-8 mt-12 w-full">
			<div className="bg-lightBlue w-full p-8 text-center rounded-md mb-8">
				<h1 className="text-2xl font-semibold text-blue">Gökçeada Turları</h1>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
				{data.map((tour) => (
					<SingleTourBox tour={tour} />
				))}
			</div>
		</div>
	);
};

export default AllToursListPage;
