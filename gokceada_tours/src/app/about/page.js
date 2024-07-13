import base from "@/base";
import AboutPage from "@/components/AboutPage";
import React from "react";

// const table = base("TourList");

// async function fetchData() {
// 	const response = await fetch(
// 		`https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID}/TourList`,
// 		{
// 			headers: {
// 				Authorization: `Bearer ${process.env.NEXT_PUBLIC_AIRTABLE_API_KEY}`,
// 			},

// 			next: {
// 				revalidate: 60,
// 			},
// 		}
// 	);
// 	const data = await response.json();
// 	return data;
// }

const page = async () => {
	// const results = await fetchData();
	// console.log(results);
	return <AboutPage />;
};

export default page;
