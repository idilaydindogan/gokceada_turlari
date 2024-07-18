import React from "react";
// import homebanner from "../../public/homebanner.webp";
import homebanner from "../../public/anasayfa.webp";
import Image from "next/image";
import SliderBanner from "./Elements/SliderBanner";
import eco from "../../public/tourImages/eco.png";
import kultur from "../../public/tourImages/kultur.png";
import local from "../../public/tourImages/local.png";
import Link from "next/link";

const HomePage = () => {
	return (
		<div className=" w-full md:min-h-screen  relative">
			<div className="mt-4 ">
				<Image
					src={homebanner}
					alt="gokceada turlari brand logo"
					className="opacity-90 m-auto"
					sizes="80vw"
					// Make the image display full width
					style={{
						width: "80%",
						height: "auto",
					}}
				/>
			</div>
			<div className="absolute top-[100px] lg:top-[200px] flex flex-col w-full justify-center text-center">
				<h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-beige border-t border-white mx-20 pt-8">
					GÖKÇEADA'DASINIZ YAVAŞLAYIN!
				</h1>
				<h5 className="text-xl lg:text-3xl  text-beige border-b border-white mx-20 py-8">
					SİZE ÖZEL BUTİK TURLAR
				</h5>
			</div>

			<div className="bg-beige flex justify-center gap-2 md:gap-8 px-2 my-10 text-sm lg:text-base border-y border-beige  py-8 cursor-pointer">
				<Link href={`/tour_type/Eco`} className="flex flex-col items-center">
					<div className="bg-lightBlue rounded-full w-32 h-32  md:h-40 md:w-40 flex justify-center items-center hover:bg-beige">
						<Image src={eco} alt="gokceada turlari brand logo" width={200} />
					</div>
					<h2 className="text-center text-blue font-mediun p-2 hover:underline">
						EKOTURİZM TURLARI
					</h2>
				</Link>
				<Link
					href={`/tour_type/Culture`}
					className="flex flex-col items-center"
				>
					<div className="bg-lightBlue rounded-full w-32 h-32 md:h-40 md:w-40 flex justify-center items-center hover:bg-beige">
						<Image src={kultur} alt="gokceada turlari brand logo" width={250} />
					</div>
					<h2 className="text-center text-blue font-mediun p-2 hover:underline">
						KÜLTÜR TURLARI
					</h2>
				</Link>
				<Link href={`/tour_type/Food`} className="flex flex-col items-center">
					<div className="bg-lightBlue rounded-full w-32 h-32  md:h-40 md:w-40 flex justify-center items-center hover:bg-beige">
						<Image
							src={local}
							alt="gokceada turlari brand logo"
							width={160}
							className="p-4"
						/>
					</div>
					<h2 className="text-center text-blue font-mediun p-2 hover:underline">
						YEREL LEZZETLER
					</h2>
				</Link>
			</div>
			<SliderBanner />
			<div className="bg-lightBlue h-20 flex items-center justify-center mb-12 text-lg text-blue font-semibold">
				<h5>Kişilere ve gruplara özel kapalı turlar için iletişime geçiniz.</h5>
			</div>
		</div>
	);
};

export default HomePage;
