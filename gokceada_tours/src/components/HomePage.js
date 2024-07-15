import React from "react";
import homebanner from "../../public/homebanner.webp";
import Image from "next/image";
import SliderBanner from "./Elements/SliderBanner";

const HomePage = () => {
	return (
		<div className=" w-full md:min-h-screen  relative">
			<Image
				src={homebanner}
				alt="gokceada turlari brand logo"
				className="opacity-90"
				sizes="100vw"
				// Make the image display full width
				style={{
					width: "100%",
					height: "auto",
				}}
			/>
			<div className="absolute top-[200px] flex flex-col w-full justify-center text-center">
				<h1 className="text-3xl lg:text-5xl font-semibold text-beige border-t border-white mx-20 pt-8">
					GÖKÇEADA'DASINIZ YAVAŞLAYIN!
				</h1>
				<h5 className="text-xl lg:text-3xl  text-beige border-b border-white mx-20 py-8">
					SİZE ÖZEL BUTİK TURLAR
				</h5>
			</div>
			<SliderBanner />
			<div className="flex justify-center gap-2 md:gap-8 px-2 my-10 text-sm lg:text-base border-y border-beige md:mx-12 py-8 cursor-pointer">
				<div className="bg-lightBlue rounded-full h-40 w-40 flex justify-center items-center hover:bg-beige">
					<h2 className="text-center text-blue font-bold p-2">
						EKOTURIZM TURLARI
					</h2>
				</div>
				<div className="bg-lightBlue rounded-full h-40 w-40 flex justify-center items-center hover:bg-beige">
					<h2 className="text-center text-blue font-bold p-4">
						KÜLTÜR TURLARI
					</h2>
				</div>
				<div className="bg-lightBlue rounded-full h-40 w-40 flex justify-center items-center hover:bg-beige">
					<h2 className="text-center text-blue font-bold p-4">
						YEREL LEZZETLER
					</h2>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
