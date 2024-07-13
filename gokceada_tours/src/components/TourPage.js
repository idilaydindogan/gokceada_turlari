"use client";
import React, { useEffect, useState } from "react";
require("dotenv").config();
import Airtable from "airtable";
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
			setData(record);
		});
	}, [id]);
	console.log(data);
	return <div className="min-h-screen">TourPage</div>;
};

export default TourPage;
