import React from "react";

const AboutSections = ({ data }) => {
	return (
		<div className="px-4 md:px-8 my-8 text-blue">
			<div key={data.id} className="">
				<h1 className="text-2xl pb-2 font-semibold px-2">
					{data.fields.MainTitle}
				</h1>
				<h4 className="text-lg font-medium mb-4 rounded-md bg-lightBlue py-4 px-2">
					{data.fields.SubTitle}
				</h4>
				<p className="">{data.fields.Body}</p>
			</div>
		</div>
	);
};

export default AboutSections;
