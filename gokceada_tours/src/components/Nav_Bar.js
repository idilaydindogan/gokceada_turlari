"use client";
import React, { useEffect, useState } from "react";
import logo from "../../public/Keci_logo_removebg.png";

require("dotenv").config();
import Airtable from "airtable";
import Link from "next/link";
import Image from "next/image";
import NavbarLinks from "./Elements/NavbarLinksMobile";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base("appXs4b7ViU3gh1eK");
const Nav_Bar = () => {
	const [open, setOpen] = useState(false);

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
	return (
		<nav className="bg-beige text-blue text-base shadow-md">
			<div className="mx-auto flex max-w-7xl items-center justify-between py-8 lg:px-8 px-4">
				<div className="flex lg:flex-1 items-center space-x-4">
					<Link className="" href="/">
						<Image
							src={logo}
							alt="gokceada turlari brand logo"
							className="w-40 h-40 lg:w-44 lg:h-44"
						/>
					</Link>
					<div className="flex flex-col items-start font-semibold text-2xl md:text-3xl xl:text-4xl space-y-2">
						<h2>GÖKÇEADA</h2>
						<h2>TURLARI</h2>
					</div>
				</div>
				<div className="hidden lg:flex lg:gap-x-2 xl:gap-x-4">
					<Link href="/">
						<h4 className="font-semibold leading-6">Anasayfa</h4>
					</Link>
					<NavbarLinks data={data} />
				</div>
				<button className="lg:hidden pr-8" onClick={() => setOpen(!open)}>
					<GiHamburgerMenu size={28} />
				</button>
				{/*MOBILE NAVBAR*/}
				{open && (
					<div
						className={`lg:hidden flex flex-col bg-beige absolute w-full h-full bottom-0 z-50 py-16  space-y-4 lg:space-y-0 border-2  border-blue duration-300 `}
					>
						<button
							className="pr-8 flex justify-end"
							onClick={() => setOpen(!open)}
						>
							<RxCross2 size={28} />
						</button>
						<Link className="flex justify-center " href="/">
							<Image
								src={logo}
								alt="gokceada turlari brand logo"
								className="w-40 h-40"
							/>
						</Link>
						<Link href="/">
							<button onClick={() => setOpen(false)}>
								<h4 className="font-semibold leading-6 pl-8">Anasayfa</h4>
							</button>
						</Link>
						<NavbarLinks data={data} setOpen={setOpen} open={open} />
					</div>
				)}
			</div>
		</nav>
	);
};

export default Nav_Bar;
