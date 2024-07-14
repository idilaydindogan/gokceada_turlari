import React from "react";
import homebanner from "../../public/homebanner.webp";
import Image from "next/image";

const HomePage = () => {
	return (
		<div className=" w-full min-h-screen  relative">
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
				<h1 className="text-5xl font-semibold text-beige border-t border-white mx-20 pt-8">
					GÖKÇEADA'DASINIZ YAVAŞLAYIN!
				</h1>
				<h5 className="text-3xl  text-beige border-b border-white mx-20 py-8">
					SİZE ÖZEL BUTİK TURLAR
				</h5>
			</div>
		</div>
	);
};

export default HomePage;
