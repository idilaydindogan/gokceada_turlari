"use client";
import Airtable from "airtable";
import { useEffect, useState } from "react";
import SingleTourBox from "./Elements/SingleTourBox";
require("dotenv").config();

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
		<div className="min-h-screen px-8 my-12 w-full">
			<div className="bg-lightBlue w-full p-8 text-center rounded-md mb-8">
				<h1 className="text-2xl font-semibold text-blue">Gökçeada Turları</h1>
			</div>
			<div className="md:w-[820px] xl:w-[1250px] m-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
				{data.map((tour) => (
					<SingleTourBox tour={tour} />
				))}
			</div>
		</div>
	);
};

export default AllToursListPage;
