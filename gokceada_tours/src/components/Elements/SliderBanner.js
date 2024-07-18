"use client";
import Airtable from "airtable";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
require("dotenv").config();
import Button from "./Button";

const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base("appnO1e5NKNO2456y");
const SliderBanner = () => {
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

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 3000,
		autoplaySpeed: 3000,
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className=" mb-12 px-8 ">
			<div className="lg:w-5/6 m-auto">
				<div className="my-16">
					<Slider {...settings} className="">
						{data.map((tour) => (
							<div className="border border-lightBlue h-[280px] text-blue rounded-lg">
								<div className="bg-beige flex justify-center items-center p-2 h-44 rounded-lg">
									<Image
										src={`/tourImages/${tour.fields.ImageSrc}`}
										alt="gokceada tours"
										className="slide_image"
										objectFit="cover"
										width={200}
										height={200}
									/>
								</div>
								<div className="flex flex-col justify-center items-center pt-4 space-y-4 text-center">
									<h5 className="px-2 w-full truncate text-sm font-light">
										{tour.fields.Name}
									</h5>

									<Button title="Keşfet" id={tour.id} />
								</div>
							</div>
						))}{" "}
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default SliderBanner;
