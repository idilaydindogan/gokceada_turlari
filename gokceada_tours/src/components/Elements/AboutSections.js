import React from "react";

const AboutSections = ({ data }) => {
	return (
		<div className="px-4 md:px-8 my-8 text-blue">
			<div key={data.id} className="">
				<h1 className="text-lg font-semibold border-b border-beige">
					{data.fields.MainTitle}
				</h1>
				<h4 className="text-lg font-medium pt-4 pb-2">
					{data.fields.SubTitle}
				</h4>
				<p>{data.fields.Body}</p>
			</div>
		</div>
	);
};

export default AboutSections;
