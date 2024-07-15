import TourTypesList from "@/components/TourTypesList";
import React from "react";

const page = ({ params }) => {
	return <TourTypesList Type={params.type} />;
};

export default page;
