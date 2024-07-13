"use client";
import React, { useEffect, useState } from "react";
require("dotenv").config();
import Airtable from "airtable";
import image from "../../public/about_island1.jpg";

import Image from "next/image";
import AboutSections from "./Elements/AboutSections";

const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base("appXs4b7ViU3gh1eK");

const AboutPage = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		base("AboutIsland")
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
		<div className="min-h-screen">
			<div className=" w-full  relative mt-4">
				<Image
					src={image}
					alt="gokceada turlari brand logo"
					className="opacity-90"
					sizes="100vw"
					objectFit="contain"
				/>
				<div className="absolute top-[50px] md:top-[200px] flex flex-col w-full justify-center text-center">
					<h1 className="text-2xl lg:text-5xl font-semibold text-beige  mx-20 pt-8">
						GÖKÇEADA'DASINIZ YAVAŞLAYIN!
					</h1>
				</div>
			</div>
			<div className="">
				{data.map((item) => (
					<AboutSections data={item} />
				))}
			</div>
		</div>
	);
};

export default AboutPage;
