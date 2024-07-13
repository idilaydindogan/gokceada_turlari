import React from "react";
import Accordion from "./Elements/Accordion";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Keci_logo_removebg.png";
import { FaInstagram } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const footerInfo = [
	{
		title: "Turlarımız",
		children: [],
	},
	{
		title: "İletişim",
		children: [
			{
				icon: <FaPhoneVolume size={20} />,
				name: "+90 538 353 74 94",
			},
			{
				icon: <MdAlternateEmail size={20} />,
				name: "gokceadaturlari@gmail.com",
			},
		],
	},
];

const Footer = () => {
	return (
		<footer className=" py-4 px-8 w-full absolute bottom-0">
			<div className="hidden lg:block">
				<div className="bg-beige border-b border-blue h-16 flex justify-between px-20 items-center text-blue">
					<h2 className="text-2xl font-semibold">Gökçeada Turları</h2>
					<Link
						href={
							"https://www.instagram.com/gokceadatours/?igsh=MWVqYWhwZmRmMHF3dQ%3D%3D"
						}
						target="_blank"
					>
						<FaInstagram
							size={32}
							className="mr-12 hover:scale-125 cursor-pointer"
						/>
					</Link>
				</div>
				<div className="bg-beige flex justify-between px-20 items-start  text-blue">
					<Link className="" href="/">
						<Image
							src={logo}
							alt="gokceada turlari brand logo"
							className="w-40 h-40 lg:w-44 lg:h-44"
						/>
					</Link>
					<div className="flex space-x-12">
						<div className="pt-4">
							<h4 className="border-b border-blue font-semibold text-center mb-2">
								Turlarımız
							</h4>
							<div>
								<p>Tel: xxxxxxxxxxx</p>
							</div>
						</div>
						<div className="pt-4">
							<h4 className="border-b border-blue font-semibold text-center mb-2">
								İletişim
							</h4>
							<div className="space-y-2">
								<div className="flex items-center space-x-2">
									<FaPhoneVolume size={20} />
									<p>+90 538 353 74</p>
								</div>
								<Link
									href="mailto:gokceadaturlari@gmail.com"
									className="flex items-center space-x-2"
								>
									<MdAlternateEmail size={20} />
									<p>gokceadaturlari@gmail.com</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="lg:hidden">
				<Link className="flex justify-center border-t border-blue" href="/">
					<Image
						src={logo}
						alt="gokceada turlari brand logo"
						className="w-28 h-28"
					/>
				</Link>
				<div className="bg-blue border-b border-beige rounded-md mb-4 h-16 flex justify-between px-4  items-center text-beige">
					<h2 className="text-lg">Gökçeada Turları</h2>
					<Link
						href={
							"https://www.instagram.com/gokceadatours/?igsh=MWVqYWhwZmRmMHF3dQ%3D%3D"
						}
						target="_blank"
					>
						<FaInstagram
							size={32}
							className=" hover:scale-125 cursor-pointer"
						/>
					</Link>
				</div>
				{footerInfo.map((info, index) => (
					<Accordion
						key={index}
						title={info.title}
						className="bg-beige p-4 text-blue rounded-md"
						children={info.children}
					/>
				))}
			</div>
			<div className=""></div>
		</footer>
	);
};

export default Footer;

// <Accordion title="deneme" />
