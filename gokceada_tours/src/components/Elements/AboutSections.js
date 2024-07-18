import React from "react";

const AboutSections = ({ data }) => {
	return (
		<div className="px-8 md:px-20  text-blue">
			<div key={data.id} className="">
				<h1 className="text-lg md:text-2xl pb-2 font-semibold px-2">
					{data.fields.MainTitle}
				</h1>
				<h4 className="text-base lg:text-lg font-medium mb-4 rounded-md bg-beige py-4 px-2">
					{data.fields.SubTitle}
				</h4>
				<p className="text-sm lg:text-base">{data.fields.Body}</p>
			</div>
		</div>
	);
};

export default AboutSections;
