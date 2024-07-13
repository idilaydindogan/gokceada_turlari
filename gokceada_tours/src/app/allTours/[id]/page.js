import TourPage from "@/components/TourPage";
import React from "react";

const page = ({ params }) => {
	return <TourPage id={params.id} />;
};

export default page;
